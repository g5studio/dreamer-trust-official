import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}', './scripts/vendor-env.mjs'],
  darkMode: 'class',
  theme: {
    screens: {
      md: '375px',
      lg: '600px',
      lgx: '900px',
      xl: '1024px',
      xxl: '1440px',
    },
    fontSize: {
      // !due to twMerge cannot detect the custom key, if you added any custom key, please add it to utilities/helpers/format.helper.ts
      none: '0',
      // 10px
      xxxs: '0.625rem',
      // 11px
      xxs: '0.6875rem',
      // 12px
      xs: '0.75rem',

      // 14px
      sm: '0.875rem',

      base: '1rem',
      lg: '1.125rem',
      // 20px
      lgx: '1.25rem',
      xl: '1.375rem',
      xxl: '1.5rem',
      // 8px
      '2': '0.5rem',
      // 10px
      '2_5': '0.625rem',
      // 13px
      '3_25': '0.8125rem',
      // 14px
      '3_5': '0.875rem',
      // 15px
      '3_75': '0.9375rem',
      // 18px
      '4_5': '1.125rem',
      // 20px
      '5': '1.25rem',
      // 21px
      '5_25': '1.3125rem',
      // 22px
      '5_5': '1.375rem',
      '6': '1.5rem',
      '6_5': '1.625rem',
      '7': '1.75rem',
      '7_5': '1.875rem',
      '8': '1.9375rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11_25': '2.8125rem',
      // 50px
      '12_5': '3.125rem',
      '13_5': '3.375rem',
      '13_75': '3.4375rem',
      '14': '3.5rem',
      '14_5': '3.625rem',
      '15': '3.75rem',
      '20': '5rem',
      '17_5': '4.375rem',
      '26_5': '6.625rem',
      '37_5': '9.375rem',
      '93_75': '23.4375rem',
      '100': '25rem',
      full: '100%',
    },
    zIndex: {
      none: '0',
      normal: '1',
      cover: '2',
      canvas: '3',
      important: '5',
      priority: '10',
      'cover-page': '11',
      'side-menu': '12',
      overlay: '98',
      'fixed-button-group': '99',
      supreme: '100',
    },
    boxShadow: {
      DEFAULT: '2px 2px 6px 0 rgba(0, 0, 0, 0.1)',
      1: '1px 1px 6px 0 rgba(0, 0, 0, 0.1)',
      2: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      3: '2px 2px 6px 0 rgba(51, 51, 51, 0.2)',
      4: '4px 4px 16px 0 rgba(51, 51, 51, 0.2)',
      5: '0 -2px 4px 0 rgba(0, 0, 0, 0.05)',
      6: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
      7: '0 0 4px 0 rgba(0, 0, 0, 0.2)',
      8: '3px 3px 6px 0 rgba(0, 0, 0, 0.05)',
      9: '0 0 6px 0 rgba(0, 0, 0, 0.1)',
      10: '0 1px 4px 0 rgba(0, 0, 0, 0.2)',
      11: '0 2px 7px 0 rgba(0, 0, 0, 0.1)',
      12: '0 2px 10px 0 rgba(0, 0, 0, 0.16)',
      13: '0 0 10px rgba(0, 0, 0, 0.1)',
      14: 'inset 0 1px 1px 0 rgb(255,255,255) , 0 2px 6px 0 rgba(0, 0, 0, 0.25)',
      15: '0 2px 5px 0 rgba(0,0,0,0.2)',
      16: '0 0 0 2px rgb(var(--color-primary))',
      17: '0 -1px 6px 0 rgba(0, 0, 0, 0.1)',
      18: '0 0 3px 2px rgba(0, 0, 0, 0.1)',
      19: '0 0 12px 3px rgba(0, 0, 0, 0.08)',
      20: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      21: '0 -1px 6px 0 rgba(0, 0, 0, .15)',
      22: '2px 2px 4px 0 rgba(0, 0, 0, 0.3)',
      23: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      24: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      25: '0 1px 4px 0 rgba(0, 0, 0, 0.1)',
      26: '2px 2px 6px 0 rgba(0,0,0,0.1)',
      27: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      28: '4px 4px 16px 0 rgba(0, 0, 0, 0.1)',
      29: 'inset 1px -1px 1px 0 rgba(0, 0, 0, 0.3)',
      30: 'inset 0.5px -0.5px 1px 0 rgba(0, 0, 0, 0.3)',
      31: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
      32: '0 10px 10px 5px rgba(0, 0, 0, 0.5)',
      33: '0 4px 5px 0 rgba(0, 0, 0, 0.1)',
      34: '0 0 10px 3px rgba(0, 0, 0, 0.1)',
      35: '0 2px 10px 3px rgba(0, 0, 0, 0.1)',
      36: '0 0 20px 0px rgba(0, 0, 0, 0.1)',
      37: '0 0 rgb(0, 0, 0), 0 0 rgb(0, 0, 0), 0 2px 4px 0 rgba(0,0,0,0.3)',
      38: '0 2px 10px 0 rgba(0, 0, 0, 0.1)',
      39: '0 1px 2px 0 rgba(24,66,117,0.6)',
      40: '0 1px 8px 0px rgba(0, 0, 0, 0.15)',
      41: '4px 6px 6px 0 rgba(76,158,234,0.3)',
      42: '0 -2px 3px 0 rgba(0, 0, 0, 0.1)',
      43: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
      44: '0 2px 3px 0 rgba(51,51,51,.1)',
      45: '0 5px 40px 0 rgba(0, 0, 0, 0.2)',
      46: '0px 1px 8px 0px rgba(0, 0, 0, 0.15)',
      47: '1px 1px 5px 0 rgba(0, 0, 0, 0.1)',
      48: '4px 4px 16px 0 rgba(51, 55, 69, 0.2)',
      49: '0 6px 12px 3px rgba(23, 29, 41, 0.08)',
      50: '0 1px 6px 2px rgba(0, 0, 0, 0.05)',
      51: '-10px -10px 20px 0 #fafbff, 10px 10px 15px 0 rgba(194, 197, 208, 0.4)',
      52: 'inset 0 0 5px rgba(0,0,0,.1)',
      53: '0 1px 8px 0 rgba(0,0,0,.15)',
      54: '0px 2px 8px 0px rgba(51, 51, 51, 0.2)',
      55: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      56: '0 -10px 10px 0px rgba(0, 0, 0, 0.1)',
      57: '0px 4px 20px 0px rgba(0, 0, 0, 0.1)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      lg: '0 2px 6px 0 rgba(0, 0, 0, 0.1)',
      xl: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
      '2xl': '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      'primary-1': '0 4px 16px 0 rgba(76, 158, 234, 0.2)',
      none: 'none',
    },
    textShadow: {
      DEFAULT: '0 3px 1px rgba(145, 78, 1, 0.8)',
    },
    extend: {
      colors: {
        'black-1': 'rgb(var(--color-black-1) / <alpha-value>)',
        'black-2': 'rgb(var(--color-black-2) / <alpha-value>)',
        'black-3': 'rgb(var(--color-black-3) / <alpha-value>)',
        'black-4': 'rgb(var(--color-black-4) / <alpha-value>)',
        'black-5': 'rgb(var(--color-black-5) / <alpha-value>)',
        'black-6': 'rgb(var(--color-black-6) / <alpha-value>)',
        'black-7': 'rgb(var(--color-black-7) / <alpha-value>)',
        'black-8': 'rgb(var(--color-black-8) / <alpha-value>)',
        'primary-1': 'rgb(var(--color-primary-1) / <alpha-value>)',
        'primary-2': 'rgb(var(--color-primary-2) / <alpha-value>)',
        'primary-3': 'rgb(var(--color-primary-3) / <alpha-value>)',
        'orange-1': 'rgb(var(--color-orange-1) / <alpha-value>)',
        'orange-2': 'rgb(var(--color-orange-2) / <alpha-value>)',
        'orange-3': 'rgb(var(--color-orange-3) / <alpha-value>)',
      },
      borderRadius: {
        none: '0',
        2: '2px',
        '2_5': '2.5px',
        4: '4px',
        '4_25': '17px',
        5: '5px',
        6: '6px',
        '7_5': '7.5px',
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        25: '25px',
        27: '27px',
        28: '28px',
        30: '30px',
        32: '32px',
        40: '40px',
        48: '48px',
        50: '50px',
        100: '100px',
        circle: '100%',
      },
      lineHeight: {
        '0': '0rem',
        '2_5': '0.625rem',
        '2_75': '0.6875rem',
        '3': '0.75rem',
        '3_25': '0.8125rem',
        '3_5': '0.875rem',
        '3_75': '0.9375rem',
        '4': '1rem',
        '4_2': '1.05rem',
        '4_25': '1.0625rem',
        '4_5': '1.125rem',
        '5': '1.25rem',
        '5_25': '1.3125rem',
        '5_5': '1.375rem',
        '5_6': '1.4rem',
        '6': '1.5rem',
        '6_25': '1.5625rem',
        '6_5': '1.625rem',
        '6_75': '1.6875rem',
        '7_5': '1.875rem',
        '8': '2rem',
        '8_25': '2.0625rem',
        '8_5': '2.125rem',
        '10_5': '2.625rem',
        '11': '2.75rem',
        '11_5': '2.875rem',
        '12': '3rem',
        '12_5': '3.125rem',
        '19_25': '4.8125rem',
      },
      spacing: {
        '0': '0rem',
        '0_25': '0.0625rem',
        '0_29': '0.0725rem',
        '0_5': '0.125rem',
        '0_54': '0.135rem',
        '0_624': '0.156rem',
        '0_625': '0.15625rem',
        '0_64': '0.16rem',
        '0_75': '0.1875rem',
        '1': '0.25rem',
        '1_125': '0.28125rem',
        '1_25': '0.3125rem',
        '1_5': '0.375rem',
        '1_75': '0.4375rem',
        '2': '0.5rem',
        '2_125': '0.53125rem',
        '2_25': '0.5625rem',
        '2_5': '0.625rem',
        '2_75': '0.6875rem',
        '3': '0.75rem',
        '3_25': '0.8125rem',
        '3_5': '0.875rem',
        '3_75': '0.9375rem',
        '3_752': '0.938rem',
        '4': '1rem',
        '4_25': '1.0625rem',
        '4_5': '1.125rem',
        '4_625': '1.15625rem',
        '4_75': '1.1875rem',
        '5': '1.25rem',
        '5_25': '1.3125rem',
        '5_5': '1.375rem',
        '5_75': '1.4375rem',
        '6': '1.5rem',
        '6_25': '1.5625rem',
        '6_5': '1.625rem',
        '6_75': '1.6875rem',
        '7': '1.75rem',
        '7_25': '1.813rem',
        '7_5': '1.875rem',
        '7_75': '1.9375rem',
        '8': '2rem',
        '8_25': '2.0625rem',
        '8_5': '2.125rem',
        '8_75': '2.1875rem',
        '9': '2.25rem',
        '9_5': '2.375rem',
        '9_25': '2.3125rem',
        '9_75': '2.4375rem',
        '10': '2.5rem',
        '10_25': '2.5625rem',
        '10_5': '2.625rem',
        '10_75': '2.6875rem',
        '11': '2.75rem',
        '11_25': '2.8125rem',
        '11_5': '2.875rem',
        '11_75': '2.9375rem',
        '12': '3rem',
        '12_25': '3.0625rem',
        '12_5': '3.125rem',
        '13': '3.25rem',
        '13_25': '3.375rem',
        '13_5': '3.375rem',
        '13_75': '3.4375rem',
        '14': '3.5rem',
        '14_25': '3.5625rem',
        '14_5': '3.625rem',
        '15': '3.75rem',
        '15_25': '3.8125rem',
        '15_5': '3.875rem',
        '15_75': '3.938rem',
        '16': '4rem',
        '16_25': '4.0625rem',
        '16_5': '4.125rem',
        '16_75': '4.1875rem',
        '17': '4.25rem',
        '17_25': '4.3125rem',
        '17_5': '4.375rem',
        '18': '4.5rem',
        '18_25': '4.5625rem',
        '18_5': '4.625rem',
        '18_75': '4.6875rem',
        '19': '4.75rem',
        '19_25': '4.8125rem',
        '20': '5rem',
        '20_25': '5.0625rem',
        '20_75': '5.1875rem',
        '21': '5.25rem',
        '21_25': '5.3125rem',
        '21_752': '5.438rem',
        '22': '5.5rem',
        '22_5': '5.625rem',
        '23': '5.75rem',
        '23_5': '5.875rem',
        '24': '6rem',
        '24_5': '6.125rem',
        '25': '6.25rem',
        '25_5': '6.375rem',
        '26': '6.5rem',
        '26_25': '6.5625rem',
        '26_5': '106px',
        '27': '6.75rem',
        '27_5': '6.875rem',
        '28': '7rem',
        '28_75': '7.1875rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '30_5': '7.625rem',
        '31': '7.75rem',
        '31_25': '7.8125rem',
        '31_5': '7.875rem',
        '31_75': '7.938rem',
        '32': '7.75rem',
        '32_25': '8.0625rem',
        '32_5': '8.125rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '33_5': '8.375rem',
        '33_75': '8.4375rem',
        '34_5': '8.625rem',
        '34_75': '8.6875rem',
        '35': '8.75rem',
        '36_5': '9.125rem',
        '37': '9.25rem',
        '37_5': '9.375rem',
        '38': '9.5rem',
        '38_624': '9.656rem',
        '38_75': '9.6875rem',
        '39': '9.75rem',
        '39_5': '9.875rem',
        '40': '10rem',
        '40_25': '10.0625rem',
        '40_5': '10.125rem',
        '40_75': '10.1875rem',
        '41': '10.25rem',
        '41_25': '10.3125rem',
        '41.5': '10.375rem',
        '42': '10.5rem',
        '42_25': '10.5625rem',
        '42_5': '10.625rem',
        '42_75': '10.6875rem',
        '43': '10.75rem',
        '43_5': '10.875rem',
        '43_75': '10.9375rem',
        '45': '11.25rem',
        '47_25': '11.8125rem',
        '47_5': '11.875rem',
        '47_75': '11.9375rem',
        '49': '12.25rem',
        '49_5': '12.375rem',
        '50': '12.5rem',
        '51_25': '12.8125rem',
        '51_75': '12.9375rem',
        '52_5': '13.125rem',
        '53_5': '13.375rem',
        '53_75': '13.4375rem',
        '54': '13.5rem',
        '55': '13.75rem',
        '55_5': '13.875rem',
        '57_25': '14.3125rem',
        '58_75': '14.6875rem',
        '59': '14.75rem',
        '59_5': '14.875rem',
        '60': '15rem',
        '62_5': '15.625rem',
        '63_75': '15.9375rem',
        '65_5': '16.375rem',
        '67_5': '16.875rem',
        '68': '17rem',
        '69': '17.25rem',
        '70': '17.5rem',
        '71_25': '17.8125rem',
        '72': '18rem',
        '73': '18.25rem',
        '74_25': '18.5625rem',
        '75': '18.75rem',
        '77.5': '19.375rem',
        '80': '20rem',
        '80_75': '20.19rem',
        '81_25': '20.3125rem',
        '81_75': '20.4375rem',
        '82': '20.5rem',
        '82_5': '20.625rem',
        '83_75': '20.9375rem',
        '84': '21rem',
        '85': '21.25rem',
        '85_75': '21.4375rem',
        '86': '21.5rem',
        '86_25': '21.5625rem',
        '87_5': '21.875rem',
        '88_75': '22.1875rem',
        '89': '22.25rem',
        '90': '22.5rem',
        '91_5': '22.875rem',
        '92_5': '23.125rem',
        '93_25': '23.313rem',
        '93_75': '23.4375rem',
        '95': '23.75rem',
        '96_25': '24.0625rem',
        '97_75': '24.4375rem',
        '99': '24.75rem',
        '100': '25rem',
        '102_5': '25.625rem',
        '108_75': '27.1875rem',
        '110': '27.5rem',
        '112_5': '28.125rem',
        '114': '28.5rem',
        '115': '28.75rem',
        '117': '29.25rem',
        '118_75': '29.6875rem',
        '125': '31.25rem',
        '130_75': '32.6875rem',
        '133_5': '33.375rem',
        '134': '33.5rem',
        '137_5': '34.375rem',
        '140': '35rem',
        '141': '35.25rem',
        '142_25': '35.5625rem',
        '144': '36rem',
        '145': '36.25rem',
        '147_5': '36.875rem',
        '148': '36.875rem',
        '150': '37.5rem',
        '154': '38.5rem',
        '164_75': '41.1875rem',
        '175': '43.75rem',
        '178': '44.5rem',
        '184': '46rem',
        '185_75': '46.4375rem',
        '212_75': '53.18rem',
        '214': '53.5rem',
        '220': '55rem',
        '227_5': '56.875rem',
        '1/100': '1%',
        '14/1000': '1.4%',
        '25/1000': '2.5%',
        '5/100': '5%',
        '10/100': '10%',
        '11/100': '11%',
        '20/100': '20%',
        '247/1000': '24.7%',
        '265/1000': '26.5%',
        '28/100': '28%',
        '30/100': '30%',
        '35/100': '35%',
        '40/100': '40%',
        '44/100': '44%',
        '49/100': '49%',
        '50/100': '50%',
        '55/100': '55%',
        '70/100': '70%',
        '735/1000': '73.5%',
        '90/100': '90%',
        '92/100': '92%',
        '95/100': '95%',
        '98/100': '98%',
        '110/100': '110%',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      minHeight: {
        '0': '0rem',
        '2_5': '0.625rem',
        '4': '1rem',
        '5': '1.25rem',
        '7': '1.75rem',
        '7_5': '1.875rem',
        '8': '2rem',
        '9': '2.25rem',
        '9_5': '2.375rem',
        '10': '2.5rem',
        '10_5': '2.625rem',
        '11': '2.75rem',
        '12_5': '3.125rem',
        '12_75': '3.1875rem',
        '13_5': '3.375rem',
        '14': '3.5rem',
        '14_5': '3.625rem',
        '15': '3.75rem',
        '20': '5rem',
        '17_5': '4.375rem',
        '26_5': '6.625rem',
        '30': '7.5rem',
        '52': '13rem',
        '100': '25rem',
        '65/100': '65%',
        full: '100%',
      },
      margin: {
        '10%': '10%',
      },
      scale: {
        '55': '.55',
        '60': '.6',
        '70': '.7',
        '83': '.83',
      },
      opacity: {
        '0': '0',
        '5': '.05',
        '10': '.1',
        '20': '.2',
        '40': '.4',
        '45': '.45',
        '50': '.5',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '83': '.83',
        '90': '.9',
        '100': '1',
      },
      maxWidth: {
        none: 'none',
        '0_25': '0.0625rem',
        '6_25': '1.5625rem',
        '17_25': '4.3125rem',
        '18_75': '4.6875rem',
        '20': '5rem',
        '21_5': '5.375rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '40': '10rem',
        '45': '11.25rem',
        '52_5': '13.125rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '54_75': '13.6875rem',
        '55': '13.75rem',
        '62_5': '15.625rem',
        '66_5': '16.625rem',
        '68_75': '17.1875rem',
        '69': '17.25rem',
        '75': '18.75rem',
        '76_25': '19.0625rem',
        '78_75': '19.6875rem',
        '85': '21.25rem',
        '85_75': '21.4375rem',
        '87_5': '21.875rem',
        '88_75': '22.1875rem',
        '90': '22.5rem',
        '93_75': '23.4375rem',
        '96_25': '24.0625rem',
        '100': '25rem',
        '105': '26.25rem',
        '112': '28rem',
        '123_75': '30.9375rem',
        '125': '31.25rem',
        '130_75': '32.6875rem',
        '134': '33.5rem',
        '135': '33.75rem',
        '136_25': '34.0625rem',
        '137_5': '34.375rem',
        '140': '35rem',
        '150': '37.5rem',
        '162_5': '40.625rem',
        '175': '43.75rem',
        '187_5': '46.875rem',
        '245_752': '61.438rem',
        '260': '65rem',
        '266': '66.5rem',
        '300': '75rem',
        '310': '77.5rem',
        '350': '87.5rem',
        '360': '90rem',
        '30/100': '30%',
        '50/100': '50%',
        '80/100': '80%',
        '95/100': '95%',
        full: '100%',
      },
      maxHeight: {
        '55': '13.75rem',
        '60': '15rem',
        '100': '25rem',
        '162_5': '40.625rem',
      },
      backgroundSize: {
        cover: 'cover',
        contain: 'contain',
        '100%': '100%',
        '120%': '120%',
      },
      backgroundPosition: {
        '5': '1.25rem',
        '11_5': '2.875rem',
        '13_75': '3.4375rem',
        top: 'top',
      },
      flexBasis: {
        '9': '2.25rem',
        '50': '12.5rem',
        '70': '4.375rem',
        '280': '17.5rem',
        '3/10': '30%',
        '1/2': '50%',
        '1/5': '20%',
        '6/10': '60%',
        '7/10': '70%',
        '100': '100%',
      },
      minWidth: {
        '0': '0rem',
        '2_5': '0.625rem',
        '4': '1rem',
        '4_75': '1.1875rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '6_25': '1.5625rem',
        '8': '2rem',
        '8_75': '2.1875rem',
        '12_5': '3.125rem',
        '15': '3.75rem',
        '17_5': '4.375rem',
        '18': '4.5rem',
        '22_5': '5.625rem',
        '25': '6.25rem',
        '26_5': '6.625rem',
        '27': '6.75rem',
        '33_5': '8.375rem',
        '35': '8.75rem',
        '39': '9.75rem',
        '39_5': '9.875rem',
        '40': '10rem',
        '41_752': '10.438rem',
        '52_5': '13.125rem',
        '53_5': '13.375rem',
        '59': '14.75rem',
        '70': '17.5rem',
        '71': '17.75rem',
        '72': '14.75rem',
        '73_25': '18.3125rem',
        '88_75': '22.1875rem',
        '91': '22.75rem',
        '93_75': '23.4375rem',
        '98': '24.5rem',
        '125': '31.25rem',
        '135': '33.75rem',
        '137_5': '34.375rem',
        '148': '36.875rem',
        '256': '16rem',
        '65/100': '65%',
        '99/100': '99%',
        full: '100%',
      },
      borderWidth: {
        '1/2': '0.5px',
        DEFAULT: '1px',
        '0_125': '0.03125rem',
        '0_25': '0.0625rem',
        '0_35': '0.0875rem',
        '0_5': '0.125rem',
        '0_75': '0.1875rem',
        '1': '0.25rem',
        '1_25': '0.3125rem',
        '1_5': '0.375rem',
        '1_75': '0.4375rem',
        '2': '0.5rem',
        '2_5': '0.625rem',
        '3_25': '0.8125rem',
      },
      rotate: {
        '270': '270deg',
        '360': '360deg',
      },
      translate: {
        '50/100': '50%',
        '85/100': '85%',
      },
      transitionProperty: {
        height: 'height, max-height',
        position: 'top, left, right, bottom',
      },
      gridAutoRows: {
        '35': '35px',
      },
      keyframes: {
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-5px, 0, 0)',
          },
          '20%, 80%': {
            transform: 'translate3d(5px, 0, 0)',
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-5px, 0, 0)',
          },
          '40%, 60%': {
            transform: 'translate3d(5px, 0, 0)',
          },
        },
        blink: {
          '45%': {
            opacity: '0.45',
          },
        },
      },
      animation: {
        shake: 'shake 0.7s cubic-bezier(.36,.07,.19,.97) both',
        blink: 'blink 0.7s linear infinite',
      },
    },
  },
  important: true,
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};

export default config;
