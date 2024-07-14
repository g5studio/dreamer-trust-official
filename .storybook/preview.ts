import type { Preview } from 'storybook-solidjs';
import '../env-config';
import '../src/index.css';
import '../src/styles/_index.scss';
import './preview.css';
import { overrideVendorColorSetting } from '../src/utilities/config/vendor-colors';
import { setEnvConfig } from '../src/utilities/config/env';
import { createEffect, on, onCleanup } from 'solid-js';
import { LocaleDash } from '../src/shared/enums';
import { changeLanguage, translation, initDictionary } from '../src/shared/hooks/use-translation';
import { formatLocale } from '../src/utilities/helpers/format.helper';
import { createEnvConfig } from './vendor-config';

const listOfVendor = [
  {
    value: 'vd001',
    title: '長城',
  },
  {
    value: 'vd002',
    title: '谷歌',
  },
  {
    value: 'vd003',
    title: '大眾',
  },
  {
    value: 'vd004',
    title: '瑞銀',
  },
  {
    value: 'vd006',
    title: '勇士',
  },
  {
    value: 'vd007',
    title: '蘋果',
  },
  {
    value: 'vd008',
    title: '芒果',
  },
  {
    value: 'vd009',
    title: '非凡',
  },
  {
    value: 'vd010',
    title: '賓利',
  },
  {
    value: 'vd011',
    title: '英偉達',
  },
  {
    value: 'vd099',
    title: 'DEMO',
  },
];

