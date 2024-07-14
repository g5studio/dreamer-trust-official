import imagemin from 'imagemin';
import path from 'path';
import { globSync } from 'glob';
import fs from 'fs-extra';
import git from 'simple-git';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import pLimit from 'p-limit';

const sourceFolder = 'src/assets/source';
const targetFolder = 'src/assets/target';
const runAll = process.argv.includes('--run-all');
const concurrencyLimit = 10; // Set your concurrency limit here
const limit = pLimit(concurrencyLimit);

function removeStartSlash(str) {
  if (str.startsWith('/')) {
    return str.slice(1);
  }
  return str;
}

(async () => {
  const simpleGit = git();
  // get the status of the git repository
  const status = await simpleGit.status();
  // get the list of modified and untracked files
  const changedFiles = [...status.modified, ...status.not_added];

  const argv = process.argv.slice(2);
  console.log('argv:', argv);

  // only run on modified or untracked files to improve performance
  const files = globSync(`./${sourceFolder}/**/*.*`, { nodir: true }).filter((file) => {
    if (runAll) {
      return true;
    }
    const normalizedPath = file.replace(new RegExp(`\\${path.sep}`, 'g'), '/');
    if (argv.length === 0) {
      const isChanged = changedFiles.includes(normalizedPath);
      return isChanged;
    }
    return argv.some((arg) => normalizedPath.includes(`source/${removeStartSlash(arg)}`));
  });

  // // we need to optimize image first
  const folders = files.map((file) => path.dirname(file)).filter((value, index, self) => self.indexOf(value) === index);

  const checkInvalidPng = async () => {
    const pngList = files.filter((file) => file.endsWith('.png'));
    const checkInvalidPngPromiseList = pngList.map(async (file) => {
      const buffer = await fs.readFile(file);
      const isPng = buffer.slice(0, 8).toString('hex') === '89504e470d0a1a0a';
      if (!isPng) {
        throw new Error(`${file} is not a valid png file`);
      }
    });
    await Promise.all(checkInvalidPngPromiseList);
  };

  await checkInvalidPng();

  const jobs = [];

  for (let i = 0; i < folders.length; i++) {
    const folder = folders[i];
    const realFolderPath = folder.replace(new RegExp(`\\${path.sep}`, 'g'), '/');
    const pngAndJpgFilesGlob = `${realFolderPath}/*.{png,jpg}`;
    // destination is same folder path but target folder
    const destination = realFolderPath.replace(sourceFolder, targetFolder);
    jobs.push(
      limit(async () => {
        try {
          // 先將 source 內的 png/jpg 進行壓縮
          await imagemin([pngAndJpgFilesGlob], {
            destination,
            plugins: [
              imageminMozjpeg({
                quality: 100,
              }),
              imageminPngquant({
                // keep all details
                quality: [0.99, 1],
              }),
            ],
          });

          // 將 source 內的 png/jpg 轉換成 wepb 丟到 target 中
          await imagemin([pngAndJpgFilesGlob], {
            destination,
            plugins: [
              imageminWebp({
                quality: 100, // Set to maximum quality for .webp files
              }),
            ],
          });
        } catch (error) {
          console.error(`Error compressing ${pngAndJpgFilesGlob}`, error);
        }
      }),
    );
  }

  await Promise.all(jobs);

  let movedCount = 0;
  // move source into target folder
  const moveFilesPromises = files.map((file) =>
    limit(async () => {
      const relativePath = path.relative(sourceFolder, file);
      const destination = path.join(targetFolder, path.dirname(relativePath));

      // png and jpg files are already moved to target folder
      if (!/\.(png|jpg)$/.test(file)) {
        await fs.ensureDir(destination);

        const targetPath = path.join(destination, path.basename(file));
        await fs.copy(file, targetPath);
      }

      // Check if the file is in a vd001 ~ vd999 directory
      const normalizedPath = relativePath.replace(new RegExp(`\\${path.sep}`, 'g'), '/');
      if (/\/vd[0-9]{3}\//.test(normalizedPath)) {
        // Extract the raw number from the matched folder name and remove leading zeros
        const matchedFolder = normalizedPath.match(/\/vd[0-9]{3}\//)[0];
        const rawNumber = parseInt(matchedFolder.replace(/\/vd/, '').replace(/\//, ''), 10);

        const newFileName = `bd${rawNumber}-${path.basename(file)}`;
        const oldFilePath = path.join(destination, path.basename(file));
        const newFilePath = path.join(destination, newFileName);

        try {
          // Rename the file
          await fs.rename(oldFilePath, newFilePath);
          if (/\.(jpg|png)$/.test(file)) {
            await fs.rename(oldFilePath.replace(/.(jpg|png)$/, '.webp'), newFilePath.replace(/.(jpg|png)$/, '.webp'));
          }
          movedCount += 1;
        } catch (e) {
          console.error(`Error renaming ${oldFilePath} to ${newFilePath}`, e);
        }
      }
    }),
  );

  await Promise.all(moveFilesPromises);

  console.log(`${movedCount} files moved to target folder`);
})();
