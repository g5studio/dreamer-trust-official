export enum Environment {
  Dev = 'development',
  Prod = 'production',
}

export enum ErrorType {
  Network = 'Network',
  Navigate = 'Navigate',
  System = 'System',
  Server = 'Server',
  IndexedDB = 'IndexedDB',
}

export enum Breakpoint {
  Middle = 1,
  Large,
  XLarge,
}

export enum Size {
  XS = 0,
  Small,
  Middle,
  Large,
  XL,
  XXL,
  XXXL,
}

export enum OverlayType {
  Modal = 1,
  Popup,
  Custom,
}

export enum CustomEventType {
  RouterChanged = 'router-change',
  ScrollTo = 'scroll-to',
  SportCart = 'sport-cart',
}

export enum LocalStorageItem {
  /**
   * @example zh-hk
   */
  Language = 'locale',
  /**
   * Device info
   */
  DeviceInfo = 'device-info',
  /**
   * 播放器聲音
   */
  VideoMuted = 'video-muted',
  /**
   * Visitor id
   */
  VisitorId = 'visitorId',
  /**
   * 系統主題
   */
  SystemTheme = 'system-theme',
}

export enum SessionStorageItem {
  UxEventLogFirstClick = 'ux-event-log-first-click',
}

export enum HttpClientHeaderItem {
  Authorization = 'authorization',
  Language = 'accept-language',
  Timezone = 'time-zone',
  Currency = 'currency',
  IM_Vendor = 'pvd',
  DeviceMode = 'deviceMode',
  PhoneBrand = 'phoneBrand',
  Browser = 'browser',
  Screen = 'screen',
  Cks = 'cks',
  X_Uuid = 'x-uuid',
  Version = 'version',
  isPC = 'pc',
}

export enum IndexedDatabaseTable {
  Demo = 'demo',
  Timezone = 'timezone',
}

export enum FiatCurrency {
  CNY = 'CNY',
  nIDR = 'nIDR',
  IDR = 'IDR',
  MYR = 'MYR',
  nVND = 'nVND',
  VND = 'VND',
  USD = 'USD',
  HKD = 'HKD',
  KRW = 'KRW',
  INR = 'INR',
  THB = 'THB',
  JPY = 'JPY',
  BRL = 'BRL',
}

export enum Cryptocurrency {
  BTC = 'BTC',
  ETH = 'ETH',
  LTC = 'LTC',
  USDT_OMNI = 'USDT_OMNI',
  USDT_ERC20 = 'USDT_ERC20',
  USDT_TRC20 = 'USDT_TRC20',
  DASH = 'DASH',
  BCH = 'BCH',
  ETC = 'ETC',
  DOGE = 'DOGE',
  USDC_ERC20 = 'USDC_ERC20',
  UNI_ERC20 = 'UNI_ERC20',
  AAVE_ERC20 = 'AAVE_ERC20',
  DAI_ERC20 = 'DAI_ERC20',
  WBTC_ERC20 = 'WBTC_ERC20',
  TRX = 'TRX',
}

export type Currency = FiatCurrency | Cryptocurrency;

export type CurrencyTypeWithAll = Currency | 'ALL';

export enum ProtocolType {
  ERC20 = 'ERC20',
  OMNI = 'OMNI',
  TRC20 = 'TRC20',
  BEP20 = 'BEP20',
}

/**
 * Locale in _ format
 */
export enum Locale {
  en_US = 'en_US',
  id_ID = 'id_ID',
  ms_MY = 'ms_MY',
  vi_VN = 'vi_VN',
  zh_CN = 'zh_CN',
  zh_HK = 'zh_HK',
  ja_JP = 'ja_JP',
  ko_KR = 'ko_KR',
  th_TH = 'th_TH',
  hi_IN = 'hi_IN',
  pt_PT = 'pt_PT',
  es_ES = 'es_ES',
}

/**
 * Locale in - format
 */