function updateVendor(vendorId: string) {
  const {
    env,
    domain,
    platformUrl,
    platformWsUrl,
    sportUrl,
    sportWsUrl,
    chatRoomUrl,
    agentWapUrl,
    fluidSourceUrl,
    feSourceUrl,
    beSourceUrl,
    thirdpartyUrl,
    sportStreamUrl,
    relayUrl,
    h5InfoUrl,
    lotteryUrl,
    i18nUrl,
    imUrl,
    imWsUrl,
    vendor,
    licenseName,
    licenseImageUrl,
    disableScore,
    enableShareMoneyStickyButton,
    disableAPPDownloadModal,
    hideAPPDownloadModalWebBtn,
    promotionVideo,
    disableChatRoom,
    chatroomTabSpecialTranslate,
    c2cMode,
    disableIMExpert,
    primaryColor,
    secondaryColor,
    primaryHoverColor,
    buttonBackgroundActiveColor,
    buttonRippleBlockColor,
    rebateLabelBackgroundFromColor,
    rebateLabelBackgroundToColor,
    rebateTriangleBackgroundColor,
    sportMobileMenuIconList,
    footer,
    socialMedia,
    ipInfo,
    statistics,
    sponsor,
    sponsorInner,
    sportCardSort,
    serviceFeePercent,
    vendorValidBet,
    vendorMinimumMembers,
    hideVndAndIdr,
    hasAgreementPage,
    enableCasinoCarousel,
    sponsorImagesArray,
    enableUniquePage,
    hasCrossBlockAdSponsor,
    casinoShowTitleIcon,
    enableChatroomTranslate,
    depositDetailPageTheme,
    enableChatroomDefaultTranslate,
    vendorChatroomTheme,
    detectLimitedAccess = false,
    enableTutorial = true,
    thirdPartyRecordOrder,
    sportLiveStreamingInsufficientQualifyDarkBackgroundColor,
    commissionDetailI18n,
    vendorProductsImgSeries,
    sportCartCouponIsSpecial,
  } = createEnvConfig(vendorId);

  const newEnvConfig = {
    env: env,
    url: {
      domain,
      platformUrl,
      platformWsUrl,
      sportUrl,
      sportWsUrl,
      chatRoomUrl,
      agentWapUrl,
      fluidSourceUrl,
      feSourceUrl,
      beSourceUrl,
      thirdpartyUrl,
      sportStreamUrl,
      relayUrl,
      h5InfoUrl,
      lotteryUrl,
      i18nUrl,
      imUrl,
      imWsUrl,
    },
    vendor: {
      vendorId: vendor,
      style: {
        colors: {
          primary: primaryColor,
          secondary: secondaryColor,
          primaryHover: primaryHoverColor,
          buttonBackgroundActive: buttonBackgroundActiveColor,
          buttonRippleBlock: buttonRippleBlockColor,
          rebateLabelBackgroundFrom: rebateLabelBackgroundFromColor,
          rebateLabelBackgroundTo: rebateLabelBackgroundToColor,
          rebateTriangleBackground: rebateTriangleBackgroundColor,
        },
      },
      license: {
        name: licenseName,
        img: licenseImageUrl,
      },
      platform: {
        enableShareMoneyStickyButton,
        c2cMode,
        appDownloadHint: {
          disabled: disableAPPDownloadModal,
          hideWebBtn: hideAPPDownloadModalWebBtn,
        },
        promotion: {
          video: promotionVideo,
        },
      },
      sport: {
        disableScore,
        chatRoom: {
          disabled: disableChatRoom,
          tabSpecialTranslate: chatroomTabSpecialTranslate,
        },
        sportMobileMenuIconList,
        sportCardSort,
        sportLiveStreamingInsufficientQualifyDarkBackgroundColor,
        sportCartCouponIsSpecial,
      },
      im: {
        disableIMExpert,
        enableChatroomTranslate,
        enableChatroomDefaultTranslate,
        vendorChatroomTheme,
      },
      footer,
      socialMedia,
      sponsor,
      sponsorInner,
      serviceFeePercent,
      vendorValidBet,
      vendorMinimumMembers,
      hideVndAndIdr,
      hasAgreementPage,
      enableUniquePage,
      hasCrossBlockAdSponsor,
      casino: {
        enableCasinoCarousel,
        casinoShowTitleIcon,
        sponsorImagesArray,
      },
      detectLimitedAccess,
      enableTutorial,
      thirdPartyRecordOrder: thirdPartyRecordOrder,
      commissionDetailI18n,
      vendorProductsImgSeries,
      depositDetailPageTheme,
    },
    ipInfo,
    statistics,
  };
  setEnvConfig(newEnvConfig);
}

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story, context) => {
      if (context.globals.vendor !== 'auto') {
        // TODO: change related url endpoint too
        updateVendor(context.globals.vendor);
      } else {
        // for each 5s, switch to next vendor
        let index = 0;
        const interval = setInterval(() => {
          index = (index + 1) % listOfVendor.length;
          // TODO: change related url endpoint too
          updateVendor(context.globals.vendor);
        }, 5000);
        onCleanup(() => {
          clearInterval(interval);
        });
      }
      overrideVendorColorSetting(document.body);
      return story();
    },
    (story, context) => {
      if (context.globals.locale !== 'auto') {
        changeLanguage(context.globals.locale);
      } else {
        // for each 5s, switch to next vendor
        let index = 0;
        const list = Object.keys(LocaleDash).map((key) => LocaleDash[key]);
        const interval = setInterval(() => {
          index = (index + 1) % list.length;
          // TODO: change related url endpoint too
          changeLanguage(list[index]);
        }, 5000);
        onCleanup(() => {
          clearInterval(interval);
        });
      }
      return story();
    },
    (story) => {
      createEffect(
        on(
          () => translation.language,
          () => {
            const locale = formatLocale(translation.language);
            fetch(`https://i18n-querier-qa.service-station-uat.link/api/v2/i18n/DEV/snapshot/fluid/${locale}`).then(
              async (res) => {
                const data = await res.json();
                initDictionary(data.data);
              },
            );
          },
        ),
      );
      return story();
    },
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        // Array of plain string values or MenuItem shape (see below)
        items: [
          {
            value: 'light',
            title: 'Light',
            icon: 'sun',
          },
          {
            value: 'dark',
            title: 'Dark',
            icon: 'moon',
          },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
    // change vendor id
    vendor: {
      description: 'Global vendor for components',
      defaultValue: 'vd004',
      toolbar: {
        // use icon for vendor
        icon: 'admin',
        // TODO: array of vendor id list, should be import from somewhere else
        items: [
          {
            value: 'auto',
            title: '自動切換',
          },
          ...listOfVendor,
        ],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        dynamicTitle: true,
      },
    },
    // change vendor id
    locale: {
      description: 'Global locale for components',
      defaultValue: LocaleDash.zh_CN,
      toolbar: {
        // use icon for vendor
        icon: 'globe',
        // TODO: array of vendor id list, should be import from somewhere else
        items: [
          {
            value: 'auto',
            title: '自動切換',
          },
          // loop LocalDash enum
          ...Object.keys(LocaleDash).map((key) => {
            return {
              value: LocaleDash[key],
              title: LocaleDash[key],
            };
          }),
        ],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
