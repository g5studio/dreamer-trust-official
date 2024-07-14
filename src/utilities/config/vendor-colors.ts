import { SystemTheme } from '@shared/enums';
import colorRaw from '../../styles/_colors.scss?raw';
import colorDarkRaw from '../../styles/_colors-dark.scss?raw';

const generalColorMap: Record<SystemTheme, string> = {
  [SystemTheme.Light]: colorRaw,
  [SystemTheme.Dark]: colorDarkRaw,
  [SystemTheme.Auto]: '',
};

const generateColorMap = (theme: SystemTheme) => {
  const regex = /\$(.*?):\s*\((.*?)\);/gs;
  const raw = generalColorMap[theme];
  const colors = {};
  let match = regex.exec(raw);
  while (match !== null) {
    const colorName = match[1];
    const colorValues = match[2].split(',').map((s) => s.trim());

    colorValues.forEach((value) => {
      const [key, color] = value.split(':').map((s) => s.trim());
      if (key && color && !colorName.includes('general')) {
        colors[`--color-${colorName.split('-')[0]}-${key.replace(/[^(0-9)]+/, '')}`] = color;
      }
    });
    match = regex.exec(raw);
  }

  return colors;
};

const formatRgbFromHex = (hexCode: string): string => {
  const hexColor = hexCode.replace('#', '');
  const r = hexColor.substring(0, 2);
  const g = hexColor.substring(2, 4);
  const b = hexColor.substring(4, 6);
  const toDecimal = (hex: string) => parseInt(hex, 16);
  return `${toDecimal(r)} ${toDecimal(g)} ${toDecimal(b)}`;
};

export const overrideVendorColorSetting = (theme: SystemTheme, rootElement: HTMLElement) => {
  // 設定 normal color
  const colorMap = generateColorMap(theme);
  Object.keys(colorMap).forEach((key) => {
    rootElement.style.setProperty(key, formatRgbFromHex(colorMap[key] as string));
  });
};
