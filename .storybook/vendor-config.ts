// default runtime environment variables , will remove after node entrance provide config api

const vendorColor = {
  vd001: {
    primary: '#4C9EEA',
    secondary: '#50BDFF',
    primaryHover: '#448DD1',
    buttonBackgroundActive: '#3C7CBB',
    buttonRippleBlock: '#dedede',
    rebateLabelBackgroundFrom: '#3C7CB8',
    rebateLabelBackgroundTo: '#50BDFF',
    rebateTriangleBackground: '#3C7CB8',
  },
  vd002: {
    primary: '#0C186C',
    secondary: '#5054FF',
    primaryHover: '#0A1561',
    buttonBackgroundActive: '#080F56',
    buttonRippleBlock: '#d1d1d1',
    rebateLabelBackgroundFrom: '#0C186C',
    rebateLabelBackgroundTo: '#5054FF',
    rebateTriangleBackground: '#0b0c59',
  },
  vd003: {
    primary: '#0C186C',
    secondary: '#5054FF',
    primaryHover: '#0A1561',
    buttonBackgroundActive: '#080F56',
    buttonRippleBlock: '#d1d1d1',
    rebateLabelBackgroundFrom: '#0C186C',
    rebateLabelBackgroundTo: '#5054FF',
    rebateTriangleBackground: '#0b0c59',
  },
  vd004: {
    primary: '#4C9EEA',
    secondary: '#50BDFF',
    primaryHover: '#448DD1',
    buttonBackgroundActive: '#3C7CBB',
    buttonRippleBlock: '#dedede',
    rebateLabelBackgroundFrom: '#3C7CB8',
    rebateLabelBackgroundTo: '#50BDFF',
    rebateTriangleBackground: '#3C7CB8',
  },
  vd005: {
    primary: '#0C186C',
    secondary: '#5054FF',
    primaryHover: '#0A1561',
    buttonBackgroundActive: '#080F56',
    buttonRippleBlock: '#d1d1d1',
    rebateLabelBackgroundFrom: '#3C7CB8',
    rebateLabelBackgroundTo: '#50BDFF',
    rebateTriangleBackground: '#3C7CB8',
  },
  vd006: {
    primary: '#0C186C',
    secondary: '#5054FF',
    primaryHover: '#0A1561',
    buttonBackgroundActive: '#080F56',
    buttonRippleBlock: '#d1d1d1',
    rebateLabelBackgroundFrom: '#0C186C',
    rebateLabelBackgroundTo: '#5054FF',
    rebateTriangleBackground: '#0b0c59',
  },
  vd007: {
    primary: '#4C9EEA',
    secondary: '#50BDFF',
    primaryHover: '#448DD1',
    buttonBackgroundActive: '#3C7CBB',
    buttonRippleBlock: '#dedede',
    rebateLabelBackgroundFrom: '#3C7CB8',
    rebateLabelBackgroundTo: '#50BDFF',
    rebateTriangleBackground: '#3C7CB8',
  },
  vd008: {
    primary: '#0C186C',
    secondary: '#5054FF',
    primaryHover: '#0A1561',
    buttonBackgroundActive: '#080F56',
    buttonRippleBlock: '#d1d1d1',
    rebateLabelBackgroundFrom: '#0C186C',
    rebateLabelBackgroundTo: '#5054FF',
    rebateTriangleBackground: '#0b0c59',
  },
  vd009: {
    primary: '#4C9EEA',
    secondary: '#50BDFF',
    primaryHover: '#448DD1',
    buttonBackgroundActive: '#3C7CBB',
    buttonRippleBlock: '#dedede',
    rebateLabelBackgroundFrom: '#3C7CB8',
    rebateLabelBackgroundTo: '#50BDFF',
    rebateTriangleBackground: '#3C7CB8',
  },
  vd010: {
    primary: '#0C186C',
    secondary: '#5054FF',
    primaryHover: '#0A1561',
    buttonBackgroundActive: '#080F56',
    buttonRippleBlock: '#d1d1d1',
    rebateLabelBackgroundFrom: '#3C7CB8',
    rebateLabelBackgroundTo: '#50BDFF',
    rebateTriangleBackground: '#3C7CB8',
  },
  vd011: {
    primary: '#4C9EEA',
    secondary: '#50BDFF',
    primaryHover: '#448DD1',
    buttonBackgroundActive: '#3C7CBB',
    buttonRippleBlock: '#dedede',
    rebateLabelBackgroundFrom: '#3C7CB8',
    rebateLabelBackgroundTo: '#50BDFF',
    rebateTriangleBackground: '#3C7CB8',
  },
  vd099: {
    primary: '#4C9EEA',
    secondary: '#50BDFF',
    primaryHover: '#448DD1',
    buttonBackgroundActive: '#3C7CBB',
    buttonRippleBlock: '#dedede',
    rebateLabelBackgroundFrom: '#3C7CB8',
    rebateLabelBackgroundTo: '#50BDFF',
    rebateTriangleBackground: '#3C7CB8',
  },
};

const socialMedia = {
  vd001: {
    twitter: {
      default: 'http://www.twitter.com/8xbet',
      id_ID: 'http://www.twitter.com/8xbetid',
      vi_VN: 'http://www.twitter.com/8xbetvn',
      th_TH: 'http://www.twitter.com/8xbetth',
    },
    instagram: {
      default: 'http://www.instagram.com/8xbetofficial',
      id_ID: 'http://www.instagram.com/8xbetid',
      vi_VN: 'http://www.instagram.com/8xbetvn',
      th_TH: 'http://www.instagram.com/8xbetth',
    },
    tiktok: {
      default: 'http://www.tiktok.com/@8xbet',
      id_ID: 'http://www.tiktok.com/@8xbetid',
      th_TH: 'http://www.tiktok.com/@8xbetth',
    },
    youtube: {
      default: 'http://www.youtube.com/channel/UC4obyah-Wkltb74EHaFiuSQ',
    },
    facebook: {
      default: 'https://www.facebook.com/8xbetofficials',
      id_ID: 'http://www.facebook.com/8xbetid',
      vi_VN: 'https://www.facebook.com/8xbet.vietnamese',
      th_TH: 'https://www.facebook.com/8xbetth',
    },
  },
};

const vendorFooter = {
  vd001: {
    help: {
      content: [
        { i18n: 'foobar.onlineService' },
        { i18n: 'mine.icon_gamePlan' },
        { i18n: 'vd000.sideService.rulesTerms' },
        { i18n: 'foobar.aboutUs' },
      ],
    },
    officialPartner: {
      content: [
        {
          i18n: 'partnership.title',
          img: '/footer/vd001/officialPartner.png',
          imgType: 'rightImg',
        },
      ],
    },
    brandAmbassador: {
      disable: false,
      content: [
        {
          i18n: 'endorsement.information.personal.title',
          img: '/footer/vd001/endorsementSign.png',
          imgType: 'rightImg',
        },
      ],
    },
    sponsorship: {
      disable: true,
    },
    graphic: {
      screenSize: 'tablet',
    },
    socialMedia: {
      disable: false,
    },
  },
  vd002: {
    sponsorship: {
      content: [
        { i18n: 'adTeam.serieA.title', img: '/footer/vd002/SerieA.png' },
        { i18n: 'tiger_adTeam.laliga.title', img: '/footer/vd002/Laliga.png' },
        { i18n: 'adTeam.ligue1.title.n', img: '/footer/vd002/ligue1.png' },
      ],
    },
    officialPartner: {
      disable: true,
    },
  },
  vd003: {
    sponsorship: {
      content: [
        { i18n: 'adTeam.serieA.title', img: '/footer/vd003/SerieA.png' },
        { i18n: 'tiger_adTeam.laliga.title', img: '/footer/vd003/Laliga.png' },
        { i18n: 'adTeam.ligue1.title.n', img: '/footer/vd003/ligue1.png' },
      ],
    },
    officialPartner: {
      i18n: 'vd003.regionalPartner',
      content: [{ i18n: 'roma', img: '/footer/vd003/roma.png' }],
    },
  },
  vd004: {
    sponsorship: {
      content: [
        { i18n: 'leicester.game.premier', img: '/footer/vd004/premierLeague.png' },
        { i18n: 'adTeam.serieA.title', img: '/footer/vd004/SerieA.png' },
        { i18n: 'tiger_adTeam.laliga.title', img: '/footer/vd004/Laliga.png' },
      ],
    },
    officialPartner: {
      content: [
        { i18n: 'monaco', img: '/footer/vd004/monaco.png' },
        { i18n: 'wolves', img: '/footer/vd004/wolves.png' },
        { i18n: 'wolfsburg', img: '/footer/vd004/wolfsburg.png' },
        { i18n: 'partnership.Lazio', img: '/footer/vd004/officialPartner.png' },
      ],
    },
  },
  vd005: {},
  vd006: {
    sponsorship: {
      content: [
        { i18n: 'adTeam.serieA.title', img: '/footer/vd006/SerieA.png' },
        { i18n: 'adTeam.ligue1.title.n', img: '/footer/vd006/ligue1.png' },
      ],
    },
    officialPartner: {
      content: [{ i18n: 'athletic', img: '/footer/vd006/officialPartner.png' }],
    },
  },
  vd007: {
    sponsorship: {
      disable: true,
    },
    officialPartner: {
      disable: true,
    },
  },
  vd008: {
    sponsorship: {
      content: [{ i18n: 'tiger_adTeam.laliga.title', img: '/footer/vd008/Laliga.png' }],
    },
    officialPartner: {
      content: [{ i18n: 'sevillaClub', img: '/footer/vd008/sevilla.png' }],
    },
  },
  vd009: {
    sponsorship: {
      disable: true,
    },
    officialPartner: {
      content: [{ i18n: 'torino.torino', img: '/footer/vd009/torino.png' }],
    },
  },
  vd010: {
    sponsorship: {
      disable: true,
    },
    officialPartner: {
      disable: true,
    },
  },

  vd011: {
    sponsorship: {
      disable: true,
    },
    officialPartner: {
      disable: true,
    },
  },
  vd099: {
    sponsorship: {
      disable: true,
    },
    officialPartner: {
      disable: true,
    },
  },
};

