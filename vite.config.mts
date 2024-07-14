import { networkInterfaces } from 'os';
import { defineConfig, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';
import { VitePWA } from 'vite-plugin-pwa';
import legacy from '@vitejs/plugin-legacy';
// import mix from 'vite-plugin-mix';
import mockServer from 'vite-plugin-mock-server';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import dns from 'dns';
import fs from 'fs';
import cssInjectedByJs from 'vite-plugin-css-injected-by-js';

dns.setDefaultResultOrder('verbatim');

const brandDataMap = {
  vd001: {
    name: '8xBet',
    short_name: '8xBet',
    description: '8xBet',
    // theme_color: '#4C9EEA',
    theme_color: '#FFFFFF',
  },
  vd002: {
    name: '333体育',
    short_name: '333体育',
    description: '333体育',
    // theme_color: '#0C186C',
    theme_color: '#FFFFFF',
  },
  vd003: {
    name: '678',
    short_name: '678',
    description: '678',
    // theme_color: '#0C186C',
    theme_color: '#FFFFFF',
  },
  vd004: {
    name: '6686',
    short_name: '6686',
    description: '6686',
    // theme_color: '#4C9EEA',
    theme_color: '#FFFFFF',
  },
  vd006: {
    name: '8868',
    short_name: '8868',
    description: '8868',
    // theme_color: '#0C186C',
    theme_color: '#FFFFFF',
  },
  vd007: {
    name: '1919',
    short_name: '1919',
    description: '1919',
    // theme_color: '#4C9EEA',
    theme_color: '#FFFFFF',
  },
  vd008: {
    name: '1717',
    short_name: '1717',
    description: '1717',
    // theme_color: '#0C186C',
    theme_color: '#FFFFFF',
  },
  vd009: {
    name: '2121',
    short_name: '2121',
    description: '2121',
    // theme_color: '#4C9EEA',
    theme_color: '#FFFFFF',
  },
  vd010: {
    name: '皇冠',
    short_name: '皇冠',
    description: '皇冠',
    // theme_color: '#0C186C',
    theme_color: '#FFFFFF',
  },
  vd011: {
    name: 'HelloBet',
    short_name: 'HelloBet',
    description: 'HelloBet',
    // theme_color: '#4C9EEA',
    theme_color: '#FFFFFF',
  },
};

async function fetchTranslation(locale) {
  const res = await fetch(
    `https://i18n-querier-prod-internal.service-station.link/api/v2/i18n/PROD/snapshot/fluid/${locale}`,
  );
  const data = await res.json();
  return {
    version: data?.data?.version,
    dictionary: data?.data?.translations,
  };
}

function getLocalIpAddress(): string | undefined {
  const nets = networkInterfaces();
  for (const netList of Object.values(nets)) {
    if (!netList) continue;
    for (const net of netList) {
      const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
      if (net.family === familyV4Value && !net.internal) {
        return net.address;
      }
    }
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // only start mock server in dev mode and not in test mode
  const isMock = env.VITE_ENV_NAME === 'mock' && env.TEST !== 'true' && env.VITEST !== 'true';
  const appEnv = env.VITE_ENV_NAME || 'dev';
  const brandCode = env.VITE_BRAND || 'vd004';
  const brandCodeNumber = parseInt(brandCode.replace('vd', ''), 10);
  let output = false;
  const { name, short_name: shortName, description, theme_color: themeColor } = brandDataMap[brandCode] || {};
  const swFallbackUrl = 'https://redirectgetter-appgetter-uavelonsnx.cn-shenzhen.fcapp.run';
  const isDev = env.NODE_ENV === 'development';
  const isServeTest = env.VITE_SERVE_TEST === 'true';
  const isBuildWatchMode = env.VITE_BUILD_WATCH === 'true';
  const isProxy = env.VITE_PROXY === 'true';
  const proxyReferer = `https://en-${brandCode}-tiger-portal.inno${appEnv}.site`;

  return {
    plugins: [
      tsconfigPaths(),
      // we don't use traditional mock server because /platform and /sport is not under the same path
      // it will cause the mock server not working
      // so we have to create our own mock server
      // only start mock server in dev mode
      isMock &&
        mockServer({
          logLevel: 'info',
          middlewares: [
            cookieParser(),
            bodyParser.json(),
            bodyParser.urlencoded(),
            bodyParser.text(),
            bodyParser.raw(),
          ],
          urlPrefixes: ['/platform/', '/product/', '/im/'],
        }),
      /* 
      Uncomment the following line to enable solid-devtools.
      For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
      */
      // devtools(),
      solidPlugin(),
      // vite default browser support baseline is Native ESM, native ESM dynamic import, and import.meta
      // This plugin adds support for legacy browsers
      // remark: legacy plugin is not compatible with --watch mode
      // https://github.com/vitejs/vite/issues/6133
      !isBuildWatchMode &&
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
      {
        name: 'copy-pwa-assets',
        apply: 'build',
        buildEnd() {
          // reset for watch mode
          output = false;
        },
        async writeBundle() {
          // run copy only once even if multiple bundles are generated
          if (output) {
            return;
          }
          output = true;

          // copy the files from the target folder to dist folder
          const targetFolder = `vendor-public/${brandCode}`;
          const distFolder = 'dist';
          const files = fs.readdirSync(targetFolder);
          for (const file of files) {
            fs.copyFileSync(`${targetFolder}/${file}`, `${distFolder}/${file}`);
          }
        },
      },
      {
        name: 'css-cors',
        transformIndexHtml: {
          enforce: 'post',
          transform(html) {
            // find all css link first
            const cssLink = html.match(/<link[^>]+rel="stylesheet"[^>]+>/g);
            if (!cssLink) {
              return html;
            }
            // add crossorigin attribute to css link
            return html.replace(/<link[^>]+rel="stylesheet"[^>]+>/g, (match) => {
              const href = match.match(/href="([^"]+)"/)?.[1];
              if (!href) {
                return match;
              }
              return match.replace(href, `${href}" crossorigin="anonymous`);
            });
          },
        },
      },
      // Disable VitePWA in dev mode
      VitePWA({
        includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png', 'maskable-icon-512x512.png'],
        manifest: {
          name,
          short_name: shortName,
          description,
          theme_color: themeColor,
          display: 'standalone',
          icons: [
            {
              src: 'pwa-64x64.png',
              sizes: '64x64',
              type: 'image/png',
            },
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
            },
            {
              src: 'maskable-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        registerType: 'autoUpdate',
        devOptions: {
          enabled: false,
        },
        strategies: 'injectManifest',
        injectManifest: {
          minify: true,
          globPatterns: ['**/*.{js,css,woff,woff2,ttf,eot}'],
        },
      }),
      {
        name: 'mock-dynamic-imports',
        enforce: 'pre',
        transform(code, id) {
          if (process.env.VITEST === 'true') {
            if (id.includes('asset-splitting')) {
              // replace asset glob into a empty object
              return 'export const assetModules = {}; export default {}';
            }
            // prevent preloadRouteConfig from being executed in test mode
            if (id.includes('routes')) {
              return code
                .replace('preloadRouteConfig(routesConfig);', '')
                .replace('preloadRouteConfig(outsideRoutesConfig);', '');
            }
          }
          return code;
        },
      },
      {
        name: 'brand-logo',
        enforce: 'pre',
        transform(code, id) {
          if (id.includes('/Header/index.tsx')) {
            return code.replace(
              '@assetsTarget/logo/vd001/bd1-primary_logo.png',
              `@assetsTarget/logo/${brandCode}/bd${brandCodeNumber}-primary_logo.png?base64`,
            );
          }
          return code;
        },
      },
      {
        name: 'brand-asset-path-resolve',
        enforce: 'pre',
        transform(code, id) {
          if (id.includes('asset-splitting')) {
            return code.replace(/vd001/g, brandCode);
          }
          return code;
        },
      },
      {
        name: 'base64-loader',
        transform(_: any, id: string) {
          const [path, query] = id.split('?');
          if (query != 'base64') {
            return null;
          }

          const data = fs.readFileSync(path);
          const base64 = data.toString('base64');

          return `export default '${base64}';`;
        },
      },
      {
        name: 'css-cors',
        transformIndexHtml: {
          enforce: 'post',
          transform(html) {
            // find all css link first
            const cssLink = html.match(/<link[^>]+rel="stylesheet"[^>]+>/g);
            if (!cssLink) {
              return html;
            }
            // add crossorigin attribute to css link
            return html.replace(/<link[^>]+rel="stylesheet"[^>]+>/g, (match) => {
              const href = match.match(/href="([^"]+)"/)?.[1];
              if (!href) {
                return match;
              }
              return match.replace(href, `${href}" crossorigin="anonymous`);
            });
          },
        },
      },
      {
        name: 'translation',
        transform: async (code, id) => {
          if (!isDev && id.includes('assets/locale')) {
            try {
              // assets/locale/en_US.ts, en_US is the locale name
              const locale = id.split('/').pop()?.replace('.ts', '') ?? '';
              const translation = await fetchTranslation(locale);
              return `const snapshot = ${JSON.stringify(translation)};
                export { snapshot };
                export default snapshot;`;
            } catch (e) {
              // if failed to fetch translation, return the original code
            }
          }
          return code;
        },
      },
      cssInjectedByJs({
        cssAssetsFilterFunction: (outputAsset) => {
          if (outputAsset.name === 'index.css') {
            // since main css is too large, use cdn instead
            const isMainCss =
              typeof outputAsset.source === 'string' && outputAsset.source.includes('@charset "UTF-8";');
            return !isMainCss;
          }
          return true;
        },
      }),
    ],
    resolve: {
      alias: {
        '@styles': resolve(__dirname, 'src/styles'),
      },
    },
    server: {
      port: 5173,
      open: true,
      host: '0.0.0.0',
    },
    build: {
      target: 'esnext',
      // enforce assets into one file
      assetsInlineLimit: 0,
      modulePreload: {
        // currently vite doesn't handle cdn assets for js files
        // modulePreload will cause our site load many unnecessary js files
        // so we disable this function here
        resolveDependencies(_, deps) {
          return deps.filter((dep) => !dep.endsWith('.js') && !dep.endsWith('.css'));
        },
      },
    },
    test: {
      css: false,
      setupFiles: ['./vitest/setup.ts'],
      include: ['src/shared/**/*.test.tsx'],
      server: {
        deps: {
          // resolve vitest issue with solidJS https://github.com/solidjs/solid-testing-library#known-issues
          // when the issues happened, it will show 'You appear to have multiple instances of Solid. This can lead to unexpected behavior.'
          inline: [/solid-js/, /@solidjs\/router/, 'vitest-canvas-mock'],
        },
      },
    },
  };
});