export enum LocaleDash {
  en_US = 'en-us',
  /**
   * 印尼文
   */
  id_ID = 'id-id',
  /**
   * 馬來西亞
   */
  ms_MY = 'ms-my',
  /**
   * 越南
   */
  vi_VN = 'vi-vn',
  zh_CN = 'zh-cn',
  zh_HK = 'zh-hk',
  ja_JP = 'ja-jp',
  ko_KR = 'ko-kr',
  /**
   * 泰文
   */
  th_TH = 'th-th',
  /**
   * 印度文
   */
  hi_IN = 'hi-in',
  /**
   * 葡萄牙文
   */
  pt_PT = 'pt-pt',
  /**
   * 西文
   */
  es_ES = 'es-es',
}

export enum Language {
  en_US = 'en',
  zh_HK = 'zh_Hant',
  zh_CN = 'zh_Hans',
}

/**
 * 球種代號, 1 for 足球, 2 for 籃球, 3 for 網球, 4 for 棒球
 */
export enum Sid {
  Football = 1,
  Basketball,
  Tennis,
  Baseball,
}

export enum SocialMediaType {
  Twitter = 'twitter',
  Instagram = 'instagram',
  Tiktok = 'tiktok',
  Youtube = 'youtube',
  Facebook = 'facebook',
}

/**
 * Our error has two types: network error and server error
 * When dealing with error, we both has three ways: skip, general, and specific
 */
export enum ErrorHandleType {
  /**
   * Handle both error
   */
  All = 'all',
  /**
   * Skip both error
   */
  None = 'none',
  /**
   * Handle network error
   */
  Network = 'network',
  /**
   * Handle server error
   */
  Server = 'server',
}

export enum RoundMethod {
  Up = 0,
  Down = 1,
  Ceil = 2,
  Floor = 3,
  HalfUp = 4,
  HalfDown = 5,
  HalfEven = 6,
  HalfCeil = 7,
  HalfFloor = 8,
}

/**
 * must keep to same key to prevent old user see the tutorial after revamp
 */
export enum PlatformTutorialType {
  WithdrawalTimeRange = 'withdrawalTimeRange',
  WithdrawalAuditing = 'withdrawalAuditing',
  WithdrawalReward = 'withdrawalReward',
  DepositAmountRange = 'depositAmountRange',
  DepositCertUpload = 'depositCertUpload',
  TransactionWithdrawal = 'transactionWithdrawal',
  TransactionDeposit = 'transactionDeposit',
  SportInterNoviceNonHome = 'sportInterNoviceNonHome',
  SportInterNoviceHome = 'sportInterNoviceHome',
  SportAsiaNoviceNonHome = 'sportAsiaNoviceNonHome',
  SportAsiaNoviceHome = 'sportAsiaNoviceHome',
}

export enum Direction {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export enum TabNavigationType {
  Home = 'home',
  Game = 'game',
  Soccer = 'soccer',
  Record = 'record',
  Mine = 'mine',
  ImSquare = 'imSquare',
  ExpertHome = 'expertHome',
}

export enum Scenario {
  Register,
  Login,
  ForgetPW,
  Withdrawal,
  Deposit,
  DifferentLocationLogin,
}

export enum SponsorPageType {
  Home = 'sponsorHome',
  TopAdSponsorship = 'topAdSponsorship',
  Sponsorship = 'sponsorship',
  Partnership = 'partnership',
  Monaco = 'monaco',
  Wolves = 'wolves',
  Wolfsburg = 'wolfsburg',
  Roma = 'roma',
  Athletic = 'athletic',
  Sevilla = 'sevilla',
  Leicester = 'leicester',
  AllStar = 'allStar',
  Endorsement = 'endorsement',
  Juventus = 'juventus',
  Torino = 'torino',
  RealMadrid = 'realMadrid',
  Bochum = 'bochum',
  Mainz = 'mainz',
  WerderBremen = 'werderBremen',
  Monchengladbach = 'monchengladbach',
}

export enum JigSawPuzzleStatus {
  LoadingImage = 0,
  Ready,
  Match,
  Error,
  PossibleRobotDetected,
}

export enum HeaderMenu {
  Sport = 'sport',
  Casino = 'casino',
  IM = 'im',
}

/**
 * @description 當前系統風格
 */
export enum SystemTheme {
  /** 明亮風格 */
  Light = 'light',
  /** 夜間模式 */
  Dark = 'dark',
  /**
   * 依照瀏覽器當前明暗風格
   */
  Auto = 'follow-browser-dark-mode',
}