const sportMobileMenuIconList = {
  vd001: ['im', 'casino', 'sscore', 'promotions', 'endorse', 'allStar', 'manchester', 'leicester'],
  vd002: ['im', 'casino', 'sscore', 'promotions', 'sponsors'],
  vd003: ['im', 'casino', 'sscore', 'promotions', 'roma', 'sponsors'],
  vd004: ['im', 'casino', 'sscore', 'promotions', 'wolf', 'monaco', 'wolfsburg', 'manchester', 'sponsors'],
  vd005: [],
  vd006: ['im', 'casino', 'sscore', 'promotions', 'bilbao', 'sponsors'],
  vd007: ['im', 'casino', 'sscore', 'promotions'],
  vd008: ['im', 'casino', 'sscore', 'promotions', 'sevilla', 'sponsors'],
  vd009: ['im', 'casino', 'sscore', 'promotions', 'partnership'],
  vd010: ['im', 'casino', 'sscore', 'promotions'],
  vd011: ['im', 'casino', 'sscore', 'promotions'],
  vd099: ['im', 'casino', 'sscore', 'promotions'],
};

const sponsorPageSetting = {
  vd001: {
    enableUniquePage: true,
    hasCrossBlockAdSponsor: false,
  },
  vd002: {
    enableUniquePage: false,
    hasCrossBlockAdSponsor: false,
  },
  vd003: {
    enableUniquePage: false,
    hasCrossBlockAdSponsor: false,
  },
  vd004: {
    enableUniquePage: false,
    hasCrossBlockAdSponsor: true,
  },
  vd005: {
    enableUniquePage: false,
    hasCrossBlockAdSponsor: false,
  },
  vd006: {
    enableUniquePage: false,
    hasCrossBlockAdSponsor: false,
  },
  vd007: {
    enableUniquePage: false,
    hasCrossBlockAdSponsor: false,
  },
  vd008: {
    enableUniquePage: false,
    hasCrossBlockAdSponsor: false,
  },
  vd009: {
    enableUniquePage: false,
    hasCrossBlockAdSponsor: false,
  },
  vd010: {
    enableUniquePage: false,
    hasCrossBlockAdSponsor: false,
  },

  vd011: {
    enableUniquePage: false,
    hasCrossBlockAdSponsor: true,
  },
  vd099: {
    enableUniquePage: false,
    hasCrossBlockAdSponsor: true,
  },
};
const franchisePageSetting = {
  vd001: {
    commissionDetailI18n: true,
  },
  vd002: {
    commissionDetailI18n: false,
  },
  vd003: {
    commissionDetailI18n: false,
  },
  vd004: {
    commissionDetailI18n: false,
  },
  vd005: {
    commissionDetailI18n: false,
  },
  vd006: {
    commissionDetailI18n: false,
  },
  vd007: {
    commissionDetailI18n: false,
  },
  vd008: {
    commissionDetailI18n: false,
  },
  vd009: {
    commissionDetailI18n: false,
  },
  vd010: {
    commissionDetailI18n: false,
  },
  vd011: {
    commissionDetailI18n: false,
  },
  vd099: {
    commissionDetailI18n: false,
  },
};

const vendorSponsorHome = {
  vd001: {
    main: [],
  },
  vd002: {
    main: [
      {
        label: 'topSponsor/titleA',
        title: 'partnership.topSponsor',
        content: 'vd002.partnership.topSponsor.summary',
        picture: '0',
        link: '',
      },
    ],
  },
  vd003: {
    main: [
      {
        label: 'regionalPartner/titleA',
        title: 'roma',
        content: 'partnership.roma.summary',
        picture: '0',
        link: '',
      },
      {
        label: 'topSponsor/titleA',
        title: 'partnership.topSponsor',
        content: 'vd003.partnership.topSponsor.summary',
        picture: '1',
        link: '',
      },
    ],
  },
  vd004: {
    main: [
      {
        label: 'officialPartner/titleB',
        title: 'monaco',
        content: 'monaco_content',
        picture: 'monaco',
        link: 'monaco',
      },
      {
        label: 'officialPartner/titleB',
        title: 'wolves',
        content: 'wolves_content',
        picture: 'wolves',
        link: 'wolves',
      },
      {
        label: 'officialPartner/titleB',
        title: 'wolfsburg',
        content: 'wolfsburg_content',
        picture: 'wolfsburg',
        link: 'wolfsburg',
      },
      {
        label: 'officialPartner/titleB',
        title: 'vd004.pc.home.slogan3',
        content: 'vd004.partnership.Lazio.summary',
        picture: 'partner',
        link: 'partnership',
      },
    ],
    bottom: [
      {
        label: 'topSponsor/titleB',
        title: 'partnership.topSponsor',
        content: 'vd004.partnership.topSponsor.summary',
        picture: 'adSponsorship',
        link: 'topAdSponsorship',
      },
    ],
  },
  vd005: {
    main: [
      {
        label: '',
        title: '',
        content: '',
        picture: '',
        link: '',
      },
    ],
  },
  vd006: {
    main: [
      {
        label: 'officialPartner/titleA',
        title: 'athletic',
        content: 'partnership.Athletic.summary',
        picture: '0',
        link: '',
      },
      {
        label: 'topSponsor/titleA',
        title: 'vd004.pc.home.slogan3',
        content: 'vd006.partnership.topSponsor.summary',
        picture: '1',
        link: '',
      },
    ],
  },
  vd007: {
    main: [
      {
        label: 'topSponsor/titleB',
        title: 'credit.protection',
        content: 'vd007.partnership.credit.summary',
        picture: '0',
        link: '',
      },
    ],
  },
  vd008: {
    main: [
      {
        label: 'officialPartner/titleA',
        title: 'sevillaClub',
        content: 'partnership.Sevilla.summary',
        picture: '0',
        link: '',
      },
      {
        label: 'topSponsor/titleA',
        title: 'partnership.topSponsor',
        content: 'vd008.partnership.topSponsor.summary',
        picture: '1',
        link: '',
      },
    ],
  },
  vd009: {
    main: [
      {
        label: 'officialPartner/titleB',
        title: 'tiger_torino',
        content: 'partnership.torino.summary',
        picture: '0',
        link: '',
      },
    ],
  },
  vd010: {
    main: [
      {
        label: '',
        title: '',
        content: '',
        picture: '',
        link: '',
      },
    ],
  },
  vd011: {
    main: [],
  },
  vd099: {
    main: [],
  },
};

