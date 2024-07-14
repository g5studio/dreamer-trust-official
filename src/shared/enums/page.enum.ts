export enum Page {
  GuidelineOverview = 0,
  GuidelineStyleUsage,
  GuidelineOverlayUsage,
  GuidelineLogUsage,
  GuidelineSportWSUsage,
  GuidelinePlatformWSUsage,
  GuidelineIndexedDBUsage,
  GuidelineI18nUsage,
  GuidelineTimeHelperUsage,
  /**
   * 登入
   */
  Login,
  /**
   * 註冊
   */
  Registered,
  /**
   * 首頁
   */
  Main,
  /**
   * 會員中心
   */
  MemberCenter,
  /**
   * VIP特權頁
   */
  VIPCenter,
  /**
   * 存款入口頁
   */
  Deposit,
  /**
   * 存款 - 進入流程前的驗證
   */
  DepositEntryValidatePage,
  /**
   * 存款c2c入口
   */
  DepositSecuredBankCard,
  /**
   * 存款第三方入口
   */
  DepositThirdParty,
  /**
   * 存款 - Result
   */
  DepositThirdPartyResult,
  /**
   * 存款 - QRCode Scan
   */
  DepositThirdPartyQRCodeScan,
  /**
   * 三方支付 - 聊天客服
   */
  DepositThirdPartyChatRoom,

  /**
   * 存款 - 銀行卡
   */
  DepositBankCard,
  /**
   * 存款 - 行動支付
   */
  DepositMobilePay,
  /**
   * 存款 - 貴賓廳
   */
  DepositVIPRoom,
  /**
   * 存款 - 加密貨幣
   */
  DepositCrypto,
  /**
   * 存款 - 第三方QRCode Scan
   */
  DepositThirdPartyScanWithOtherPayment,
  /**
   * 存款 - 設定手機號
   */
  DepositSetupSms,
  /**
   * 提款入口頁
   */
  Withdrawal,
  /**
   * 提現 - 完善訊息
   */
  WithdrawalCompleteInfo,
  /**
   * 提現 - 進入流程前的驗證
   */
  WithdrawalEntryValidatePage,
  /**
   * 卡片管理頁面(包含錢包等支付方式)
   */
  PaymentManagement,
  /**
   * 銀行卡片管理頁面
   */
  BankCardManagement,
  /**
   * Wallet管理頁面
   */
  WalletManagement,
  /**
   * Pix管理頁面
   */
  PixManagement,
  /**
   * 卡片管理-新增銀行卡
   */
  AddBankCard,
  /**
   * 卡片管理-新增Pix
   */
  AddPix,
  /**
   * 卡片管理-新增Wallet
   */
  AddWallet,
  /**
   * 卡片管理-修改銀行卡
   */
  EditBankCard,
  /**
   * 卡片管理-修改Pix
   */
  EditPix,
  /**
   * 卡片管理-修改Wallet
   */
  EditWallet,
  /**
   * 忘記密碼頁
   */
  ForgetPassword,
  /**
   * 投注紀錄頁
   */
  BetRecord,
  /**
   * 指定遊戲投注紀錄頁
   */
  ProviderBetRecord,
  /**
   * 玩法教程
   */
  SportGameTutorial,
  /**
   * 娛樂城
   */
  Casino,
  /**
   * 體育滾球頁
   */
  SportInplay,
  /**
   * 體育即將頁
   */
  SportIncoming,
  /**
   * 體育早盤頁
   */
  SportEarly,
  /**
   * 體育早盤簡易盤頁
   */
  SportEarlySimple,
  /**
   * 體育串場頁
   */
  SportParlay,
  /**
   * 體育冠軍頁
   */
  SportOutright,
  /**
   * 總盤
   */
  SportExhaustive,
  /*
   * 我的 - 個人資料
   */
  MineInfo,
  /**
   * 我的 - 個人信息
   */
  MineInfoEdit,
  /**
   * 我的 - 個人信息 - 修改頭像
   */
  MineInfoEditAvatar,
  /**
   * 我的 - 個人信息 - 修改姓名
   */
  MineInfoEditName,
  /**
   * 我的 - 個人信息 - 修改暱稱
   */
  MineInfoEditNickname,
  /**
   * 我的 - 個人信息 - 修改性別
   */
  MineInfoEditGender,
  /**
   * 我的 - 個人信息 - 修改生日
   */
  MineInfoEditBirthday,
  /**
   * 我的 - 個人信息 - 修改身份證號碼
   */
  MineInfoEditIdentityNumber,
  /**
   * 我的 - 個人信息 - 修改護照號碼
   */
  MineInfoEditPassportNumber,
  /**
   * 我的 - 個人信息 - 修改駕照號碼
   */
  MineInfoEditDriverLicenseNumber,
  /**
   * 我的 - 完善信息
   */
  MineInfoFinishUserInfo,
  /**
   * 我的 - 個人信息 - 修改登入密碼
   */
  MineInfoEditPassword,
  /**
   * 我的 - 個人信息 - 設置提款密碼
   */
  MineInfoEditWithdrawalPassword,
  /**
   * 我的 - 個人信息 - 設置密保手機號
   */
  MineInfoEditPhoneNumber,
  /**
   * 我的 - 個人信息 - 設置第三方帳號管理
   */
  MineInfoEditThirdPartyAccount,
  /**
   * 我的 - 個人信息 - 設置郵箱地址
   */
  MineInfoEditEmail,
  /**
   * 我的 - 個人信息 - 設置居住國家
   */
  MineInfoEditCountryOfResidence,
  /**
   * 我的 - 個人信息 - 設置居住地址
   */
  MineInfoEditResidentialAddress,
  /**
   * 收藏頁
   * FavoriteAll->當路由未給予category parameter 要自動跳轉/:all
   */
  FavoriteGame,
  /**
   * 收藏頁(冠軍)
   */
  FavoriteOutRightGame,
  /**
   * 賽果搜尋頁
   */
  Search,
  /**
   * 賽果頁
   */
  GameResult,
  /**
   * 贊助頁
   */
  Sponsor,
  /**
   * 贊助內頁
   */
  Sponsorship,
  /**
   * 聯盟賽事列表 -wap
   */
  GameResultByTournament,
  /**
   * 賽果詳情頁
   */
  GameResultByMatch,
  /**
   * 7x24客服
   */
  CustomerService,
  /**
   * 卡券中心
   */
  CouponCenter,
  CouponCenterDetail,
  /**
   * 規則與條款
   */
  RulesTerms,
  /**
   * 時區設定
   */
  TimezoneSetting,
  /**
   * 設定頁
   */
  Setting,
  /**
   *  Timeout頁
   */
  Timeout,
  /**
   * 語系設定頁
   */
  LanguageSetting,
  /**
   * 第三方Iframe頁
   */
  ThirdpartyGame,
  /**
   * 玩法規則
   */
  GamePlan,
  /**
   * 提款內頁
   */
  WithdrawalDetail,
  /**
   * C2C提款
   */
  WithdrawalSecuredBankCard,
  /**
   * C2C提款 審核step
   */
  WithdrawalSecuredBankCardAuditStep,
  /**
   * 交易記錄
   */
  TransactionRecord,
  /**
   * 賽事設置
   */
  GameSetting,
  /**
   * 賠率設置
   */
  GameBetSetting,
  /**
  /**
   * 頁面設計
   */
  GameLayoutPatternSetting,
  /**
   * 商務合作
   * */
  Franchise,
  /**
   * 捕魚王
   */
  Fishing,
  /**
   * 老虎機
   */
  SlotGame,
  /*
   * 體育首頁
   */
  SportMain,
  /*
   * 錢包
   */
  MyWallet,
  /**
   * 紅利兌換
   */
  BonusExchange,
  /**
   * Crypto - 地址管理
   */
  CryptoPaymentManagement,
  /**
   * 地址管理頁-新增地址
   */
  AddCryptoAddress,
  /**
   * 針對 /p & /reg & ?p= 設定邀請碼
   */
  SetPromotionCode,
  /**
   * APP 下載頁
   */
  DownloadApp,
  /**
   * IM廣場
   */
  ImSquare,
  /**
   * 優惠中心
   */
  Promotion,
  /**
   * 優惠詳情
   */
  PromotionDetail,
  /**
   * 優惠活動 - 條款與細則
   */
  PromotionRulesTerms,
  /**
   * 關於我們
   */
  AboutUs,
  /**
   * 訊息中心
   */
  MessageCenter,
  /**
   * 訊息詳情
   */
  MessageDetail,
  /**
   * 所有主播
   */
  AnchorAll,
  /**
   * 所有專家
   */
  ExpertAll,
  /**
   * 專家詳情
   */
  ExpertDetail,
  /**
   * 預測詳情
   */
  PlanDetail,
  /**
   * 專家首頁
   */
  ExpertHome,
  /**
   * 分享賺錢
   */
  EarnMoney,
  /**
   * 會員列表
   */
  MemberList,
  /**
   * 佣金明細
   */
  CommissionDetail,
  /**
   * 代理註冊
   */
  FranchiseRegister,
  /**
   * 維護
   */
  Maintenance,
  /**
   * 彩票
   */
  LotteryTicket,
  /**
   * 首頁(精選)
   */
  EuroMain,
  /**
   * 賽事
   */
  EuroMatch,
  /**
   * 冠軍
   */
  EuroOutright,
  /**
   * 晉級表
   */
  EuroEliminate,
  /**
   * 積分榜
   */
  EuroScore,
  /**
   * 國家專頁
   */
  EuroCountry,
}

export enum MenuOrder {
  EuroCup = 0,
  SportMain = 1,
  SportInplay,
  SportIncoming,
  SportToday,
  SportEarly,
  SportParlay,
  SportOutright,
  ImSquare,
  Casino,
  BetRecord,
  Promotion,
  Sponsor,
  DownloadApp,
  MemberCenter,
}
