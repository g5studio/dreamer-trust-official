import { validateHttpURL } from '@utilities/helpers/validator.helper';

export function readImageFile(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

/**
 * 將SVG轉成PNG並下載
 * @param svgElement
 * @param fileName 下載後的檔案名稱，預設為 'image'
 */
export function downloadPNGImageBySVG({
  svgElement,
  fileName = 'image',
}: {
  svgElement: SVGSVGElement | ((element: SVGSVGElement) => void);
  fileName: string;
}) {
  const svgData = new XMLSerializer().serializeToString(svgElement as Node);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const img = new Image();
  img.setAttribute('src', `data:image/svg+xml;base64,${btoa(svgData)}`);

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0);

    const a = document.createElement('a');
    a.download = fileName;
    a.href = canvas.toDataURL('image/png');
    a.click();
  };
}

/**
 * 經由圖片URL下載圖片
 * @param src 圖片url
 * @param fileName 下載後的檔案名稱，預設為原始圖片的檔名
 */
export const downloadImageByLink = async ({ url, fileName }: { url: string; fileName?: string }) => {
  if (!validateHttpURL(url)) return;

  const response = await fetch(url);
  const blobImage = await response.blob();
  const href = URL.createObjectURL(blobImage);

  const element = document.createElement('a');
  element.href = href;
  element.download = fileName ?? url.substring(url.lastIndexOf('/') + 1);

  document.body.appendChild(element);
  element.click();

  document.body.removeChild(element);
  window.URL.revokeObjectURL(href);
};