const vendorSponsorTeam = {
  vd001: {
    partnership: {
      sponsorBannerSrc: '',
      toggleBrandSrc: 'mancheste',
      toggleBrandI18n: 'partnership.text',
      logoSrc: '',
      content: '',
      brandSrc: '',
      content_2: '',
      videoSrc: '',
      videoExtraClasses: '',
      leagueData: [
        {
          leagueSrc: '',
          leagueTitle: '',
          leagueContent: [''],
        },
      ],
      partnershipPicSrc: [],
    },
    leicester: {
      sponsorBannerSrc: '',
      toggleBrandSrc: 'leicester',
      toggleBrandI18n: 'leicester_city_club',
      logoSrc: '',
      content: '',
      brandSrc: '',
      content_2: '',
      videoSrc: '',
      videoExtraClasses: '',
      leagueData: [
        {
          leagueSrc: '',
          leagueTitle: '',
          leagueContent: [''],
        },
      ],
      partnershipPicSrc: [],
    },
    allStar: {
      sponsorBannerSrc: '',
      toggleBrandSrc: 'allStar',
      toggleBrandI18n: 'sideLink.allStar',
      logoSrc: '',
      content: '',
      brandSrc: '',
      content_2: '',
      videoSrc: '',
      videoExtraClasses: '',
      leagueData: [
        {
          leagueSrc: '',
          leagueTitle: '',
          leagueContent: [''],
        },
      ],
      partnershipPicSrc: [],
    },
    endorsement: {
      sponsorBannerSrc: '',
      toggleBrandSrc: 'man',
      toggleBrandI18n: 'endorsement.information.header',
      logoSrc: '',
      content: '',
      brandSrc: '',
      content_2: '',
      videoSrc: '',
      videoExtraClasses: '',
      leagueData: [
        {
          leagueSrc: '',
          leagueTitle: '',
          leagueContent: [''],
        },
      ],
      partnershipPicSrc: [],
    },
  },
  vd002: {
    topAdSponsorship: {
      hiddenInNav: false,
      toggleBrandSrc: 'sponsor_2',
      toggleBrandI18n: 'topAd.sponsorship',
      sponsorBannerSrc: 'banner',
      tabColorSrc: 'buttonA',
      tab: {
        serieA: {
          sponsorName: 'serieA',
          tabIconSrc: 'serieA',
          sponsorAdItem: {
            isPc: 'adTeam.serieA.title.n',
            isWap: 'adTeam.serieA.short',
            logoBrandSrc: 'serieA',
            content: 'vd002.adTeam.serieA.led.content.v2',
            content_2: 'vd003.serieA.introduction',
            sponsorBrand: [
              {
                brandSrc: 'ACMilan',
                brandName: 'ACMilan',
              },
              {
                brandSrc: 'internalMilano',
                brandName: 'milanoSpA',
              },
              {
                brandSrc: 'juventus',
                brandName: 'juventus',
              },
              {
                brandSrc: 'ASRoma',
                brandName: 'ASRoma',
              },
              {
                brandSrc: 'napoli',
                brandName: 'napoli',
              },
            ],
          },
        },
        laliga: {
          sponsorName: 'laliga',
          tabIconSrc: 'laliga',
          sponsorAdItem: {
            isPc: 'adTeam.laliga.title.n',
            isWap: 'adTeam.laliga.short',
            logoBrandSrc: 'laliga',
            content: 'vd002.adTeam.laliga.led.content',
            content_2: 'adTeam.laliga.introduction',
            sponsorBrand: [
              {
                brandSrc: 'barcelona',
                brandName: 'barcelona',
              },
              {
                brandSrc: 'realMadrid',
                brandName: 'realMadrid',
              },
              {
                brandSrc: 'madrid',
                brandName: 'madrid',
              },
            ],
          },
        },
        ligue1: {
          sponsorName: 'ligue',
          tabIconSrc: 'ligue1',
          sponsorAdItem: {
            isPc: 'adTeam.ligue1.title.n',
            isWap: 'ligue',
            logoBrandSrc: 'ligue1',
            content: 'vd002.adTeam.ligue1.led.content',
            content_2: 'adTeam.ligue1.introduction',
            sponsorBrand: [
              {
                brandSrc: 'saintGermain',
                brandName: 'saintGermain',
              },
              {
                brandSrc: 'olympiqueMarseille',
                brandName: 'olympiqueMarseille',
              },
              {
                brandSrc: 'monacoFootball',
                brandName: 'monacoFootball',
              },
              {
                brandSrc: 'olympiqueLyonnais',
                brandName: 'olympiqueLyonnais',
              },
            ],
          },
        },
      },
      tabExtraClasses: 'justify-center',
      contentMargin: 'mb-20',
      tabPictureExtraClasses: '',
      tabExtraClassesForTablet: 'min-h-12_75 min-w-41_752',
      tabExtraClassesForPC: 'min-h-20 min-w-71',
      tabExtraClassesForMobile: 'min-w-22_5',
      tabTitleExtraClassesForTablet: 'text-xxxs w-30',
      tabTitleExtraClassesForPC: 'text-base w-30 min-w-65/100 leading-6',
      tabTitleExtraClassesForMobile: 'w-15 text-xxxs',
      fieldAdsTextExtraClasses: '',
      leagueNameExtraClassesForTablet: '',
      leagueIconExtraClassesForTablet: '',
    },
  },
  vd003: {
    roma: {
      sponsorBannerSrc: 'roma',
      toggleBrandSrc: 'roma',
      toggleBrandI18n: 'roma',
      logoSrc: 'primary_logo',
      content: 'vd003.partnership.subtext1',
      brandSrc: 'brandLogo',
      content_2: 'vd003.partnership.subtext',
      leagueData: [
        {
          leagueSrc: 'TIM',
          leagueTitle: 'vd003.partnerShip.game.premierA',
          leagueContent: ['vd003.partnerShip.game.premierA.text1'],
        },
        {
          leagueSrc: 'ITALIA',
          leagueTitle: 'vd003.partnerShip.game.Italia',
          leagueContent: ['vd003.partnerShip.game.Italia.text1'],
        },
        {
          leagueSrc: 'SUPER',
          leagueTitle: 'vd003.partnerShip.game.Super',
          leagueContent: ['vd003.partnerShip.game.Super.text1'],
        },
      ],
    },
    topAdSponsorship: {
      hiddenInNav: false,
      toggleBrandSrc: 'sponsor_3',
      toggleBrandI18n: 'topAd.sponsorship',
      sponsorBannerSrc: 'banner',
      tabColorSrc: 'buttonA',
      tab: {
        serieA: {
          sponsorName: 'serieA',
          tabIconSrc: 'serieA',
          sponsorAdItem: {
            isPc: 'adTeam.serieA.title.n',
            isWap: 'adTeam.serieA.short',
            logoBrandSrc: 'serieA',
            content: 'vd003.adTeam.serieA.led.content',
            content_2: 'vd003.serieA.introduction',
            sponsorBrand: [
              {
                brandSrc: 'fiorentina',
                brandName: 'fiorentina',
              },
              {
                brandSrc: 'bologna',
                brandName: 'bologna',
              },
              {
                brandSrc: 'torino',
                brandName: 'tiger_torino',
              },
              {
                brandSrc: 'monza',
                brandName: 'monza',
              },
              {
                brandSrc: 'udineseCalcio',
                brandName: 'udineseCalcio',
              },
              {
                brandSrc: 'sassuolo',
                brandName: 'sassuolo',
              },
              {
                brandSrc: 'empoli',
                brandName: 'empoli',
              },
              {
                brandSrc: 'salernitana',
                brandName: 'salernitana',
              },
              {
                brandSrc: 'lecce',
                brandName: 'lecce',
              },
              {
                brandSrc: 'hellasVerona',
                brandName: 'hellasVerona',
              },
              {
                brandSrc: 'spezia',
                brandName: 'spezia',
              },
              {
                brandSrc: 'cremonese',
                brandName: 'cremonese',
              },
              {
                brandSrc: 'sampdoria',
                brandName: 'sampdoria',
              },
            ],
          },
        },
        laliga: {
          sponsorName: 'laliga',
          tabIconSrc: 'laliga',
          sponsorAdItem: {
            isPc: 'adTeam.laliga.title.n',
            isWap: 'adTeam.laliga.short',
            logoBrandSrc: 'laliga',
            content: 'vd003.adTeam.laliga.led.content',
            content_2: 'adTeam.laliga.introduction',
            sponsorBrand: [
              {
                brandSrc: 'barcelona',
                brandName: 'barcelona',
              },
              {
                brandSrc: 'realMadrid',
                brandName: 'realMadrid',
              },
              {
                brandSrc: 'madrid',
                brandName: 'madrid',
              },
            ],
          },
        },
        ligue1: {
          sponsorName: 'ligue',
          tabIconSrc: 'ligue1',
          sponsorAdItem: {
            isPc: 'adTeam.ligue1.title.n',
            isWap: 'ligue',
            logoBrandSrc: 'ligue1',
            content: 'vd003.adTeam.ligue1.led.content',
            content_2: 'adTeam.ligue1.introduction',
            sponsorBrand: [
              {
                brandSrc: 'saintGermain',
                brandName: 'saintGermain',
              },
              {
                brandSrc: 'racingClub',
                brandName: 'racingClub',
              },
              {
                brandSrc: 'olympiqueMarseille',
                brandName: 'olympiqueMarseille',
              },
            ],
          },
        },
      },
      tabExtraClasses: 'justify-center',
      contentMargin: 'mb-20',
      tabPictureExtraClasses: '',
      tabExtraClassesForTablet: 'min-h-12_75 min-w-41_752',
      tabExtraClassesForPC: 'min-h-20 min-w-71',
      tabExtraClassesForMobile: 'p-2_5',
      tabTitleExtraClassesForTablet: 'text-xxxs w-30',
      tabTitleExtraClassesForPC: 'text-base w-30 min-w-65/100 leading-6',
      tabTitleExtraClassesForMobile: 'mx-1_25 text-xxxs',
      fieldAdsTextExtraClasses: '',
      leagueNameExtraClassesForTablet: '',
      leagueIconExtraClassesForTablet: '',
    },
  },
  vd004: {
    monaco: {
      toggleBrandSrc: 'monaco',
      toggleBrandI18n: 'monaco',
      sponsorBannerSrc: 'monaco',
      logoSrc: 'primary_logo',
      content: 'vd004.monaco.owner.subtext',
      brandSrc: 'brandLogo',
      content_2: 'vd004.monaco.subtext',
      leagueData: [
        {
          leagueSrc: 'LIGUE',
          leagueTitle: 'monaco.game.LIGUE',
          leagueContent: ['monaco.game.LIGUE.text1', 'monaco.game.LIGUE.text2'],
        },
        {
          leagueSrc: 'FFF',
          leagueTitle: 'monaco.game.FFF',
          leagueContent: ['monaco.game.FFF.text1', 'monaco.game.FFF.text2'],
        },
        {
          leagueSrc: 'LA-LIGUE',
          leagueTitle: 'monaco.game.LA-LIGUE',
          leagueContent: ['monaco.game.LA-LIGUE.text1', 'monaco.game.LA-LIGUE.text2'],
        },
        {
          leagueSrc: 'cham',
          leagueTitle: 'monaco.game.cham',
          leagueContent: ['monaco.game.cham.text1'],
        },
        {
          leagueSrc: 'ero',
          leagueTitle: 'partnerShip.game.UEFA',
          leagueContent: ['monaco.game.ero.text1'],
        },
      ],
    },
    wolves: {
      toggleBrandSrc: 'wolves',
      toggleBrandI18n: 'wolves',
      sponsorBannerSrc: 'wolves',
      logoSrc: 'primary_logo',
      content: 'vd004.wolves.owner.subtext',
      brandSrc: 'brandLogo',
      content_2: 'vd004.wolves.subtext',
      videoSrc: 'wolves',
      videoExtraClasses: 'mb-15',
      videoCoverSrc: 'wolves',
      leagueData: [
        {
          leagueSrc: 'FA-CUP',
          leagueTitle: 'leicester.game.FAcup',
          leagueContent: ['wolves.game.FAcup.text1', 'wolves.game.FAcup.text2'],
        },
        {
          leagueSrc: 'EFL-league',
          leagueTitle: 'leicester.game.ELFleague',
          leagueContent: ['wolves.game.ELFleague.text1'],
        },
        {
          leagueSrc: 'EFL-champ',
          leagueTitle: 'leicester.game.ELFchamp',
          leagueContent: ['wolves.game.ELFcup.text1'],
        },
      ],
      partnershipPicSrc: [1, 2, 3, 4],
    },
    wolfsburg: {
      toggleBrandSrc: 'wolfsburg',
      toggleBrandI18n: 'wolfsburg',
      sponsorBannerSrc: 'wolfsburg',
      logoSrc: 'primary_logo',
      content: 'vd004.wolfsburg.owner.subtext',
      brandSrc: 'brandLogo',
      content_2: 'vd004.wolfsburg.subtext',
      leagueData: [
        {
          leagueSrc: 'bundesLiga',
          leagueTitle: 'tiger_adTeam.bundesliga.title',
          leagueContent: ['wolfsburg.game.LFP.text1'],
        },
        {
          leagueSrc: 'SuperCup',
          leagueTitle: 'wolfsburg.game.supercup',
          leagueContent: ['wolfsburg.game.supercup.text1', 'wolfsburg.game.supercup.text2'],
        },
        {
          leagueSrc: 'italianSerieA',
          leagueTitle: 'wolfsburg.game.italianSerieA',
          leagueContent: ['wolfsburg.game.supercup.text1', 'wolfsburg.game.italianSerieA.text2'],
        },
      ],
    },
    partnership: {
      toggleBrandSrc: 'lazio',
      toggleBrandI18n: 'vd004.pc.home.slogan3',
      sponsorBannerSrc: 'partnership',
      logoSrc: 'primary_logo',
      content: 'vd004.partnership.owner.subtext',
      brandSrc: 'brandLogo',
      videoSrc: 'partnership',
      videoExtraClasses: 'mb-15',
      content_2: 'vd004.partnership.subtext',
      leagueData: [
        {
          leagueSrc: 'TIM',
          leagueTitle: 'vd004.partnerShip.game.premierA',
          leagueContent: ['vd004.partnerShip.game.premierA.text1', 'vd004.partnerShip.game.premierA.text2'],
        },
        {
          leagueSrc: 'ItalyB',
          leagueTitle: 'vd004.partnerShip.game.premierB',
          leagueContent: ['vd004.partnerShip.game.premierB.text1', 'vd004.partnerShip.game.premierB.text2'],
        },
        {
          leagueSrc: 'Italy',
          leagueTitle: 'partnerShip.game.Italy',
          leagueContent: ['vd004.partnerShip.game.Italy.text1', 'vd004.partnerShip.game.Italy.text2'],
        },
        {
          leagueSrc: 'ItalySuperCup',
          leagueTitle: 'partnerShip.game.ItalySuper',
          leagueContent: ['vd004.partnerShip.game.ItalySuper.text'],
        },
        {
          leagueSrc: 'UEFA_EUROPA',
          leagueTitle: 'partnerShip.game.UEFA',
          leagueContent: ['vd004.partnerShip.game.UEFA.text'],
        },
        {
          leagueSrc: 'UEFASuperCup',
          leagueTitle: 'partnerShip.game.UEFASuperCup',
          leagueContent: ['vd004.partnerShip.game.UEFASuperCup.text'],
        },
        {
          leagueSrc: 'UEFACup',
          leagueTitle: 'partnerShip.game.UEFACup',
          leagueContent: ['vd004.partnerShip.game.UEFACup.text'],
        },
        {
          leagueSrc: 'DefaultTeam',
          leagueTitle: 'partnerShip.game.CoppaDelleAlpi',
          leagueContent: ['vd004.partnerShip.game.Coppadellelpi.text'],
        },
      ],
      partnershipPicSrc: [1, 2, 3, 4],
    },
    topAdSponsorship: {
      hiddenInNav: false,
      toggleBrandSrc: 'sponsor_4',
      toggleBrandI18n: 'topAd.sponsorship',
      sponsorBannerSrc: 'banner',
      tabColorSrc: 'buttonB',
      tab: {
        serieA: {
          sponsorName: 'serieA',
          tabIconSrc: 'serieA',
          sponsorAdItem: {
            isPc: 'adTeam.serieA.title.n',
            isWap: 'adTeam.serieA.short',
            logoBrandSrc: 'serieA',
            content: 'adTeam.serieA.led.content',
            content_2: 'vd003.serieA.introduction',
            sponsorBrand: [
              {
                brandSrc: 'fiorentina',
                brandName: 'fiorentina',
              },
              {
                brandSrc: 'bologna',
                brandName: 'bologna',
              },
              {
                brandSrc: 'torino',
                brandName: 'tiger_torino',
              },
              {
                brandSrc: 'monza',
                brandName: 'monza',
              },
              {
                brandSrc: 'udineseCalcio',
                brandName: 'udineseCalcio',
              },
              {
                brandSrc: 'sassuolo',
                brandName: 'sassuolo',
              },
              {
                brandSrc: 'empoli',
                brandName: 'empoli',
              },
              {
                brandSrc: 'salernitana',
                brandName: 'salernitana',
              },
              {
                brandSrc: 'lecce',
                brandName: 'lecce',
              },
              {
                brandSrc: 'hellasVerona',
                brandName: 'hellasVerona',
              },
              {
                brandSrc: 'casteddu',
                brandName: 'casteddu',
              },
              {
                brandSrc: 'frosinone',
                brandName: 'frosinone',
              },
              {
                brandSrc: 'genoa',
                brandName: 'genoa',
              },
              {
                brandSrc: 'juventus',
                brandName: 'juventus',
              },
            ],
            sponsorshipSrc: ['1', '2', '3', '4'],
          },
        },
        premierLeague: {
          sponsorName: 'premierLeague',
          tabIconSrc: 'premierLeague',
          sponsorAdItem: {
            isPc: 'adTeam.premierLeague.title',
            isWap: 'premierLeague',
            logoBrandSrc: 'premierLeague',
            content: 'vd004.premierLeague.goal',
            content_2: 'adTeam.premierLeague.introduction',
            sponsorBrand: [
              {
                brandSrc: 'crystalPalace',
                brandName: 'crystalPalace',
              },
              {
                brandSrc: 'nottinghamFores',
                brandName: 'nottinghamFores',
              },
            ],
            sponsorshipSrc: ['1', '2', '3', '4'],
          },
        },
        laliga: {
          sponsorName: 'laliga',
          tabIconSrc: 'laliga',
          sponsorAdItem: {
            isPc: 'adTeam.laliga.title.n',
            isWap: 'adTeam.laliga.short',
            logoBrandSrc: 'laliga',
            content: 'vd004.laliga.goal',
            content_2: 'adTeam.laliga.introduction',
            sponsorBrand: [
              {
                brandSrc: 'realMadrid',
                brandName: 'realMadrid',
              },
              {
                brandSrc: 'osasuna',
                brandName: 'osasuna',
              },
            ],
            sponsorshipSrc: ['1', '2', '3', '4'],
          },
        },
        bundesLiga: {
          sponsorName: 'bundesLiga',
          tabIconSrc: 'BVB',
          sponsorAdItem: {
            isPc: 'adTeam.dortmund.title',
            isWap: 'dortmund',
            logoBrandSrc: 'bundesLiga',
            content: 'adTeam.bundesLiga.led.content',
            sponsorBrand: [
              {
                brandSrc: 'BVB',
                brandName: 'adTeam.dortmund.title',
              },
            ],
            sponsorshipSrc: ['1', '2', '3', '4'],
          },
        },
      },
      tabExtraClasses: 'justify-between',
      contentMargin: 'mb-7',
      tabPictureExtraClasses: '',
      tabExtraClassesForTablet: 'min-w-22_5 py-2_5 px-1',
      tabExtraClassesForPC: 'min-h-20 min-w-52_5',
      tabExtraClassesForMobile: 'py-2_5 px-1 min-w-22_5',
      tabTitleExtraClassesForTablet: 'text-xxxs mx-1_5 leading-3_75',
      tabTitleExtraClassesForPC: 'text-base w-30 min-w-65/100 leading-6',
      tabTitleExtraClassesForMobile: 'mx-1_5 text-xxxs leading-3_75',
      fieldAdsTextExtraClasses: '',
      leagueNameExtraClassesForTablet: '',
      leagueIconExtraClassesForTablet: '',
    },
    sponsorship: {
      hiddenInNav: true,
      toggleBrandSrc: 'sponsor_4',
      toggleBrandI18n: 'topAd.sponsorship',
      sponsorBannerSrc: 'banner',
      tabColorSrc: 'buttonB',
      tab: {
        serieA: {
          sponsorName: 'serieA',
          tabIconSrc: 'serieA',
          sponsorAdItem: {
            isPc: 'adTeam.serieA.title.n',
            isWap: 'adTeam.serieA.short',
            logoBrandSrc: 'serieA',
            content: 'adTeam.serieA.led.content',
            content_2: 'vd003.serieA.introduction',
            sponsorBrand: [
              {
                brandSrc: 'fiorentina',
                brandName: 'fiorentina',
              },
              {
                brandSrc: 'bologna',
                brandName: 'bologna',
              },
              {
                brandSrc: 'torino',
                brandName: 'tiger_torino',
              },
              {
                brandSrc: 'monza',
                brandName: 'monza',
              },
              {
                brandSrc: 'udineseCalcio',
                brandName: 'udineseCalcio',
              },
              {
                brandSrc: 'sassuolo',
                brandName: 'sassuolo',
              },
              {
                brandSrc: 'empoli',
                brandName: 'empoli',
              },
              {
                brandSrc: 'salernitana',
                brandName: 'salernitana',
              },
              {
                brandSrc: 'lecce',
                brandName: 'lecce',
              },
              {
                brandSrc: 'hellasVerona',
                brandName: 'hellasVerona',
              },
              {
                brandSrc: 'casteddu',
                brandName: 'casteddu',
              },
              {
                brandSrc: 'frosinone',
                brandName: 'frosinone',
              },
              {
                brandSrc: 'genoa',
                brandName: 'genoa',
              },
              {
                brandSrc: 'juventus',
                brandName: 'juventus',
              },
            ],
            sponsorshipSrc: ['1', '2', '3', '4'],
          },
        },
        premierLeague: {
          sponsorName: 'premierLeague',
          tabIconSrc: 'premierLeague',
          sponsorAdItem: {
            isPc: 'adTeam.premierLeague.title',
            isWap: 'premierLeague',
            logoBrandSrc: 'premierLeague',
            content: 'vd004.premierLeague.goal',
            content_2: 'adTeam.premierLeague.introduction',
            sponsorBrand: [
              {
                brandSrc: 'crystalPalace',
                brandName: 'crystalPalace',
              },
              {
                brandSrc: 'nottinghamFores',
                brandName: 'nottinghamFores',
              },
            ],
            sponsorshipSrc: ['1', '2', '3', '4'],
          },
        },
        laliga: {
          sponsorName: 'laliga',
          tabIconSrc: 'laliga',
          sponsorAdItem: {
            isPc: 'adTeam.laliga.title.n',
            isWap: 'adTeam.laliga.short',
            logoBrandSrc: 'laliga',
            content: 'vd004.laliga.goal',
            content_2: 'adTeam.laliga.introduction',
            sponsorBrand: [
              {
                brandSrc: 'realMadrid',
                brandName: 'realMadrid',
              },
              {
                brandSrc: 'osasuna',
                brandName: 'osasuna',
              },
            ],
            sponsorshipSrc: ['1', '2', '3', '4'],
          },
        },
        bundesLiga: {
          sponsorName: 'bundesLiga',
          tabIconSrc: 'BVB',
          sponsorAdItem: {
            isPc: 'adTeam.dortmund.title',
            isWap: 'dortmund',
            logoBrandSrc: 'bundesLiga',
            content: 'adTeam.bundesLiga.led.content',
            sponsorBrand: [
              {
                brandSrc: 'BVB',
                brandName: 'adTeam.dortmund.title',
              },
            ],
            sponsorshipSrc: ['1', '2', '3', '4'],
          },
        },
      },
      tabExtraClasses: 'justify-between',
      contentMargin: 'mb-7',
      tabPictureExtraClasses: '',
      tabExtraClassesForTablet: 'min-w-22_5 py-2_5 px-1',
      tabExtraClassesForPC: 'min-h-20 min-w-52_5',
      tabExtraClassesForMobile: 'py-2_5 px-1 min-w-22_5',
      tabTitleExtraClassesForTablet: 'text-xxxs mx-1_5 leading-3_75',
      tabTitleExtraClassesForPC: 'text-base w-30 min-w-65/100 leading-6',
      tabTitleExtraClassesForMobile: 'mx-1_5 text-xxxs leading-3_75',
      fieldAdsTextExtraClasses: '',
      leagueNameExtraClassesForTablet: '',
      leagueIconExtraClassesForTablet: '',
    },
  },
  vd005: {
    partnership: {
      sponsorBannerSrc: '',
      logoSrc: '',
      content: '',
      brandSrc: '',
      content_2: '',
      videoSrc: '',
      videoExtraClasses: '',
      leagueData: [
        {
          leagueSrc: '',
          leagueTitle: '',
          leagueContent: [''],
        },
      ],
      partnershipPicSrc: [],
    },
    topAdSponsorship: {
      hiddenInNav: false,
      toggleBrandSrc: '',
      toggleBrandI18n: '',
      sponsorBannerSrc: '',
      tabColorSrc: '',
      tab: {
        serieA: {
          sponsorName: '',
          tabIconSrc: '',
          sponsorAdItem: {
            isPc: '',
            isWap: '',
            logoBrandSrc: ' ',
            content: '',
            content_2: '',
            sponsorBrand: [
              {
                brandSrc: '',
                brandName: '',
              },
            ],
          },
        },
      },
      tabExtraClasses: '',
      contentMargin: '',
      tabPictureExtraClasses: '',
      tabExtraClassesForTablet: '',
      tabExtraClassesForPC: '',
      tabExtraClassesForMobile: '',
      tabTitleExtraClassesForTablet: '',
      tabTitleExtraClassesForPC: '',
      tabTitleExtraClassesForMobile: '',
      fieldAdsTextExtraClasses: '',
      leagueNameExtraClassesForTablet: '',
      leagueIconExtraClassesForTablet: '',
    },
  },
  vd006: {
    athletic: {
      toggleBrandSrc: 'athletic',
      toggleBrandI18n: 'athletic',
      sponsorBannerSrc: 'athletic',
      logoSrc: 'primary_logo',
      content: 'partnership.subtext.owner.athletic',
      brandSrc: 'brandLogo',
      content_2: 'vd006.partnership.athletic.subtext',
      videoSrc: 'athletic',
      videoExtraClasses: 'mb-5',
      leagueData: [
        {
          leagueSrc: 'LFP',
          leagueTitle: 'tiger_adTeam.laliga.title',
          leagueContent: ['LFP.text1'],
        },
        {
          leagueSrc: 'COPA',
          leagueTitle: 'COPA',
          leagueContent: ['COPA.text1'],
        },
        {
          leagueSrc: 'Supercopa',
          leagueTitle: 'Supercopa',
          leagueContent: ['Supercopa.text1'],
        },
        {
          leagueSrc: 'UEFA_EUROPA_League',
          leagueTitle: 'UEFA',
          leagueContent: ['UEFA.text1'],
        },
      ],
      partnershipPicSrc: [1, 2, 3, 4, 5, 6],
    },
    topAdSponsorship: {
      hiddenInNav: false,
      toggleBrandSrc: 'sponsor_6',
      toggleBrandI18n: 'topAd.sponsorship',
      sponsorBannerSrc: 'banner',
      tabColorSrc: 'buttonA',
      tab: {
        serieA: {
          sponsorName: 'serieA',
          tabIconSrc: 'serieA',
          sponsorAdItem: {
            isPc: 'adTeam.serieA.title.n',
            isWap: 'adTeam.serieA.short',
            logoBrandSrc: 'serieA',
            content: 'vd006.adTeam.serieA.led.content',
            content_2: 'vd003.serieA.introduction',
            sponsorBrand: [
              {
                brandSrc: 'napoli',
                brandName: 'napoli',
              },
              {
                brandSrc: 'lazio',
                brandName: 'lazio',
              },
              {
                brandSrc: 'milanoSpA',
                brandName: 'milanoSpA',
              },
              {
                brandSrc: 'ACMilan',
                brandName: 'ACMilan',
              },
              {
                brandSrc: 'atalanta',
                brandName: 'atalanta',
              },
              {
                brandSrc: 'ASRoma',
                brandName: 'ASRoma',
              },
            ],
          },
        },
        ligue1: {
          sponsorName: 'ligue1',
          tabIconSrc: 'ligue1',
          sponsorAdItem: {
            isPc: 'adTeam.ligue1.title.n',
            isWap: 'ligue',
            logoBrandSrc: 'ligue1',
            content: 'vd006.adTeam.ligue1.led.content',
            content_2: 'adTeam.ligue1.introduction',
            sponsorBrand: [
              {
                brandSrc: 'saintGermain',
                brandName: 'saintGermain',
              },
              {
                brandSrc: 'racingClub',
                brandName: 'racingClub',
              },
              {
                brandSrc: 'olympiqueMarseille',
                brandName: 'olympiqueMarseille',
              },
            ],
          },
        },
      },
      tabExtraClasses: 'justify-center gap-12',
      contentMargin: 'mb-20',
      tabPictureExtraClasses: '',
      tabExtraClassesForTablet: 'min-w-41_752 py-2_5 px-3 min-h-12_75',
      tabExtraClassesForPC: 'min-h-20 min-w-71',
      tabExtraClassesForMobile: 'py-2 px-2_5',
      tabTitleExtraClassesForTablet: 'text-xxxs mx-1_5 leading-3_75 w-full',
      tabTitleExtraClassesForPC: 'text-base min-w-65/100 leading-6',
      tabTitleExtraClassesForMobile: 'text-xxxs leading-3_75',
      fieldAdsTextExtraClasses: '',
      leagueNameExtraClassesForTablet: '',
      leagueIconExtraClassesForTablet: '',
    },
  },
  vd007: {
    topAdSponsorship: {
      hiddenInNav: false,
      toggleBrandSrc: 'sponsor_7',
      toggleBrandI18n: 'topAd.sponsorship',
      sponsorBannerSrc: 'banner',
      tabColorSrc: 'buttonB',
      tab: {
        laliga: {
          sponsorName: 'laliga',
          tabIconSrc: 'laliga',
          sponsorAdItem: {
            isPc: 'tiger_adTeam.laliga.title',
            isWap: 'adTeam.laliga.short',
            logoBrandSrc: 'laliga',
            logoBrandSrcCn: 'laliga_cn',
            content: 'vd007.adTeam.laliga.led.content',
            content_2: 'adTeam.laliga.summary',
            sponsorBrand: [
              {
                brandSrc: 'realMadrid',
                brandName: 'realMadrid',
              },
            ],
            sponsorshipSrc: ['1', '2', '3'],
          },
        },
        bundesLiga: {
          sponsorName: 'bundesliga',
          tabIconSrc: 'bundesliga',
          sponsorAdItem: {
            isPc: 'tiger_adTeam.bundesliga.title',
            isWap: 'adTeam.bundesLiga.short',
            logoBrandSrc: 'bundesLiga',
            logoBrandSrcCn: 'bundesLiga_cn',
            content: 'vd007.adTeam.bundesliga.led.content',
            content_2: 'adTeam.bundesLiga.summary',
            sponsorBrand: [
              {
                brandSrc: 'VFL',
                brandName: 'adTeam.bundesLiga.VFL',
              },
              {
                brandSrc: 'werderBremen',
                brandName: 'werderBremen',
              },
              {
                brandSrc: 'mainz',
                brandName: 'mainz',
              },
              {
                brandSrc: 'bochum',
                brandName: 'adTeam.bundesLiga.Bochum',
              },
            ],
            sponsorshipSrc: {
              // 需要再加欄位 type設定上有array/object
              VFL: ['01', '02', '03'],
              werderBremen: ['01', '02', '03'],
              mainz: ['01', '02', '03'],
              bochum: ['01', '02', '03'],
            },
          },
        },
      },
      tabExtraClasses: 'justify-center gap-12',
      contentMargin: 'mb-6',
      tabPictureExtraClasses: 'w-6_5 h-6_5',
      tabExtraClassesForTablet: 'min-w-22_5 min-h-12_75 py-3 px-5',
      tabExtraClassesForPC: 'min-h-20 min-w-41_752 py-3 px-5',
      tabExtraClassesForMobile: 'py-3 px-5 min-w-22_5',
      tabTitleExtraClassesForTablet: 'text-xxxs mx-1_5 leading-3_75 mz-1_5',
      tabTitleExtraClassesForPC: 'text-base min-w-65 leading-6 ml-3_25 ml-2_5',
      tabTitleExtraClassesForMobile: 'mx-1_5 text-xxxs leading-3_75',
      fieldAdsTextExtraClasses: 'hidden',
      leagueNameExtraClassesForTablet: '',
      leagueIconExtraClassesForTablet: '',
    },
  },
  vd008: {
    sevilla: {
      toggleBrandSrc: 'sevilla',
      toggleBrandI18n: 'sevillaClub',
      sponsorBannerSrc: 'sevilla',
      logoSrc: 'primary_logo',
      content: 'information.aboutUs.content4',
      brandSrc: 'brandLogo',
      content_2: 'vd008.partnership.subtext',
      leagueData: [
        {
          leagueSrc: 'LaLiga',
          leagueTitle: 'vd008.partnerShip.game.LaLiga',
          leagueContent: ['vd008.partnerShip.game.LaLiga.text1', 'vd008.partnerShip.game.LaLiga.text2'],
        },
        {
          leagueSrc: 'COPA',
          leagueTitle: 'vd008.partnerShip.game.COPA_REY',
          leagueContent: ['vd008.partnerShip.game.COPA_REY.text1', 'vd008.partnerShip.game.COPA_REY.text2'],
        },
        {
          leagueSrc: 'Supercopa',
          leagueTitle: 'vd008.partnerShip.game.Super_COPA',
          leagueContent: ['vd008.partnerShip.game.Super_COPA.text1'],
        },
        {
          leagueSrc: 'UEFA_EUROPA_League',
          leagueTitle: 'vd008.partnerShip.game.UEFA_EUROPA',
          leagueContent: ['vd008.partnerShip.game.UEFA_EUROPA.text1'],
        },
        {
          leagueSrc: 'UEFASuperCup',
          leagueTitle: 'vd008.partnerShip.game.UEFA_SuperCup',
          leagueContent: ['vd008.partnerShip.game.UEFA_SuperCup.text1'],
        },
      ],
      tabExtraClasses: 'justify-center',
      contentMargin: 'mb-6',
      tabPictureExtraClasses: 'w-6_5 h-6_5',
      tabExtraClassesForTablet: 'min-w-22_5 min-h-12_75 py-3 px-5',
      tabExtraClassesForPC: 'min-h-20 min-w-41_752 py-3 px-5',
      tabExtraClassesForMobile: 'py-3 px-5 min-w-22_5',
      tabTitleExtraClassesForTablet: 'text-xxxs mx-1_5 leading-3_75 mz-1_5',
      tabTitleExtraClassesForPC: 'text-base min-w-65 leading-6 ml-3_25 mr-1_25',
      tabTitleExtraClassesForMobile: 'mx-1_5 text-xxxs leading-3_75',
      fieldAdsTextExtraClasses: '',
    },
    topAdSponsorship: {
      hiddenInNav: false,
      toggleBrandSrc: 'laliga',
      toggleBrandI18n: 'topAd.sponsorship',
      sponsorBannerSrc: 'banner',
      tabColorSrc: 'buttonA',
      tab: {
        laliga: {
          sponsorName: 'laliga',
          tabIconSrc: '',
          sponsorAdItem: {
            isPc: 'adTeam.laliga.title.n',
            isWap: 'adTeam.laliga.short',
            logoBrandSrc: 'laliga',
            content: 'vd008.adTeam.bundesliga.led.content',
            content_2: 'adTeam.laliga.introduction',
            sponsorBrand: [
              {
                brandSrc: 'sevilla',
                brandName: 'sevilla',
              },
            ],
          },
        },
      },
      tabExtraClasses: 'justify-center',
      contentMargin: 'mb-20',
      tabPictureExtraClasses: 'w-6_5 h-6_5',
      tabExtraClassesForTablet: 'min-w-22_5 min-h-12_75 py-3 px-5',
      tabExtraClassesForPC: 'min-h-20 min-w-41_752 py-3 px-5',
      tabExtraClassesForMobile: 'py-3 px-5 min-w-22_5',
      tabTitleExtraClassesForTablet: 'text-xxxs mx-1_5 leading-3_75 mz-1_5',
      tabTitleExtraClassesForPC: 'text-base min-w-65 leading-6 ml-3_25 mr-1_25',
      tabTitleExtraClassesForMobile: 'mx-1_5 text-xxxs leading-3_75',
      fieldAdsTextExtraClasses: '',
      leagueNameExtraClassesForTablet: 'w-15 text-xs',
      leagueIconExtraClassesForTablet: 'h-10 w-10',
    },
  },
  vd009: {
    partnership: {
      toggleBrandSrc: 'torino',
      toggleBrandI18n: 'torino.torino',
      sponsorBannerSrc: 'partnership',
      logoSrc: 'primary_logo',
      content: 'partnership.partner_torino_intro',
      brandSrc: 'brandLogo',
      content_2: 'partnership.partner_torino_subtext',
      leagueData: [
        {
          leagueSrc: 'TIM',
          leagueTitle: 'vd003.partnerShip.game.premierA',
          leagueContent: ['vd009.partnerShip.game.premierA.text1'],
        },
        {
          leagueSrc: 'SerieB',
          leagueTitle: 'vd006.partnerShip.game.serieB',
          leagueContent: ['vd009.partnerShip.game.premierB.text1'],
        },
        {
          leagueSrc: 'ITALIA',
          leagueTitle: 'vd003.partnerShip.game.Italia',
          leagueContent: ['vd009.partnerShip.game.Italia.text1'],
        },
        {
          leagueSrc: 'UEFACup',
          leagueTitle: 'vd006.partnerShip.game.UEFA_Cup',
          leagueContent: ['vd009.partnerShip.game.UEFACup.text'],
        },
      ],
    },
  },
  vd010: {
    partnership: {
      toggleBrandSrc: '',
      toggleBrandI18n: '',
      sponsorBannerSrc: '',
      logoSrc: '',
      content: '',
      brandSrc: '',
      content_2: '',
      leagueData: [
        {
          leagueSrc: '',
          leagueTitle: '',
          leagueContent: [''],
        },
      ],
    },
    topAdSponsorship: {
      toggleBrandSrc: '',
      toggleBrandI18n: '',
      sponsorBannerSrc: '',
      tabColorSrc: '',
      tab: {
        laliga: {
          sponsorName: '',
          tabIconSrc: '',
          sponsorAdItem: {
            isPc: '',
            isWap: '',
            logoBrandSrc: '',
            content: '',
            content_2: '',
            sponsorBrand: [
              {
                brandSrc: '',
                brandName: '',
              },
            ],
          },
        },
      },
      fieldAdsTextExtraClasses: '',
      leagueNameExtraClassesForTablet: '',
      leagueIconExtraClassesForTablet: '',
    },
  },
  vd011: {
    partnership: {
      toggleBrandSrc: '',
      toggleBrandI18n: '',
      sponsorBannerSrc: '',
      logoSrc: '',
      content: '',
      brandSrc: '',
      content_2: '',
      leagueData: [
        {
          leagueSrc: '',
          leagueTitle: '',
          leagueContent: [''],
        },
      ],
    },
    topAdSponsorship: {
      toggleBrandSrc: '',
      toggleBrandI18n: '',
      sponsorBannerSrc: '',
      tabColorSrc: '',
      tab: {
        laliga: {
          sponsorName: '',
          tabIconSrc: '',
          sponsorAdItem: {
            isPc: '',
            isWap: '',
            logoBrandSrc: '',
            content: '',
            content_2: '',
            sponsorBrand: [
              {
                brandSrc: '',
                brandName: '',
              },
            ],
          },
        },
      },
      fieldAdsTextExtraClasses: '',
      leagueNameExtraClassesForTablet: '',
      leagueIconExtraClassesForTablet: '',
    },
  },
  vd099: {
    partnership: {
      toggleBrandSrc: '',
      toggleBrandI18n: '',
      sponsorBannerSrc: '',
      logoSrc: '',
      content: '',
      brandSrc: '',
      content_2: '',
      leagueData: [
        {
          leagueSrc: '',
          leagueTitle: '',
          leagueContent: [''],
        },
      ],
    },
    topAdSponsorship: {
      toggleBrandSrc: '',
      toggleBrandI18n: '',
      sponsorBannerSrc: '',
      tabColorSrc: '',
      tab: {
        laliga: {
          sponsorName: '',
          tabIconSrc: '',
          sponsorAdItem: {
            isPc: '',
            isWap: '',
            logoBrandSrc: '',
            content: '',
            content_2: '',
            sponsorBrand: [
              {
                brandSrc: '',
                brandName: '',
              },
            ],
          },
        },
      },
      fieldAdsTextExtraClasses: '',
      leagueNameExtraClassesForTablet: '',
      leagueIconExtraClassesForTablet: '',
    },
  },
};

