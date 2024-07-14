import { defineConfig } from '@vite-pwa/assets-generator/config';

function getBrand() {
  const brand = process.env.VITE_BRAND || '';
  if (/^vd\d{3}$/.test(brand)) {
    return brand;
  }
  throw new Error('Invalid brand');
}

export default defineConfig({
  preset: {
    transparent: {
      sizes: [64, 192, 512],
      padding: 0,
    },
    apple: {
      sizes: [180],
      padding: 0,
    },
    maskable: {
      sizes: [512],
      padding: 0,
    },
  },
  images: `vendor-public/${getBrand()}/app-logo.png`,
});
