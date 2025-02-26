export enum UxEvent {
  LoadApp = 'open_app',
  Click = 'user_click',
  Input = 'user_input',
  Scroll = 'user_scroll',
  Submit = 'submit',
  Register = 'register',
  Verification = 'verification',
}

export enum UxEventLabel {
  HeaderLogo = 'header-logo',
  HeaderDeposit = 'header-deposit',
  HeaderWithdrawal = 'header-withdrawal',
  HeaderAvatar = 'header-avatar',
  HeaderNavigation = 'header-navigation',
  SideMenuItem = 'side-menu-item',
  SideMenuExpandBtn = 'side-menu-expand-btn',
  MobileTabNavigation = 'mobile-tab-navigation',
  FavoriteBtn = 'favorite-btn',
  SportNavigatorItem = 'sport-navigator-item',
  PopularCardOddsBtn = 'popular-card-odds-btn',
  PopularCardContainer = 'popular-card-container',
  SimpleHandicapOddsBtn = 'simple-handicap-odds-btn',
  SportCartFloatBtn = 'sport-cart-float-btn',
  SportsTopCategory = 'sports-top-category',
  InterGameSortPopover = 'inter-game-sort-popover',
  SportsMainSessionBlockLeagueItem = 'sports-main-session-block-league-item',
  SportsSessionHeader = 'sports-session-header',
  SportsMainSportFilterBar = 'sports-main-sport-filter-bar',
  SimpleMatchMode = 'simple-match-mode',
  BeginnerSwitch = 'beginner-switch',
  SimpleHandicapLayout = 'simple-handicap-layout',
  PartnershipBanner = 'partnership-banner',
  LoginBtn = 'login-btn',
  RegisterBtn = 'register-btn',
  SearchBar = 'search-bar',
  HeaderUserBalance = 'header-user-balance',
  SideBarUserBalance = 'side-bar-user-balance',
  MineUserBalance = 'mine-user-balance',
  SportCartSubmitBetBtn = 'sport-cart-submit-bet-btn',
  ExhaustiveOddsBtn = 'exhaustive-odds-btn',
  ExhaustiveCorrectScoreSelect = 'exhaustive-correct-score-select',
  FootballCorrectScoreSlider = 'football-correct-score-slider',
  // Register
  RegisterStart = 'register-start',
  RegisterFillUserName = 'register-fill-user-name',
  RegisterFillPassword = 'register-fill-password',
  RegisterFillRepeatPassword = 'register-fill-repeat-password',
  RegisterSelectCountry = 'register-select-country',
  RegisterSelectCurrency = 'register-select-currency',
  RegisterSelectLanguage = 'register-select-language',
  RegisterSelectAcceptAgreement = 'register-select-accept-agreement',
  RegisterFormSubmit = 'register-form-submit',
  RegisterPuzzleSubmit = 'register-puzzle-submit',
  // Verification
  VerificationStart = 'verification-start',
  VerificationSelectCountryCode = 'verification-select-country-code',
  VerificationFillPhone = 'verification-fill-phone',
  VerificationFillEmail = 'verification-fill-email',
  VerificationFillOtp = 'verification-fill-otp',
  VerificationSendVerifyCode = 'verification-send-verify-code',
  VerificationSendVerifyCodePuzzleSubmit = 'verification-send-verify-code-puzzle-submit',
  VerificationSendSmsSuccess = 'verification-send-verify-code-success',
  VerificationSendSmsFail = 'verification-send-verify-code-fail',
  VerificationVerifyCodeSubmit = 'verification-verify-code-submit',
  VerificationVerifyCodePuzzleSubmit = 'verification-verify-code-puzzle-submit',
  VerificationFormSummit = 'verification-form-submit',
  VerificationPuzzleSubmit = 'verification-pizzle-submit',
  VerificationSuccess = 'verification-success',
}

export enum UserBehaviorSportSideMenuState {
  Expanded = 'expanded',
  Collapsed = 'collapsed',
}

export enum UserBehaviorSportCartSubmitResult {
  Success = 'success',
  OrderHasError = 'order-has-error',
  OddsChanged = 'odds-changed',
  RiskUser = 'risk-user',
  InsufficientBalance = 'insufficient-balance',
  ApiError = 'api-error',
}

export enum UserBehaviorCheckBoxStatus {
  Check = 'check',
  Uncheck = 'uncheck',
}