/** 商務合作-服務優勢 最高佣金 */
const vendorServiceFeePercent = {
  vd001: '45',
  vd002: '50',
  vd003: '50',
  vd004: '50',
  vd005: '50',
  vd006: '50',
  vd007: '50',
  vd008: '50',
  vd009: '50',
  vd010: '50',
  vd011: '50',
  vd099: '50',
};

/** 商務合作-加盟問題-盈利以及支付 有效投注  */
const vendorValidBet = {
  vd001: '3000000',
  vd002: '3000',
  vd003: '3000',
  vd004: '3000',
  vd005: '3000',
  vd006: '3000',
  vd007: '3000',
  vd008: '3000',
  vd009: '3000',
  vd010: '3000',
  vd011: '3000',
  vd099: '3000',
};

/** 商務合作-佣金方案 最低有效會員最低門檻 */
const vendorMinimumMembers = {
  vd001: 5,
  vd002: 5,
  vd003: 5,
  vd004: 5,
  vd005: 5,
  vd006: 6,
  vd007: 5,
  vd008: 5,
  vd009: 5,
  vd010: 5,
  vd011: 5,
  vd099: 5,
};

const ipInfo = {
  country: '台湾',
  province: '台北市',
  district: '',
  city: '台北市',
  lang: 'zh_HK',
  isp: '亚洲',
  description: '',
  isChinaRegion: true,
  region: '',
  iso_code: 'TW',
  time_zone: 'Asia/Taipei',
  ip: '61.216.90.1',
  lib: 1,
  depositThirdPayDisabled: false,
};

const excludedProxyDomain = [
  // vd001 代理域名
  '8xbet219.com',
  '8xbet221.com',
  // QA Demo 域名
  'en-vd001-qa1-portal1.kjfjposdaa.app',
  'en-vd001-qa1-portal2.kjfjposdaa.app',
  'en-vd001-qa1-portal3.kjfjposdaa.app',
  'en-vd001-qa2-portal1.zx26daa.app',
  'en-vd001-qa2-portal2.zx26daa.app',
  'en-vd001-qa2-portal3.zx26daa.app',
  'en-vd011-qa1-portal1.kjfjposdaa.app',
  'en-vd011-qa1-portal2.kjfjposdaa.app',
  'en-vd011-qa1-portal3.kjfjposdaa.app',
  'en-vd011-qa2-portal1.zx26daa.app',
  'en-vd011-qa2-portal2.zx26daa.app',
  'en-vd011-qa2-portal3.zx26daa.app',
  // DEV 測試域名
  'en-vd001-test-portal-6.innodev.site',
  'en-vd011-test-portal-6.innodev.site',
  // STG 測試域名
  'en-vd001-test-portal-3.innostg.site',
  'en-vd001-test-portal-4.innostg.site',
  'en-vd011-test-portal-3.innostg.site',
  'en-vd011-test-portal-4.innostg.site',
  // UAT 測試域名
  'en-vd001-test-portal-2.innouat.site',
  'en-vd001-test-portal-4.innouat.site',
  'en-vd011-test-portal-2.innouat.site',
  'en-vd011-test-portal-4.innouat.site',
];

const vendorSport = {
  vd001: {
    cardSort: true,
  },
  vd002: {
    cardSort: false,
  },
  vd003: {
    cardSort: false,
  },
  vd004: {
    cardSort: false,
  },
  vd005: {
    cardSort: false,
  },
  vd006: {
    cardSort: false,
  },
  vd007: {
    cardSort: false,
  },
  vd008: {
    cardSort: false,
  },
  vd009: {
    cardSort: false,
  },
  vd010: {
    cardSort: false,
  },
  vd011: {
    cardSort: false,
  },
  vd099: {
    cardSort: false,
  },
};

const vendorAuth = {
  vd001: {
    hideVndAndIdr: true,
    hasAgreementPage: true,
  },
  vd002: {
    hideVndAndIdr: false,
    hasAgreementPage: false,
  },
  vd003: {
    hideVndAndIdr: false,
    hasAgreementPage: false,
  },
  vd004: {
    hideVndAndIdr: true,
    hasAgreementPage: false,
  },
  vd005: {
    hideVndAndIdr: false,
    hasAgreementPage: false,
  },
  vd006: {
    hideVndAndIdr: false,
    hasAgreementPage: false,
  },
  vd007: {
    hideVndAndIdr: false,
    hasAgreementPage: false,
  },
  vd008: {
    hideVndAndIdr: false,
    hasAgreementPage: false,
  },
  vd009: {
    hideVndAndIdr: false,
    hasAgreementPage: false,
  },
  vd010: {
    hideVndAndIdr: false,
    hasAgreementPage: false,
  },
  vd011: {
    hideVndAndIdr: false,
    hasAgreementPage: false,
  },
  vd099: {
    hideVndAndIdr: false,
    hasAgreementPage: false,
  },
};

const vendorCasino = {
  vd001: {
    enableCasinoCarousel: false,
    sponsorImagesArray: [
      '/casino/vd001/partnershipEntry/manchester/:lang.png',
      '/casino/vd001/partnershipEntry/leicester/:lang.png',
      '/casino/vd001/partnershipEntry/allStar/:lang.png',
      '/casino/vd001/partnershipEntry/endorsement/:lang.png',
    ],
    sponsorPathArray: [
      'information/partnership',
      'information/leicester',
      'information/allStar',
      'information/endorsement',
    ],
  },
  vd002: {
    enableCasinoCarousel: true,
    sponsorImagesArray: [
      '/casino/vd002/partnershipEntry/:lang/001.png',
      '/casino/vd002/partnershipEntry/:lang/002.png',
      '/casino/vd002/partnershipEntry/:lang/003.png',
      '/casino/vd002/partnershipEntry/:lang/004.png',
      '/casino/vd002/partnershipEntry/:lang/005.png',
    ],
    sponsorPathArray: [],
  },
  vd003: {
    enableCasinoCarousel: false,
    sponsorImagesArray: [
      '/casino/vd003/partnershipEntry/:lang/001.png',
      '/casino/vd003/partnershipEntry/:lang/002.png',
      '/casino/vd003/partnershipEntry/:lang/003.png',
      // '/casino/vd003/partnershipEntry/:lang/004.png',
      // '/casino/vd003/partnershipEntry/:lang/005.png',
    ],
    sponsorPathArray: [],
  },
  vd004: {
    enableCasinoCarousel: true,
    sponsorImagesArray: [
      '/casino/vd004/partnershipEntry/:lang/001.png',
      '/casino/vd004/partnershipEntry/:lang/002.png',
      '/casino/vd004/partnershipEntry/:lang/003.png',
      '/casino/vd004/partnershipEntry/:lang/004.png',
      '/casino/vd004/partnershipEntry/:lang/005.png',
      '/casino/vd004/partnershipEntry/:lang/006.png',
      '/casino/vd004/partnershipEntry/:lang/007.png',
    ],
    sponsorPathArray: [],
  },
  vd005: {
    enableCasinoCarousel: true,
    sponsorImagesArray: [],
    sponsorPathArray: [],
  },
  vd006: {
    enableCasinoCarousel: false,
    sponsorImagesArray: [
      '/casino/vd006/partnershipEntry/:lang/001.png',
      '/casino/vd006/partnershipEntry/:lang/002.png',
      '/casino/vd006/partnershipEntry/:lang/003.png',
    ],
    sponsorPathArray: [],
  },
  vd007: {
    enableCasinoCarousel: true,
    sponsorImagesArray: [
      '/casino/vd007/partnershipEntry/:lang/001.png',
      '/casino/vd007/partnershipEntry/:lang/002.png',
      '/casino/vd007/partnershipEntry/:lang/003.png',
      '/casino/vd007/partnershipEntry/:lang/004.png',
    ],
    sponsorPathArray: [],
  },
  vd008: {
    enableCasinoCarousel: false,
    sponsorImagesArray: [
      '/casino/vd008/partnershipEntry/:lang/001.png',
      '/casino/vd008/partnershipEntry/:lang/002.png',
      '/casino/vd008/partnershipEntry/:lang/003.png',
    ],
    sponsorPathArray: [],
  },
  vd009: {
    enableCasinoCarousel: false,
    sponsorImagesArray: [
      '/casino/vd009/partnershipEntry/:lang/001.png',
      '/casino/vd009/partnershipEntry/:lang/002.png',
      '/casino/vd009/partnershipEntry/:lang/003.png',
    ],
    sponsorPathArray: [],
  },
  vd010: {
    enableCasinoCarousel: true,
    sponsorImagesArray: [],
    sponsorPathArray: [],
  },
  vd011: {
    enableCasinoCarousel: true,
    sponsorImagesArray: [],
    sponsorPathArray: [],
  },
  vd099: {
    enableCasinoCarousel: true,
    sponsorImagesArray: [],
    sponsorPathArray: [],
  },
};

const vendorCasinoShowTitleIcon = {
  vd001: {
    casinoShowTitleIcon: true,
  },
  vd002: {
    casinoShowTitleIcon: false,
  },
  vd003: {
    casinoShowTitleIcon: true,
  },
  vd004: {
    casinoShowTitleIcon: true,
  },
  vd005: {
    casinoShowTitleIcon: true,
  },
  vd006: {
    casinoShowTitleIcon: true,
  },
  vd007: {
    casinoShowTitleIcon: true,
  },
  vd008: {
    casinoShowTitleIcon: true,
  },
  vd009: {
    casinoShowTitleIcon: true,
  },
  vd010: {
    casinoShowTitleIcon: true,
  },
  vd011: {
    casinoShowTitleIcon: true,
  },
  vd099: {
    casinoShowTitleIcon: true,
  },
};

const vendorCasinoOrderDetailGame = {
  vd001: {
    3: {
      shouldCheckThirdpartyDisabled: [],
      items: [16, 18, 22, 15, 4, 36, 3, 17, 11, 23, 31],
    },
    5: {
      shouldCheckThirdpartyDisabled: [29],
      items: [29, 32, 6, 21, 8, 30],
    },
    4: {
      shouldCheckThirdpartyDisabled: [],
      items: [14, 5, 24],
    },
    6: {
      shouldCheckThirdpartyDisabled: [],
      items: [25, 28, 10],
    },
  },
  vd002: {
    6: {
      shouldCheckThirdpartyDisabled: [],
      items: [28, 10, 25],
    },
  },
  vd003: {
    5: {
      shouldCheckThirdpartyDisabled: [],
      items: [32, 8, 6, 30, 21, 29],
    },
  },
  vd004: {},
  vd005: {},
  vd006: {
    6: {
      shouldCheckThirdpartyDisabled: [],
      items: [28, 10, 25],
    },
  },
  vd007: {},
  vd008: {
    6: {
      shouldCheckThirdpartyDisabled: [],
      items: [28, 10, 25],
    },
  },
  vd009: {
    5: {
      shouldCheckThirdpartyDisabled: [],
      items: [32, 8, 6, 30, 21, 29],
    },
  },
  vd010: {
    5: {
      shouldCheckThirdpartyDisabled: [],
      items: [32, 8, 6, 30, 21, 29],
    },
  },
  vd011: {},
  vd099: {},
};

const vendorCasinoShowSponsor = {
  vd001: {
    showSponsors: true,
  },
  vd002: {
    showSponsors: true,
  },
  vd003: {
    showSponsors: true,
  },
  vd004: {
    showSponsors: true,
  },
  vd005: {
    showSponsors: true,
  },
  vd006: {
    showSponsors: true,
  },
  vd007: {
    showSponsors: false,
  },
  vd008: {
    showSponsors: true,
  },
  vd009: {
    showSponsors: true,
  },
  vd010: {
    showSponsors: false,
  },
  vd011: {
    showSponsors: false,
  },
  vd099: {
    showSponsors: false,
  },
};

const vendorCasinoOrderGame = {
  vd001: [1, 5, 6, 4, 7, 3, 2, 8],
  vd002: [1, 5, 7, 2, 6, 3, 4, 8],
  vd003: [1, 3, 5, 7, 4, 6, 2, 8],
  vd004: [1, 5, 7, 2, 6, 3, 4, 8],
  vd005: [1, 5, 7, 2, 6, 3, 4, 8],
  vd006: [1, 5, 7, 2, 6, 3, 4, 8],
  vd007: [1, 5, 7, 2, 6, 3, 4, 8],
  vd008: [1, 5, 7, 2, 6, 3, 4, 8],
  vd009: [1, 3, 5, 7, 4, 6, 2, 8],
  vd010: [1, 3, 5, 7, 4, 6, 2, 8],
  vd011: [1, 5, 7, 2, 6, 3, 4, 8],
  vd099: [1, 5, 7, 2, 6, 3, 4, 8],
};

const vendorChatroomTheme = {
  vd001: 'lightBlue',
  vd002: 'darkBlue',
  vd003: 'darkBlue',
  vd004: 'lightBlue',
  vd005: 'lightBlue',
  vd006: 'darkBlue',
  vd007: 'lightBlue',
  vd008: 'darkBlue',
  vd009: 'lightBlue',
  vd010: 'darkBlue',
  vd011: 'lightBlue',
  vd099: 'lightBlue',
};

const vendorProductsImgSeries = {
  vd001: 'ubsSeries',
  vd002: 'googleSeries',
  vd003: 'googleSeries',
  vd004: 'ubsSeries',
  vd005: 'ubsSeries',
  vd006: 'googleSeries',
  vd007: 'ubsSeries',
  vd008: 'googleSeries',
  vd009: 'ubsSeries',
  vd010: 'googleSeries',
  vd011: 'ubsSeries',
  vd099: 'ubsSeries',
};

const vendorLiveStreaming = {
  vd001: {
    insufficientQualifyMakeDarkBackgroundColor: true,
  },
  vd002: {
    insufficientQualifyMakeDarkBackgroundColor: false,
  },
  vd003: {
    insufficientQualifyMakeDarkBackgroundColor: false,
  },
  vd004: {
    insufficientQualifyMakeDarkBackgroundColor: true,
  },
  vd005: {
    insufficientQualifyMakeDarkBackgroundColor: false,
  },
  vd006: {
    insufficientQualifyMakeDarkBackgroundColor: false,
  },
  vd007: {
    insufficientQualifyMakeDarkBackgroundColor: false,
  },
  vd008: {
    insufficientQualifyMakeDarkBackgroundColor: false,
  },
  vd009: {
    insufficientQualifyMakeDarkBackgroundColor: false,
  },
  vd010: {
    insufficientQualifyMakeDarkBackgroundColor: false,
  },
  vd011: {
    insufficientQualifyMakeDarkBackgroundColor: true,
  },
  vd099: {
    insufficientQualifyMakeDarkBackgroundColor: true,
  },
};

const vendorDepositDetailTheme = {
  vd001: {
    customizeTheme: true,
  },
  vd002: {
    customizeTheme: false,
  },
  vd003: {
    customizeTheme: false,
  },
  vd004: {
    customizeTheme: true,
  },
  vd005: {
    customizeTheme: false,
  },
  vd006: {
    customizeTheme: false,
  },
  vd007: {
    customizeTheme: true,
  },
  vd008: {
    customizeTheme: false,
  },
  vd009: {
    customizeTheme: true,
  },
  vd010: {
    customizeTheme: false,
  },
  vd011: {
    customizeTheme: true,
  },
  vd099: {
    customizeTheme: true,
  },
};
const vendorBankDepositNote = {
  vd001: {
    depositNote: false,
  },
  vd002: {
    depositNote: false,
  },
  vd003: {
    depositNote: false,
  },
  vd004: {
    depositNote: true,
  },
  vd005: {
    depositNote: false,
  },
  vd006: {
    depositNote: false,
  },
  vd007: {
    depositNote: false,
  },
  vd008: {
    depositNote: false,
  },
  vd009: {
    depositNote: false,
  },
  vd010: {
    depositNote: false,
  },
  vd011: {
    depositNote: true,
  },
  vd099: {
    depositNote: true,
  },
};

const vendorHasLargeDeposit = {
  vd001: {
    hasLargeDeposit: false,
  },
  vd002: {
    hasLargeDeposit: true,
  },
  vd003: {
    hasLargeDeposit: true,
  },
  vd004: {
    hasLargeDeposit: true,
  },
  vd005: {
    hasLargeDeposit: true,
  },
  vd006: {
    hasLargeDeposit: true,
  },
  vd007: {
    hasLargeDeposit: true,
  },
  vd008: {
    hasLargeDeposit: true,
  },
  vd009: {
    hasLargeDeposit: true,
  },
  vd010: {
    hasLargeDeposit: true,
  },
  vd011: {
    hasLargeDeposit: true,
  },
  vd099: {
    hasLargeDeposit: true,
  },
};

const vendorDefaultCountryCode = {
  vd001: 84,
  vd002: 86,
  vd003: 86,
  vd004: 86,
  vd005: 86,
  vd006: 86,
  vd007: 86,
  vd008: 86,
  vd009: 86,
  vd010: 86,
  vd011: 86,
  vd099: 86,
};

const isAccessLimitedInUS = {
  vd001: true,
  vd002: false,
  vd003: false,
  vd004: false,
  vd005: false,
  vd006: false,
  vd007: false,
  vd008: false,
  vd009: false,
  vd010: false,
  vd011: false,
  vd099: false,
};

const vendorPrimaryLogo = {
  vd001: {
    hasChineseVersion: false,
    hasLotteryVersion: false,
  },
  vd002: {
    hasChineseVersion: false,
    hasLotteryVersion: false,
  },
  vd003: {
    hasChineseVersion: false,
    hasLotteryVersion: false,
  },
  vd004: {
    hasChineseVersion: false,
    hasLotteryVersion: false,
  },
  vd005: {
    hasChineseVersion: false,
    hasLotteryVersion: false,
  },
  vd006: {
    hasChineseVersion: false,
    hasLotteryVersion: false,
  },
  vd007: {
    hasChineseVersion: true,
    hasLotteryVersion: false,
  },
  vd008: {
    hasChineseVersion: false,
    hasLotteryVersion: false,
  },
  vd009: {
    hasChineseVersion: false,
    hasLotteryVersion: false,
  },
  vd010: {
    hasChineseVersion: false,
    hasLotteryVersion: false,
  },
  vd011: {
    hasChineseVersion: false,
    hasLotteryVersion: true,
  },
  vd099: {
    hasChineseVersion: false,
    hasLotteryVersion: false,
  },
};

export function createEnvConfig(vendor) {
  const env = 'dev';
  const disableAPPDownloadModal = false;
  return {
    env,
    domain: 'http://localhost:3000',
    platformUrl: `https://tiger-api.inno${env}.site/platform`,
    platformWsUrl: `wss://tiger-api.inno${env}.site/platform`,
    sportUrl: `https://tiger-api.inno${env}.site/product`,
    sportWsUrl: `wss://tiger-api.inno${env}.site/product`,
    chatRoomUrl: 'http://localhost:3002',
    agentWapUrl: `https://en-${vendor}-tiger-agent.inno${env}.site/mobile`,
    fluidSourceUrl: 'https://fluid.dev.mppwr.com',
    feSourceUrl: `https://fe-source.${env}.mppwr.com`,
    beSourceUrl: 'https://be-source.dev.mppwr.com',
    thirdpartyUrl: `http://return-${env}.fumengwangluokeji.com`,
    sportStreamUrl: `https://en-all-sports-stream.${env}.articqq123.blog`,
    relayUrl: `https://en-${vendor}-tiger-relay.inno${env}.site`,
    h5InfoUrl: 'https://statsfn.dev.mppwr.com/client',
    lotteryUrl: 'http://localhost:8000',
    i18nUrl: 'https://i18n-querier-dev.service-station-uat.link',
    imUrl: `https://tiger-api.inno${env}.site/im`,
    imWsUrl: `wss://tiger-api.inno${env}.site/im`,
    // vendor setting
    vendor,
    licenseName: 'Antillephone',
    licenseImageUrl: '',
    /**比分網關閉*/
    disableScore: false,
    /**分享賺錢開關*/
    enableShareMoneyStickyButton: true,
    /**關閉WAP APP下載提示彈窗*/
    disableAPPDownloadModal: disableAPPDownloadModal,
    /**隱藏WAP APP下載提示彈窗前往網頁按鈕*/
    hideAPPDownloadModalWebBtn: false,
    promotionVideo: true,
    /**關閉體育聊天室*/
    disableChatRoom: false,
    chatroomTabSpecialTranslate: true,
    /**是否開啟Customer to Customer轉帳功能*/
    c2cMode: false,
    /**關閉IM專家功能*/
    disableIMExpert: false,
    /**是否打開聊天室翻譯功能*/
    enableChatroomTranslate: false,
    /**在開啟聊天室翻譯功能時，預設是否開啟翻譯*/
    enableChatroomDefaultTranslate: false,
    sportsMainBlockLeagueTtl: '',
    eventSwitchTtlSec: 120,
    primaryColor: vendorColor[vendor].primary,
    secondaryColor: vendorColor[vendor].secondary,
    primaryHoverColor: vendorColor[vendor].primaryHover,
    buttonBackgroundActiveColor: vendorColor[vendor].buttonBackgroundActive,
    buttonRippleBlockColor: vendorColor[vendor].buttonRippleBlock,
    /** 存款回饋提示標籤漸層起始色 */
    rebateLabelBackgroundFromColor: vendorColor[vendor].rebateLabelBackgroundFrom,
    /** 存款回饋提示標籤漸層終止色 */
    rebateLabelBackgroundToColor: vendorColor[vendor].rebateLabelBackgroundTo,
    /** 存款回饋提示三角標籤顏色 */
    rebateTriangleBackgroundColor: vendorColor[vendor].rebateTriangleBackground,
    /**Footer*/
    footer: vendorFooter[vendor],
    sportMobileMenuIconList: sportMobileMenuIconList[vendor],
    socialMedia: socialMedia[vendor],
    ipInfo,
    /**各業主贊助 */
    sponsor: vendorSponsorHome[vendor],
    sponsorInner: vendorSponsorTeam[vendor],
    statistics: {
      isExcludeNonProxy: excludedProxyDomain.includes(window.location.hostname),
      gaMeasurementIdList: ['UA-210995167-1'],
    },
    sportCardSort: vendorSport[vendor].cardSort,
    serviceFeePercent: vendorServiceFeePercent[vendor],
    vendorValidBet: vendorValidBet[vendor],
    vendorMinimumMembers: vendorMinimumMembers[vendor],
    enableCasinoCarousel: vendorCasino[vendor].enableCasinoCarousel,
    /**各業主贊助商圖片路徑 */
    sponsorImagesArray: vendorCasino[vendor].sponsorImagesArray,
    sponsorPathArray: vendorCasino[vendor].sponsorPathArray,
    hideVndAndIdr: vendorAuth[vendor].hideVndAndIdr,
    hasAgreementPage: vendorAuth[vendor].hasAgreementPage,
    enableUniquePage: sponsorPageSetting[vendor].enableUniquePage,
    hasCrossBlockAdSponsor: sponsorPageSetting[vendor].hasCrossBlockAdSponsor,
    casinoShowTitleIcon: vendorCasinoShowTitleIcon[vendor].casinoShowTitleIcon,
    casinoOrderGame: vendorCasinoOrderGame[vendor],
    casinoOrderDetailGame: vendorCasinoOrderDetailGame[vendor],
    vendorChatroomTheme: vendorChatroomTheme[vendor],
    detectLimitedAccess: ['vd001'].includes(vendor),
    enableTutorial: vendor !== 'vd003',
    thirdPartyRecordOrder: ['vd001'].includes(vendor) ? [0, 1, 3, 5, 4, 2, 6] : undefined,
    sportLiveStreamingInsufficientQualifyDarkBackgroundColor:
      vendorLiveStreaming[vendor].insufficientQualifyMakeDarkBackgroundColor,
    commissionDetailI18n: franchisePageSetting[vendor].commissionDetailI18n,
    vendorProductsImgSeries: vendorProductsImgSeries[vendor],
    casioShowSponsors: vendorCasinoShowSponsor[vendor].showSponsors,
    depositDetailPageTheme: vendorDepositDetailTheme[vendor].customizeTheme,
    vendorBankDepositNote: vendorBankDepositNote[vendor].depositNote,
    vendorHasLargeDeposit: vendorHasLargeDeposit[vendor].hasLargeDeposit,
    defaultCountryCode: vendorDefaultCountryCode[vendor],
    /** 業主優惠券 */
    sportCartCouponIsSpecial: ['vd002', 'vd003'].includes(vendor),
    isAccessLimitedInUS: isAccessLimitedInUS[vendor],
    hasChinesePrimaryLogo: vendorPrimaryLogo[vendor].hasChineseVersion,
    hasLotteryPrimaryLogo: vendorPrimaryLogo[vendor].hasLotteryVersion,
  };
}
