// reference: https://innotech.atlassian.net/wiki/spaces/BAC/pages/edit-v2/1947336726

import { Sid } from './common.enum';

export enum SysMaintenanceCode {
  /** 全站维护 */
  All = 1,
  /** 代理維護模式 */
  Agent,
  /** 体育投注维护 - 桌面 */
  SportDesktop,
  /** 体育投注维护 - 手机板 */
  SportMobile,
  /** AG 真人荷官维护 - 桌面板 */
  AGDealerDesktop = 7,
  /** AG 真人荷官维护 - 手机板 */
  AGDealerMobile,
  /** AG捕鱼王 - 桌面板 */
  AGFishDesktop,
  /** AG捕鱼王 - 手机板 */
  AGFishMobile,
  /** MG娱乐场维护 - 桌面板 */
  MGDesktop = 13,
  /** MG娱乐场维护 - 手机板 */
  MGMobile,
  /** DT电子维护 - 桌面板 */
  DTDesktop,
  /** DT电子维护 -  手机板 */
  DTMobile,
  /** Loto彩票维护 - 桌面板 */
  LotoDesktop,
  /** Loto彩票维护 - 手机板 */
  LotoMobile,
  /** 推广赚钱维护 - 手机板 */
  PromotionMobile,
  /** BG真人維護 - 桌面板 */
  BGDesktop = 25,
  /** BG真人維護 - 手机板 */
  BGMobile,
  /** NN棋牌維護 - 桌面板 */
  NNDesktop,
  /** NN棋牌維護 - 手机板 */
  NNMobile,
  /** KY棋牌維護 - 桌面板 */
  KYDesktop,
  /** KY棋牌維護 - 手机板 */
  KYMobile,
  /** 全站维护 - 手机板 */
  AllMobile = 35,
  /** ezugi真人維護 - 桌面板 */
  EZUGIDesktop = 38,
  /** ezugi真人維護 - 手机板 */
  EZUGIMobile,
  /** AGSlot維護-桌面版 */
  AGSlotDesktop,
  /** AGSlot維護-手机版 */
  AGSlotMobile,
  /** CQ9电子维护 - 桌面板 */
  CQ9Desktop = 45,
  /** CQ9电子维护 - 手机板 */
  CQ9Mobile,
  /** PG电子维护 - 桌面板 */
  PGDestop,
  /** PG电子维护 - 手机板 */
  PGMobile,
  /** PT电子维护 - 桌面板 */
  PTDesktop,
  /** PT电子维护 - 手机板 */
  PTMobile,
  /** JDB电子维护 - 桌面板 */
  JDBElectronicDesktop,
  /** JDB电子维护 - 手机板 */
  JDBElectronicMobile,
  /** XBB电子维护 - 桌面板 */
  XBBElectronicDesktop,
  /** XBB电子维护 - 手机板 */
  XBBElectronicMobile,
  /** evo真人維護 - 桌面板 */
  EVODesktop,
  /** evo真人維護 - 手机板 */
  EVOMobile,
  /** PP电子維護 - 桌面板 */
  PPElectronicDesktop,
  /** PP电子維護 - 手机板 */
  PPElectronicMobile,
  /** ks捕魚維護 - 桌面板 */
  KSFishDesktop,
  /** ks捕魚維護 - 手机板 */
  KSFishMobile,
  /** BS电子維護 - 桌面板 */
  BSElectronicDesktop,
  /** BS电子維護 - 手机板 */
  BSElectronicMobile,
  /** JDB捕魚維護 - 桌面板 */
  JDBFishDesktop,
  /** JDB捕魚維護 - 手机板 */
  JDBFishMobile,
  /** V8棋牌維護 - 桌面板 */
  V8Desktop,
  /** V8棋牌維護 - 手机板 */
  V8Mobile,
  /** RCB賽馬維護 - 桌面板 */
  RCBDesktop,
  /** RCB賽馬維護 - 手机板 */
  RCBMobile,
  /** AE真人維護 - 桌面板 */
  AEDesktop,
  /** AE真人維護 - 手机板 */
  AEMobile,
  /** Ly棋牌維護 - 桌面板 */
  LYDesktop,
  /** Ly棋牌維護 - 手机板 */
  LYMobile,
  /** bbin真人維護 - 桌面板 */
  BBINDesktop,
  /** bbin真人維護 - 手机板 */
  BBINMobile,
  /** quickSpin 老虎機維護 - 桌面板 */
  QuickSpinDesktop,
  /** quickSpin 老虎機維護 - 手机板 */
  QuickSpinMobile,
  /** ob 真人維護 - 桌面板 */
  OBDesktop,
  /** ob 真人維護 - 手机板 */
  OBMobile,
  /** TF 電競維護 - 桌面板 */
  TFDesktop = 81,
  /** TF 電競維護 - 手机板 */
  TFMobile,
  /** DB 電競維護 - 桌面板 */
  DBDesktop,
  /** DB 電競維護 - 手机板 */
  DBMobile,
  /** MGPlus維護-桌面版 */
  MGPlusSlotDesktop,
  /** MGPlus維護-手机版 */
  MGPlusSlotMobile,
}

/**
 * 進入第三方遊戲傳的代碼
 * @external https://innotech.atlassian.net/wiki/spaces/BAC/pages/1947336726#%E9%80%B2%E5%85%A5%E7%AC%AC%E4%B8%89%E6%96%B9%E9%81%8A%E6%88%B2%E5%82%B3%E7%9A%84%E4%BB%A3%E7%A2%BC
 */
export enum GameCodeType {
  AGLive = '2',
  AGFishing = '6',
  JDBFishing = '24',
  JDBFishing_GAME_1 = '7_7001',
  JDBFishing_GAME_2 = '7_7002',
  JDBFishing_GAME_3 = '7_7003',
  JDBFishing_GAME_4 = '7_7004',
  JDBFishing_GAME_5 = '7_7005',
  JDBFishing_GAME_6 = '7_7006',
  JDBFishing_GAME_7 = '7_7007',
}

/**
 * 三方遊戲類別代碼
 * @external https://innotech.atlassian.net/wiki/spaces/BAC/pages/1947336726#%E9%81%8A%E6%88%B2%E9%A1%9E%E5%88%A5%E4%BB%A3%E7%A2%BC
 */
export enum ThirdpartyGameType {
  All = -1,
  Sport = 1,
  /** 彩票 */
  Lottery,
  /** 娛樂城 */
  Casino,
  /** 釣魚王 */
  Fishing,
  /** 真人 */
  Live,
  /** 棋盤 */
  Board,
  ESport,
  Horse,
}

/**
 * 三方遊戲類型代號
 * @external https://innotech.atlassian.net/wiki/spaces/BAC/pages/1947336726#Ref-1.-%E9%81%8A%E6%88%B2%E9%A1%9E%E5%9E%8B%E4%BB%A3%E8%99%9F-(tiger-common-ThirdpartyProviderEnum)
 */
export enum ThirdpartyProvider {
  Rebate = -2,
  All,
  /** 熱門遊戲 */
  HotGame,
  Sport = 1,
  MNLLottery, // deprecated
  DT,
  MG,
  AGFishing,
  AGLive,
  INNOLottery,
  BGLive,
  NNBoard, // deprecated
  KYBoard,
  AGSlot,
  AviaEGame = 13, // deprecated
  KSFishing,
  CQ9Slot,
  PGSlot,
  PTSlot,
  JDBSlot,
  EzugiLive,
  XBBLive, // deprecated
  EVOLive,
  PPSlot,
  BSSlot,
  JDBFishing,
  V8Board,
  RCBHorse,
  DGTSport, // deprecated
  LYBoard,
  AELive,
  BBINLive,
  /** 老虎機 */
  QUICK_SPIN_SLOT,
  DBLive, // 歷史規則 OB -> PM -> DB
  WMLive, // deprecated
  TFESport,
  DBESport,
  MGPlus,
}

/**
 * 三方遊戲公司代碼
 * @external https://innotech.atlassian.net/wiki/spaces/BAC/pages/1947336726#%E7%AC%AC%E4%B8%89%E6%96%B9%E9%81%8A%E6%88%B2-provider-code
 */
export enum ThirdpartyProviderName {
  All = -1,
  Sport = 1,
  Lottery,
  DT,
  MG,
  AG,
  BG,
  KY = 8,
  AVIA,
  PT,
  CQ9,
  PG,
  JDB,
  KS,
  EZ,
  BBIN = 17,
  EVO,
  PP,
  BS,
  V8,
  RCB,
  LY = 24,
  AE,
  QUICKSPIN,
  PM,
  WM,
  TF,
}

/**
 * 三方錢包代碼
 *
 */
export enum ThirdpartyWallet {
  /**
   * inno錢包
   */
  Inno = 1,
  /**
   * AG 真人/捕魚錢包
   */
  AG = 5,
  /**
   * NN 棋牌錢包
   */
  NN = 7,
  /**
   * KY 錢包
   */
  KY = 8,
  /**
   * PT錢包
   */
  PT = 10,
  /**
   * BBIN錢包
   */
  BBIN = 17,
  /**
   * V8 錢包
   */
  V8 = 21,
  /**
   * LY 錢包
   */
  LY = 24,
}

export enum BankcardRemarkStatus {
  /** 關 */
  Off = 0,
  /** 顯示6碼隨機數字 */
  Random6 = 1,
  /** 顯示會員帳號 */
  MemberAccount = 2,
}

export enum BankcardMemoType {
  /** 關閉 */
  Off = 0,
  /** 10位數的UUID */
  Uuid = 1,
  /** 會員帳號 */
  MemberAccount = 2,
}

export enum BankType {
  /** 一般銀行卡 */
  Normal = 1,
  /** 電子錢包 */
  EWallet,
  /** PIX */
  PIX,
}

export enum BankTypeAll {
  /** 全部 */
  All = -1,
}

export type BankTypeWithAll = BankType | BankTypeAll;

export enum WithdrawQueryType {
  /**
   * 一般銀行
   */
  Normal = 1,
  /**
   * 第三方支付
   */
  Thirdparty,
}

/**
 * 賠率設定
 */
export enum NotificationOddsReceiveType {
  /**
   * 自动接收更好的赔率
   */
  Best = 1,
  /**
   * 自动接收任何赔率变动
   */
  Any,
  /**
   * 不接收赔率变动
   */
  None,
}

/**
 * 提示音清單
 */
export enum NotificationSound {
  /**
   * 歡呼聲
   */
  Cheer = 1,
  /**
   * 哨聲
   */
  Whistle,
  /**
   * 門鈴聲
   */
  DoorBell,
  /**
   * 讚嘆聲
   */
  Praise,
  /**
   * 炫耀聲
   */
  ShowOff,
  /**
   * 輕快聲1
   */
  Brisk1,
  /**
   * 輕快聲2
   */
  Brisk2,
  /**
   * 輕快聲3
   */
  Brisk3,
  /**
   * 上升音1
   */
  Rising1,
  /**
   * 上升音2
   */
  Rising2,
  /**
   * 上升音3
   */
  Rising3,
  /**
   * 懷柔聲1
   */
  Soft1,
  /**
   * 懷柔聲2
   */
  Soft2,
  /**
   * 懷柔聲3
   */
  Soft3,
}

/**
 * 推送選項
 */
export enum NotificationPushOption {
  /**
   * 我的收藏
   */
  Favorite = 'favorite',
  /**
   * 我的下注
   */
  Bet = 'bet',
  /**
   * 全部賽事
   */
  Match = 'match',
}

/**
 * 比賽類型
 */
export enum NotificationPushType {
  /**
   * 進球推送
   */
  Goal = 'goal',
  /**
   * 開賽推送
   */
  Kickoff = 'kickoff',
}

export enum CouponType {
  /**
   * 抵用金
   */
  Credit = 1,
  /**
   * 优惠券
   */
  Coupon = 2,
}

/**
 * 投注限額類型
 */
export enum CouponBetLimitType {
  /**
   * 關閉
   */
  Off = 0,
  /**
   * 固定金額
   */
  FixedAmount = 1,
  /**
   * 面額倍率
   */
  AmountMultiple = 2,
  /**
   * 投注比例
   */
  BetRatio = 3,
}

export enum CouponProvider {
  /**
   * 體育
   */
  Sport = 1,
  /**
   * 彩票
   */
  Lottery = 7,
}

export enum CouponChangeType {
  /**
   * 下注使用
   */
  Bet = 4,
  /**
   * 下注取消獲得(餘額異動)
   */
  BetCancel = 5,
  /**
   * 下注恢復扣除(餘額異動)
   */
  BetRecovery = 6,
}

export enum RebateType {
  /**
   * 日返點
   */
  Daily = 0,
  /**
   * 週返點
   */
  Weekly,
  /**
   * 注注返 (GOR-2739 新增 2020/11/19)
   */
  Bet,
}

export enum BetOrderStatus {
  /**
   * 確認
   */
  Confirm = 0,
  /**
   * 贏
   */
  Win,
  /**
   * 輸
   */
  Lose,
  /**
   * 和
   */
  Draw,
  /**
   * 取消
   */
  Cancel,
  /**
   * 危險注單
   */
  Dangerous,
}

export enum SportBetOrderPhase {
  /**
   * 未定義
   */
  Undefined = 0,
  /**
   * 滾球
   */
  Live,
  /**
   * 即將
   */
  Coming,
  /**
   * 今日
   */
  Today,
  /**
   * 早盤
   */
  Early,
}

/**
 * 交易審核狀態
 */
// 0全部(default)、1審核中、2成功、3失敗、4取消
export enum TransactionStatus {
  /**
   * 全部
   */
  All = 0,
  /**
   * 審核中
   */
  Pending,
  /**
   * 成功
   */
  Success,
  /**
   * 失敗
   */
  Fail,
  /**
   * 取消
   */
  Cancel,
}

export enum DepositType {
  /**
   * 銀行卡匯款
   */
  BankTransfer = 1,
  /**
   * 優惠活動
   */
  Promotion,
  /**
   * VIP
   */
  VIP,
  /**
   * 第三方支付
   */
  Thirdparty,
  /**
   * 行動支付掃碼
   */
  MobileQRCode,
  /**
   * 貴賓廳轉帳
   */
  VIPRoomTransfer,
  /**
   * 銀行卡-行動支付
   */
  BankTransferMobilePayment,
  /**
   * 防凍結銀行卡匯款(CTC)
   */
  CTC,
  /**
   * 其它
   */
  Other = 99,
}

export enum DepositTypeInString {
  BankTransfer = '1',
  Promotion = '2',
  VIP = '3',
  Thirdparty = '4',
  MobileQRCode = '5',
  VIPRoomTransfer = '6',
  BankTransferMobilePayment = '7',
  CTC = '8',
  Other = '99',
}

export enum DepositDisplayStatus {
  /**
   * 未锁定
   */
  BeforeLock = 1,
  /**
   * 已锁定
   */
  Lock,
  /**
   * 已确认
   */
  Confirm,
  /**
   * 已拒绝
   */
  Reject,
  /**
   * 会员取消
   */
  UserCancel,
  /**
   * 充值用戶上傳憑證完成
   */
  C2CSubmitted,
}

export enum DepositCardType {
  /**
   * 一般
   */
  Normal = 0,
  /**
   * 錢包
   */
  Wallet,
}

export enum DepositTransferType {
  // other type is dynamic value added to DB, only this one is special
  Others = 4,
}

export enum PaymentMethodsDeviceType {
  other = 0,
  pc = 1,
}

export enum PaymentMethodType {
  /**
   * 線下網銀支付
   */
  OfflineBanking = 1,
  /**
   * 線上支付(三方)
   */
  OnlinePayment,
  /**
   * 虛擬貨幣
   */
  VirtualCurrency,
  /**
   * 線下網銀掃碼
   */
  OfflineBankingQRCode,
  /**
   * VIP Room
   */
  VIPRooms,
}

export enum PaymentDecimalSetting {
  /**
   * 只能整數
   */
  Integer = 0,
  /**
   * 後一位
   */
  FloatOne,
  /**
   * 後兩位
   */
  FloatTwo,
}

export enum ThirdpartyPayRedirectType {
  /**
   * 跳转地址（取pay_url跳转）
   */
  Redirect = 0,
  /**
   * url需要自己生成二维码（取pay_url生成二维码）
   */
  UrlForQRCode = 1,
  /**
   * 二维码图片地址（取pay_url），例如 <img src=’pay_url’ />
   */
  QRCodeImageUrl = 2,
  /**
   * 回傳整個HTML code
   */
  HTMLCode = 3,
}

export enum TransactionType {
  All = 0,
  Withdraw,
  Deposit,
}

export enum WithdrawType {
  All = -1,
  /**
   * 一般銀行卡
   */
  Normal = 1,
  /**
   * 第三方支付
   */
  Thirdparty,
}

/**
 * 轉帳類型(1一般處理, 2人工處理, 3返點獎勵取消, 4救援金取消, 5進球取消)
 */
export enum TransferType {
  /**
   * 一般處理
   */
  Normal = 1,
  /**
   * 人工處理
   */
  Manual,
  /**
   * 返點獎勵取消
   */
  RebateRewardCancel,
  /**
   * 救援金取消
   */
  RescueFundCancel,
  /**
   * 進球取消
   */
  GoalCancel,
}

export enum WithdrawDisplayStatus {
  /**
   * 提款审核 - 未确认, 出款审核 - 退回→ 提款审核 - 未确认
   */
  Unconfirmed = 1,
  /**
   * 未锁定
   */
  BeforeLock,
  /**
   * 已锁定
   */
  Lock,
  /**
   * 已确认
   */
  Confirm,
  /**
   * 出款审核 - 退回→ 提款审核 - 未确认
   */
  SecondConfirming,
  /**
   * 点选拒絕
   */
  Reject,
  /**
   * 会员取消
   */
  UserCancel,
  /** 等待提款方確認 */
  C2CPendingConfirmation,
  /** 提款方未收到款項 */
  C2CNotReceived,
  /** C2C走C2B流程後並通過CRM後台人員枇核 */
  C2BDummyFlowConfirmation,
}

export enum CtcDepositMethodType {
  /**
   * 網銀轉帳
   */
  OnlineBankingTransfer = 1,
  /**
   * atm 自動櫃員機
   */
  ATM,
  /**
   * atm 現金
   */
  ATMCash,
  /**
   * 銀行櫃檯
   */
  BankCounter,
  /**
   * 其他
   */
  Other,
}

export enum DepositCancelReason {
  /**
   * 稍後再支付
   */
  PayLater = 1,
  /**
   * 調整金額
   */
  AdjustAmount,
  /**
   * 支付遇到問題
   */
  PayProblem,
  /**
   * 其他
   */
  Other,
}

export enum CtcNotificationType {
  Deposit = 'deposit',
  Withdraw = 'withdraw',
}

export enum WithdrawMethod {
  AddBankCard = 'addBankCard',
  C2B = 'C2B',
  C2C = 'C2C',
}

export enum VerificationLevel {
  /**
   * 尚未驗證
   */
  NotVerified = 1,
  /**
   * 完成2要素驗證
   */
  TwoFactorVerified,
  /**
   * 完成3要素驗證
   */
  ThreeFactorVerified,
  /**
   * 完成4要素驗證
   */
  FourFactorVerified,
  /**
   * 已成功提現
   */
  WithdrawSuccess,
}

export enum MessageType {
  /**
   * 優惠通知
   */
  Offer = 0,
  /**
   * 網站公告
   */
  Announcement = 1,
  /**
   * 站內信
   */
  InnerMail = 2,
}

export enum MessageAction {
  Read = 'read',
  Delete = 'delete',
}
/**
 * 個人的SMS OTP驗證模式: 0:無, 1:無使用, 2:可選用 , 3: 強制使用
 */
export enum OtpMode {
  /**
   * 未設置
   */
  None = 0,
  /**
   * 不使用
   */
  Disable,
  /**
   * 選用
   */
  Optional,
  /**
   * 強制使用
   */
  Enable,
}

export enum AccountType {
  /**
   * 一般會員
   */
  Normal = 1,
  /**
   * 代理
   */
  Agent,
  /**
   * 測試會員
   */
  Test,
}

export enum DeviceType {
  PC = 'pc',
  Mobile = 'mobile',
  IOS = 'ios',
  Android = 'android',
  IOSProfile = 'ios_profile',
}

export enum DeviceTypeFullShape {
  PC = 'PC',
  Mobile = 'MOBILE',
  IOS = 'IOS',
  Android = 'Android',
}

/**
 * 裝置碼, PC=0, MOBILE=1, IOS=2, ANDROID=3, IOS_PROFILE=4"
 */
export enum DeviceTypeInNumber {
  PC = 0,
  Mobile = 1,
  IOS = 2,
  Android = 3,
  IOSProfile = 4,
}

export enum DeviceNumber {
  PC = 1,
  Mobile = 2,
  App = 3,
}

/**
 * not using AppType to prevent name conflict with Vite
 */
export enum ApplicationType {
  Any = 0,
  Desktop = 1,
  Mobile = 2,
  AppPlatform = 4,
  AppSport = 8,
  AppPlatformSport = 16,
}

export enum PackageType {
  None = 0,
  Enterprise = 1,
  Super = 2,
  Bookmarks = 3,
}

export enum AppPackageType {
  TestFlight = 11,
}

export enum AnnouncementType {
  Icon = 'icon',
  Content = 'content',
  Envelope = 'envelope',
  Festival = 'festival',
}

export enum UrlActionType {
  None = 1,
  ExternalLink,
  InternalLink,
  Promotion,
}

export enum InnerLinkType {
  /** 首页 */
  HOME = 1,
  /** 代言人专区 */
  INFORMATION_ENDORSEMENT = 2,
  /** 合作伙伴 */
  INFORMATION_PARTNERSHIP = 3,
  /** 滚球 */
  SPORT_INPLAY = 4,
  /** 即将 */
  SPORT_INCOMING = 5,
  /** 早盘 */
  SPORT_EARLY = 7,
  /** 串场 */
  SPORT_PARLAY = 8,
  /** 冠军 */
  SPORT_OUTRIGHT = 9,
  /** 收藏 */
  SPORT_FAVORITE = 10,
  /** 赛果 */
  SPORT_GAME_RESULT = 11,
  /** 玩法规则 */
  GAME_PLAN = 12,
  /** 现场比分 */
  SPORT_SSCORE = 13,
  /** 娱乐城 */
  CASINO = 14,
  /** 老虎机 */
  SLOT_MACHINE = 18,
  /** 捕鱼游戏 */
  FISH_KING = 19,
  /** 我的 */
  MINE = 21,
  /** 红利兑换 */
  BONUS_EXCHANGE = 22,
  /** 个人资料 */
  MINE_INFO = 23,
  /** 钱包 */
  WALLET = 24,
  /** 充值 */
  DEPOSIT = 25,
  /** 提现 */
  WITHDRAWAL = 26,
  /** 投注记录 */
  BET_RECORD = 27,
  /** 交易记录 */
  TRANSACTION_RECORD = 28,
  /** 消息中心 */
  MESSAGE_CENTER = 30,
  /** VIP中心 */
  VIP_CENTER = 31,
  /** 优惠活动 */
  PROMOTION = 32,
  /** 代理加盟 */
  FRANCHISE = 33,
  /** APP下载 */
  DOWNLOAD_APP = 34,
  /** 分享赚钱 */
  EARN_MONEY = 35,
  /** 广告赞助球队专区 */
  AD_SPONSOR_TEAM = 36,
  /** 赞助主页 */
  SPONSOR_MAIN = 37,
  /** 群星贊助專區 */
  ALL_STAR = 38,
  /** 合作伙伴-莱斯特城 */
  LEICESTER = 39,
  /** 瑞銀：合作伙伴-摩納哥 */
  MONACO = 51,
  /** 瑞銀：合作伙伴-狼隊 */
  WOLVES = 50,
  /** 瑞銀：合作伙伴-拉齐奥 */
  LAZIO = 52,
  /** 瑞銀：合作伙伴-沃爾夫斯堡 */
  WOLFSBURUG = 53,
  /** 大眾：合作伙伴-罗马 */
  ROMA = 54,
  /** 勇士：合作伙伴-尤文图斯 */
  JUVENTUS = 55,
  /** 勇士：合作伙伴-毕尔巴鄂 */
  ATHLETIC = 56,
  /** 芒果：合作伙伴-塞维利亚 */
  SEVILLA = 57,
  /** 非凡：合作伙伴-都灵 */
  TORINO = 58,
  /** 蘋果：合作伙伴-皇家马德里 */
  REAL_MADRID = 59,
  /** 蘋果：合作伙伴-波鸿 */
  BOCHUM = 60,
  /** 蘋果：合作伙伴-美因茨 */
  MAINZ = 61,
  /** 蘋果：合作伙伴-云达不莱梅 */
  WERDER_BREMEN = 62,
  /** 蘋果：合作伙伴-门兴格拉德巴赫 */
  MONCHENGLADBACH = 63,
  /** 真人荷官 */
  DEALER_LIVE = 15,
  /** 彩票 */
  LOTTERY = 16,
  /** 棋牌 */
  BOARD = 17,
  /** 賽馬 */
  HORSE_RCB = 20,
}

export enum UrlOpenMethod {
  /**
   * 開新分頁
   */
  Blank = 'blank',
  /**
   * 當前頁面跳轉
   */
  Redirect = 'redirect',
  /**
   * app開啟
   */
  App = 'app',
  /**
   * 手機瀏覽器開啟
   */
  AppBrowser = 'appBrowser',
}

export enum TargetTypeOpenMethod {
  /**
   * 開新分頁
   */
  Blank = 1,
  /**
   * 當前頁面跳轉
   */
  Redirect,
}

export enum AnnouncementDomainPageSetting {
  /**
   * 僅在首頁
   */
  Home = 0,
  /**
   * 登入後任意頁面
   */
  Any = 1,
}

export enum CommunicationSoftwareType {
  Line = 1,
  Facebook,
  WhatsApp,
  QQ,
  Skype,
  WeChat,
  Twitter,
  Viber,
  Telegram,
  Other,
}

export enum CommunicationSoftwarePage {
  /**
   * 代理加盟註冊
   */
  AgentRegister = 1,
  /**
   * 代理加盟聯繫我們
   */
  AgentContactUs,
  /**
   * 後台代理客服
   */
  AgentService,
  /**
   * 前台聯繫我們
   */
  ContactUs,
}

export enum GuanggaosPosition {
  WAP = 1,
  APP,
  PC,
}

/**
 * 0: 不限制, 1: 登入後 2: 生涯存款總額, 11: Vip-1, 12: Vip-2, 13: Vip-3, 14: Vip-4, 15: Vip-5, 16: Vip-6, 17: Vip-7, 18: Vip-8, 19: Vip-9, 20: Vip-10
 */
export enum LiveSportQualifyType {
  /**
   * 不限制
   */
  None = 0,
  /**
   * 登入後
   */
  Login = 1,
  /**
   * 生涯存款總額
   */
  TotalDeposit,
  /**
   * Vip-1
   */
  Vip1 = 11,
  /**
   * Vip-2
   */
  Vip2,
  /**
   * Vip-3
   */
  Vip3,
  /**
   * Vip-4
   */
  Vip4,
  /**
   * Vip-5
   */
  Vip5,
  /**
   * Vip-6
   */
  Vip6,
  /**
   * Vip-7
   */
  Vip7,
  /**
   * Vip-8
   */
  Vip8,
  /**
   * Vip-9
   */
  Vip9,
  /**
   * Vip-10
   */
  Vip10,
}

export enum OpenType {
  /**
   * 關閉
   */
  Close = 0,
  /**
   * 開啟
   */
  Open = 1,
}

export enum OpenTypeInString {
  /**
   * 關閉
   */
  Close = '0',
  /**
   * 開啟
   */
  Open = '1',
}

export enum Gender {
  /**
   * 男
   */
  Male = 'MALE',
  /**
   * 女
   */
  Female = 'FEMALE',
  /**
   * 未知
   */
  Secret = 'SECRET',
}

export enum GenderShortForm {
  Male = 'M',
  Female = 'F',
  Secret = 'S',
}

/**
 * 密碼保護提示，0=未設置、1=您喜歡的食物、2=您喜歡的顏色、3=您喜歡的運動、4=您喜歡的球隊、5=您喜歡的球星
 */
export enum PasswordPromptType {
  /**
   * 未設置
   */
  None = 0,
  /**
   * 您喜歡的食物
   */
  Food,
  /**
   * 您喜歡的顏色
   */
  Color,
  /**
   * 您喜歡的運動
   */
  Sport,
  /**
   * 您喜歡的球隊
   */
  Team,
  /**
   * 您喜歡的球星
   */
  Star,
}

/**
 * 註冊來源 0:自行註冊, 1: 分享賺錢下線, 2: 代理下線
 */
export enum RegisterFrom {
  /**
   * 自行註冊
   */
  Self = 0,
  /**
   * 分享賺錢下線
   */
  Share,
  /**
   * 代理下線
   */
  Agent,
}

/**
 * 機器人檢測狀態(0:無, 1:待確認, 2:風險)
 */
export enum RobotDetectionStatus {
  /**
   * 無
   */
  None = 0,
  /**
   * 待確認
   */
  Pending,
  /**
   * 風險
   */
  Risk,
}

/**
 * 豪禮狀態 0:暫無 1:可領取 2:已領取
 */
export enum GiftType {
  /**
   * 暫無
   */
  None = 0,
  /**
   * 可領取
   */
  Available,
  /**
   * 已領取
   */
  Received,
}

/**
 * 類型(1:晉級禮金 2:每月紅包 3:生日禮金 4:積分兌換 5:豪華禮金)
 */
export enum GiftCategory {
  /**
   * 晉級禮金
   */
  Upgrade = 1,
  /**
   * 每月紅包
   */
  Monthly,
  /**
   * 生日禮金
   */
  Birthday,
  /**
   * 積分兌換
   */
  PointExchange,
  /**
   * 豪華禮金
   */
  Luxury,
}

/**
 * @external https://innotech.atlassian.net/wiki/spaces/BAC/pages/1947336726#OtpTypeEnum-OTP%E5%9F%B7%E8%A1%8C%E9%A0%85%E7%9B%AE
 */
export enum OtpType {
  /**
   * 注册
   */
  Register = 1,
  /**
   * 登录
   */
  Login,
  /**
   * 提款
   */
  Withdraw,
  /**
   * 綁定手機
   */
  BindPhone,
  /**
   * 变更手机
   */
  ChangePhone,
  /**
   * 忘记密码
   */
  ForgetPassword,
  /**
   * 快捷登录
   */
  QuickLogin,
  /**
   * 存款
   */
  Deposit,
  /**
   * 管理员手动获取
   */
  AdminGet,
  /**
   * 绑定email
   */
  BindEmail,
  /**
   * 变更email
   */
  ChangeEmail,
  /**
   * 解除綁定設備
   */
  UnbindDevice,
  /**
   * C2C提款
   */
  CTCWithdraw,

  CompleteUserInfo = 15,
  /**
   * 代理注册
   */
  AgentRegister = 21,
  /**
   * 代理提款
   */
  AgentWithdraw,
  /**
   * 代理轉帳
   */
  AgentTransfer,
  /**
   * 代理後台,登入/異地登入
   */
  AgentLogin,
  /**
   * 代理後台綁定手機
   */
  AgentBindPhone,
  /**
   * 會員三方註冊
   */
  ThirdPartyRegister,
  /**
   * 會員三方綁定
   */
  ThirdPartyLogin,
  /**
   * 郵箱快捷
   */
  QuickMailLogin,
  /**
   * 手機號安全性疑慮簡訊
   */
  PhoneSecurity = 99,
}

export enum PromotionType {
  /**
   * 紅包，代號br
   */
  RedEnvelope = 1,
  /**
   * 寶箱，代號bc
   */
  TreasureBox,
  /**
   * 登記送審，代號dz
   */
  Register,
  /**
   * 回饋，代號wk
   */
  Feedback,
  /**
   * 存款優惠，代號dp
   */
  Deposit,
  /**
   * 進球紅包-足球，代號goalBr
   */
  GoalRedEnvelope,
  /**
   * 活动宣传，代號dm
   */
  Activity = 10,
  /**
   * 完善信息优惠，沒有代號
   */
  PerfectInformation,
  /**
   * 轉盤
   */
  Turntable,
}

/**
 * 1.不准同IP 2.不准同姓名
 */
export enum PromotionRestrictionType {
  /**
   * 不准同IP
   */
  IP = 1,
  /**
   * 不准同姓名
   */
  Name,
}

/**
 * 1:生涯存款；2:指定區間
 */
export enum PromotionDepositConditionType {
  /**
   * 生涯存款
   */
  Total = 1,
  /**
   * 指定區間
   */
  Range,
}

/**
 * 條件類型, 1: 會員存款總次數, 2: 會員累計有效投注, 3: 會員輸贏-輸, 4: 會員輸贏-贏, 5: 會員指定時間有效投注, 6: 進球賽事會員投注額
 */
export enum PromotionAdditionalConditionType {
  /**
   * 會員存款總次數
   */
  TotalDepositTimes = 1,
  /**
   * 會員累計有效投注
   */
  TotalValidBet,
  /**
   * 會員輸贏-輸
   */
  TotalLose,
  /**
   * 會員輸贏-贏
   */
  TotalWin,
  /**
   * 會員指定時間有效投注
   */
  TimeValidBet,
  /**
   * 進球賽事會員投注額
   */
  GoalValidBet,
}

/**
 * 活動的時間類別, 1:即將開始, 2:進行中, 3:永久有效, 4:歷史優惠，預設給0
 */
export enum PromotionTimeType {
  /**
   * 未開始
   */
  NotStarted = 0,
  /**
   * 即將開始
   */
  ComingSoon = 1,
  /**
   * 進行中
   */
  Ongoing,
  /**
   * 永久有效
   */
  Permanent,
  /**
   * 歷史優惠
   */
  History,
}

/**
 * 0:可領取 1:已申請 2:已領取一空
 */
export enum PromotionStatus {
  /**
   * 可領取
   */
  Available = 0,
  /**
   * 已申請
   */
  Applied,
  /**
   * 已領取一空
   */
  Received,
}

/** 0:尚未達標 1:可領取 2:已領取(在此API不會出現) 3:申請中 4:已領取一空 5:已達領取上限 */
export enum PromotionDetailStatus {
  /**
   * 尚未達標
   */
  NotQualified = 0,
  /**
   * 可領取
   */
  Available,
  /**
   * 已領取
   */
  Received,
  /**
   * 申請中
   */
  Applied,
  /**
   * 已領取一空
   */
  ReceivedEmpty,
  /**
   * 已達領取上限
   */
  ReceivedLimit,
}

/** 獎項種類, 0: 彩金, 1: 優惠金, 2: 抵用券 */
export enum PromotionRewardType {
  /**
   * 彩金
   */
  Bonus = 0,
  /**
   * 抵用金
   */
  Credit,
  /**
   * 優惠券
   */
  Coupon,
}

/** 1.存款次數 2.累計存款 3.有效投注 4.會員等級限制 */
export enum PromotionQualifyCondition {
  /**
   * 存款次數
   */
  DepositTimes = 1,
  /**
   * 累計存款
   */
  TotalDeposit,
  /**
   * 有效投注
   */
  ValidBet,
  /**
   * 會員等級限制
   */
  MemberLevel,
}

export enum PromotionWkMode {
  /**
   * 自動發送
   */
  Auto = 0,
  /**
   * 手動領取
   */
  Manual = 1,
}

/**
 * 頻率(0:每日;1:每周;2活動結束/活動領取一次)
 */
export enum PromotionWkFrequency {
  /**
   * 每日
   */
  Daily = 0,
  /**
   * 每周
   */
  Weekly,
  /**
   * 活動結束/活動領取一次
   */
  Once,
}

/**
 * 是否已領取, 0:無 1:有 (只有手動領取會出現此欄位)
 */
export enum PromotionReceived {
  /**
   * 無
   */
  None = 0,
  /**
   * 有
   */
  Received,
}

/**
 * 回饋條件種類 0: 活動期間存款總額, 1: 活動期間有效投注, 2:會員VIP等級
 */
export enum PromotionWkConditionType {
  /**
   * 活動期間存款總額
   */
  TotalDeposit = 0,
  /**
   * 活動期間有效投注
   */
  TotalValidBet,
  /**
   * 會員VIP等級
   */
  VipLevel,
}

/**
 * 回饋方式(0:百分比;1:數值)
 */
export enum PromotionFeedbackType {
  /**
   * 百分比
   */
  Percentage = 0,
  /**
   * 數值
   */
  Value,
}

/** 紅包類型, 1: 一般紅包; 6: 進球紅包(足球) */
export enum PromotionRedEnvelopeType {
  /**
   * 一般紅包
   */
  Normal = 1,
  /**
   * 進球紅包(足球)
   */
  Goal = 6,
}

/**
 * 存款優惠類型(0:首次、1:非首次、2:其他優惠)
 */
export enum PromotionDpDepositType {
  /**
   * 首次
   */
  First = 0,
  /**
   * 非首次
   */
  NonFirst,
  /**
   * 其他優惠
   */
  Other,
}

/**
 * 進球計算模式 0: 全部球隊進球累計；1: 指定球隊進球累計
 */
export enum PromotionGoalBrCalculateType {
  /**
   * 全部球隊進球累計
   */
  All = 0,
  /**
   * 指定球隊進球累計
   */
  Team,
}

/**
 * 紅包獎項計算模式, 1: 依進球球隊設定；2: 依賽事投注額設定
 */
export enum PromotionGoalBrAwardCalculateType {
  /**
   * 依進球球隊設定
   */
  Team = 1,
  /**
   * 依賽事投注額設定
   */
  Bet,
}

/**
 * 當進球計算模式=全部球隊進球累計。進球計算期間 0: 每日累計； 1: 每週累計； 2: 活動期間累計; 當進球計算模式=指定球隊進球累計，給予-1
 */
export enum PromotionGoalBrRefreshType {
  /**
   * 當進球計算模式=指定球隊進球累計
   */
  Meet = -1,
  /**
   * 每日累計
   */
  Daily = 0,
  /**
   * 每週累計
   */
  Weekly,
  /**
   * 活動期間累計
   */
  Activity,
}

/**
 * 0:非首次、1:首次且已申請、2:首次但未申請
 */
export enum PromotionDpQualifyType {
  /**
   * 非首次
   */
  NonFirst = 0,
  /**
   * 首次且已申請
   */
  FirstApplied,
  /**
   * 首次但未申請
   */
  FirstNotApplied,
}

/**
 * 動畫觸發情境，1: 【動畫1】觸發情境：手動領取成功 / 系統發放成功； 2: 【動畫2】觸發情境：手動領取通知
 */
export enum PromotionNotificationAnimationType {
  /**
   * 【動畫1】觸發情境：手動領取成功 / 系統發放成功
   */
  ManualReceiveSuccess = 1,
  /**
   * 【動畫2】觸發情境：手動領取通知
   */
  ManualReceiveNotification,
}

export enum TreasureBoxReceiveQualifyType {
  /** 每日 */
  Daily,
  /** 每週 */
  Weekly,
  /** 僅限一次 */
  OnlyOnce,
}

export enum CustomerServiceType {
  /**
   * 外站客服
   */
  External = 1,
  /**
   * 集团专属客服
   */
  Group,
}

/**
 * 排序規則. kickOffTime / tournament (預設為:tournament)
 */
export enum SportSorting {
  /**
   * 比賽時間
   */
  KickOffTime = 'kickOffTime',
  /**
   * 聯盟
   */
  Tournament = 'tournament',
}

export enum SportDateRangeType {
  /**
   * 今天
   */
  Today = 'today',
  /**
   * (一小時內即將開賽的早盤)
   */
  Incoming = 'incoming',
  /**
   * 從今日算起的第 8 天到第 14 天後的所有賽事
   */
  Extended = 'extended',
  /**
   * 從今日算起7天內賽事
   */
  Week = 'week',
  /**
   * 從今日算起到14天後
   */
  TodayAndAll = 'todayAndAll',
}

export enum MatchSourceType {
  UNKNOWN = 'unknown',
  LIVE = 'live',
  TV = 'tv',
}

export enum MarketFilter {
  /**
   * 讓球&大小盤
   */
  AH_OU = 'ahOu',
  /**
   * 獨贏盤 半場&全場
   */
  ONE_X_TWO = '1x2',
  /**
   * 入球數-單/雙
   */
  ODDS_EVEN = 'oe',
  /**
   * 總入球
   */
  TOTAL_GOALS = 'tg',
  /**
   * 半場/全場
   */
  HALFTIME_FULLTIME = 'hf',
  /**
   * 波胆
   */
  CORRECT_SCORE = 'cs',
}

export enum MarketSettingLabel {
  Inplay = 'inplay',
  Prematch = 'prematch',
  Ot = 'ot',
  Pk = 'pk',
  Outright = 'outright',
  Parlay = 'parlay',
}

export enum MatchBulletin {
  MatchCancel = 1,
  MatchPostpone = 2,
  MatchAbnormal = 6,
}

export enum TopicDependency {
  Device = 'device',
  Region = 'region',
  Token = 'token',
  Language = 'language',
}

export enum OrderType {
  BET = 'BET',
  SAFE = 'SAFE',
  CHANGE = 'CHANGE',
}

export enum StompSendType {
  /**
   * 初始化
   */
  INIT = 'INIT',
  /**
   * 即時更新
   */
  UPDATE = 'UPDATE',
}

export enum PlatformWebSocketEvent {
  Balance = 'balance',
  Kickout = 'kickout',
  BrPartyTime = 'brPartyTime',
  NewMessageNotification = 'newMessageNotification',
  SysMaintenance = 'sysMaintenance',
  SysNotifyDomainLocked = 'sysNotifyDomainLocked',
  SmsSettingChange = 'smsSettingChange',
  DigitalArrived = 'digitalArrived',
  UserAvatar = 'userAvatar',
  ActiveCurrency = 'activeCurrency',
  OrderChange = 'orderChange',
  OrderChangeV2 = 'orderChangeV2',
  JzGoalCancel = 'jzGoalCancel',
  SportOrderCancel = 'sportOrderCancel',
  EmailSettingChange = 'emailSettingChange',
  CancelBrNotify = 'cancelBrNotify',
  RefreshCouponSummary = 'refreshCouponSummary',
  UserDepositInfo = 'userDepositInfo',
  PromotionRewardNotifications = 'promotionRewardNotifications',
  CtcNotification = 'ctcNotification',
}

/**
 * type 1: 後台管理者變更使用者資料
 * type 2: 帳戶異常
 * type 3: 帳號由其他地方登入 (後踢前)
 * type 4: 系統平台維護
 * type 5: 會員 token 已遭刪除 (閒置過久, token 失效)
 * type 6: 帳號由其他裝置(ws 重複連線)
 */
export enum KickoutType {
  /**
   * 後台管理者變更使用者資料
   */
  AdminUpdate = 1,
  /**
   * 帳戶異常
   */
  AccountAbnormal,
  /**
   * 帳號由其他地方登入 (後踢前)
   */
  DuplicateLogin,
  /**
   * 系統平台維護
   */
  SystemMaintenance,
  /**
   * 會員 token 已遭刪除 (閒置過久, token 失效)
   */
  TokenDeleted,
  /**
   * 帳號由其他裝置(ws 重複連線)
   */
  DuplicateConnection,
}

export enum OrderChangeType {
  /**
   * 注注返金額變化通知
   */
  OrderRebate = 'orderRebate',
  /**
   * 注單有變化，請重新查詢
   */
  OrderChange = 'orderChange',
}

/**
 * 投注狀態: 0: 未結算(將搜尋所有未結算注單，因此忽略startDate & endDate), 1: 已結算, 2: 全部; 不傳的話當做全部處理,3:取消
 */
export enum BetStatus {
  /**
   * 未結算
   */
  Unsettled = 0,
  /**
   * 已結算
   */
  Settled,
  /**
   * 全部
   */
  All,
  /**
   * 取消
   */
  Cancel,
}

/**
 * 查詢時間類型 BET(下注時間)、SETTLED(結算時間) 、LASTUPDATETIME(最後更新時間)
 */
export enum BetTimeConditionType {
  /**
   * 下注時間
   */
  Bet = 'BET',
  /**
   * 結算時間
   */
  Settled = 'SETTLED',
  /**
   * 最後更新時間
   */
  LastUpdateTime = 'LASTUPDATETIME',
}

/**
 * 是否贏 0:未開獎 1:獲勝 2:退款 3:輸 4:贏半 5:輸半
 */
export enum BetOrderWonStatus {
  /**
   * 未開獎
   */
  NotOpen = '0',
  /**
   * 獲勝
   */
  Win = '1',
  /**
   * 退款
   */
  Refund = '2',
  /**
   * 輸
   */
  Lose = '3',
  /**
   * 贏半
   */
  WinHalf = '4',
  /**
   * 輸半
   */
  LoseHalf = '5',
}

export enum TFESportBetStatus {
  Bet = 1,
  Cancel,
  Settle,
  Resettle,
}

export enum TFESportCompetitionNameType {
  Mini = 'Mini Game',
}

export enum ImCommand {
  CommandNone = 0,
  SendMessage = 1,
  FetchMessages = 2,
  ReportAbuse = 3,
  SwitchLanguage = 4,
  SubscribeChat = 5,
  UnsubscribeChat = 6,
  Ping = 7,
  FetchOtherOrders = 8,
  FetchChatSetting = 9,
  PushMessage = 100,
  ChatSetting = 101,
  UserStatus = 200,
}

export enum ImMatchCommand {
  Ping = 1,
  MatchStatus = 2,
}

export enum ImContentType {
  None = 0,
  Chat = 1,
  Order = 2,
  AnchorHost = 3,
  AnchorMember = 4,
}

/**
 * 0: 保留，目前沒用
 * 1: all , 全部人可見
 * 2: sender , 只可看見自己的訊息 (當使用者被加入黑名單後)
 */
export enum ImMessageVisible {
  Reserved = 0,
  All = 1,
  Sender = 2,
}

/**
 * 0: unlimited, 1: deposit, 2: vip
 */
export enum ImChatLimitType {
  Unlimited = 0,
  Deposit = 1,
  Vip = 2,
}

/**
 * 三方SSO登入方式
 * @external https://innotech.atlassian.net/browse/JAVA-1908
 */
export enum ThirdpartyLoginMethod {
  Google = 'GOOGLE',
  Fb = 'FACEBOOK',
  Apple = 'APPLE',
}

export enum ThirdPartyLoginType {
  Ordinary = 1,
  Agent = 2,
  Test = 3,
}
export type ImDepositAnchor = 100;

export type ImSid = Sid | ImDepositAnchor;

export enum ImRequestLiveStatus {
  All = 1,
  Live = 2,
}

/**
 * 直播状态
 * 1:未开播
 * 2:正在直播
 * 3:暂时禁播
 * 4:永久禁播
 */
export enum ImAnchorLiveStatus {
  NotLive = 1,
  Live = 2,
  TemporarilyBanned = 3,
  PermanentlyBanned = 4,
}

/**
 * 主播類型
 * 1: 賽事主播
 * 2: 充提主播
 */
export enum AnchorType {
  Sport = 1,
  Deposit = 2,
}

/**
 * im lang is from BN, it is quite different from our language code
 * the format of it is like: zh, en
 */
export type ImLang = string;

/**
 * 关注状态
 * 0:未关注
 * 1:已关注
 * 2:无需出现关注按钮(主播自己)
 */
export enum ImFollowStatus {
  NotFollow = 0,
  Follow = 1,
  NoNeed = 2,
}

/**
 * 比賽狀態
 * 1: 未開始
 * 2: 進行中
 * 3: 結束
 * 4: 延期
 * 5: 中斷
 * 7: 取消
 * 8: 待定
 */
export enum ImMatchStatus {
  NotStart = 1,
  InProgress = 2,
  End = 3,
  Postpone = 4,
  Interrupt = 5,
  Cancel = 7,
  Pending = 8,
}

export enum ImGender {
  /**
   * 男
   */
  Male = 1,
  /**
   * 女
   */
  Female = 2,
  /**
   * 保密
   */
  Secret = 3,
}
/**
 * 1单身2恋爱中3保密
 */
export enum ImRelationshipStatus {
  None,
  Single,
  InLove,
  Secret,
}

/**
 * 廣場專家 sid
 * 0: 熱門(預設為全部球種)
 * 1: 足球
 * 2: 籃球
 * 3: 網球
 * 4: 棒球
 */
export enum ExpertFilterSid {
  Hot = 0,
  Football,
  Basketball,
  Tennis,
  Baseball,
}

/**
 * 數據篩選
 * 0 or 不帶: 命中王
 * 1: 連紅王
 * 2: 跟投王
 */
export enum ExpertFilterType {
  /**
   * 命中王
   */
  Hit = 0,
  /**
   * 連紅王
   */
  Red = 1,
  /**
   * 跟投王
   */
  Follow = 2,
}

/**
 * 週,月,季,全部篩選
 * 1: 週
 * 2: 月
 * 3: 季
 * 4: 全部
 */
export enum ExpertTimeType {
  /**
   * 週
   */
  Week = 1,
  /**
   * 月
   */
  Month = 2,
  /**
   * 季
   */
  Quarter = 3,
  /**
   * 全部
   */
  All = 4,
}

/**
 * 文章狀態
 * 1: 解鎖
 * 2: 未解鎖
 */
export enum ExpertArticleStatus {
  Unlocked = 1,
  Locked = 2,
}

export enum ExpertHitStatus {
  Hit = 1,
  NotHit = 2,
}
/**
 * 盤口類型
 * 足球：獨贏(11)、讓球(12)、大小(13)
 * 篮球：獨贏(21)、讓球(22)、大小(23)
 */
export enum ExpertMarketType {
  FootballWin = '11',
  FootballHandicap = '12',
  FootballOverUnder = '13',
  BasketballWin = '21',
  BasketballHandicap = '22',
  BasketballOverUnder = '23',
}

/**
 * 專家預測結果
 * 獨贏: 主隊(h)、客隊(a)
 * 讓球: 主隊(h)、客隊(a)
 * 大小: 大(ov)、小(ud)
 */
export enum ExpertMarketResult {
  Home = 'h',
  Away = 'a',
  Over = 'ov',
  Under = 'ud',
  Draw = 'd',
}

/**
 * 老虎機遊戲供應商
 * @description 三方api老虎機遊戲返回code與ThirdpartyProvider定義不同，且無文件紀錄，僅能依照目前已知返回值定義
 */
export enum ThirdpartySlotGameProviderCode {
  PG = 'PG-SLOT',
  JDB = 'JDB-SLOT',
  MG = 'MG',
  MG_PLUS = 'MGPLUS',
  DT = 'DT',
  PT = 'PT-SLOT',
  CQ9 = 'CQ9-SLOT',
  AG = 'AG',
  PP = 'PP-SLOT',
  BS = 'BS-SLOT',
  QS = 'QUICKSPIN-SLOT',
}

export enum PageCode {
  Main = 1,
  Sports = 2,
  SportsInplay = 3,
  Dealer = 4,
  Slots = 5,
  Lottery = 6,
  Fishing = 7,
  EarnMoney = 8,
  TradeRecord = 9,
  Deposit = 10,
  Withdraw = 11,
  Transfer = 12,
  PromotionEvent = 13,
  VipCenter = 14,
  BetRecord = 15,
  MsgCenter = 16,
  Agent = 17,
  Promotion = 18,
  SportsFavorite = 19,
  SportsMine = 20,
  SportsIncoming = 21,
  SportsToday = 22,
  SportsEarly = 23,
  SportsTodayExhaustive = 25,
  SportsInplayExhaustive = 26,
  Board = 27,
  SportsOutright = 24,
  ESport = 28,
  Parlay = 29,
  WalletSummary = 30,
  SportsGameResult = 31,
  GameCity = 32,
  Horse = 33,
  RcbHorse = 34,
  Ag = 35,
  Bg = 36,
  Evo = 37,
  Bbin = 38,
  Ae = 39,
  Ky = 40,
  V8 = 41,
  Ly = 42,
  MgSlot = 43,
  DtSlot = 44,
  PtSlot = 45,
  PgSlot = 46,
  Cq9Slot = 47,
  JdbSlot = 48,
  AgSlot = 49,
  PpSlot = 50,
  BsSlot = 51,
  QsSlot = 52,
  AgFishing = 53,
  KsFishing = 54,
  JdbFishing = 55,
  Pm = 56,
  TfEsport = 60,
  MgplusSlot = 64,
}

/**
 * (1:強制關閉 2:二要素 )
 */
export enum BankCardVerificationMode {
  ForceClose = 1,
  TwoFactor = 2,
}

/**
 * 國家 1,必選 2.不顯示 3.選填
 */
export enum CountryInputMode {
  Required = 1,
  Hide = 2,
  Optional = 3,
}

/**
 * 賽事狀態 "not_started", "live", "closed"
 */
export enum MatchState {
  NotStarted = 'not_started',
  Live = 'live',
  Closed = 'closed',
}

/**
 * 預計提供動態或直播, 0:無 , 1:streaming ,2 : html5 ,3 : both
 */
export enum MatchStreamingState {
  None = 0,
  Streaming = 1,
  Html5 = 2,
  Both = 3,
}

export enum MatchStatePhase {
  NonStart = 'NON_START',
  InPlay = 'IN_PLAY',
  Closed = 'CLOSED',
  UnusualEnded = 'UNUSUAL_ENDED',
  Waiting = 'WAITING',
  Hidden = 'HIDDEN',
}

/**
 * 觸發餘額更新類型, 1:存款 2:提款 3:轉帳 4:下注
 */
export enum TriggerBalanceUpdateType {
  Deposit = 1,
  Withdrawal,
  Transfer,
  Bet,
}

export enum PaymentTransferType {
  xxPay = 221,
}

/**
 * PIX 支付類型
 */
export enum PixType {
  CPF = 'CPF',
  Phone = 'Phone',
  Email = 'Email',
  Random = 'Random',
  CNPJ = 'CNPJ',
}

/**
 * 認證方式代碼
 * https://innotech.atlassian.net/wiki/spaces/BAC/pages/1947336726/BE+-#%E8%AA%8D%E8%AD%89%E6%96%B9%E5%BC%8F%E4%BB%A3%E7%A2%BC
 */
export enum AuthMethodType {
  NoValidation,
  Sms,
  Email,
  SmsAndEmail,
  SmsOrEmail,
  WithdrawPassword,
  WithdrawPasswordOrSms,
  WithdrawPasswordOrEmail,
  WithdrawPasswordOrSmsOrEmail,
}

/**
 * 前台會員手機快捷綁定帳號V2 for Web3.0
 * @external https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142#%2385-%E5%89%8D%E5%8F%B0%E6%9C%83%E5%93%A1%E6%89%8B%E6%A9%9F%E5%BF%AB%E6%8D%B7%E7%B6%81%E5%AE%9A%E5%B8%B3%E8%99%9FV2-for-Web3.0
 */
export enum OtpTypeEnum {
  QUICK_MAIL_LOGIN = 'QUICK_MAIL_LOGIN', // 郵箱快捷
  QUICK_PHONE_LOGIN = 'QUICK_PHONE_LOGIN', // 手機快捷
}

/**
 * 前台會員確認驗證方式
 * @external https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142#%2393.%E5%89%8D%E5%8F%B0%E6%9C%83%E5%93%A1%E7%A2%BA%E8%AA%8D%E9%A9%97%E8%AD%89%E6%96%B9%E5%BC%8F
 */
export enum UserValidateModeAction {
  Deposit = 'Deposit',
  Withdraw = 'Withdraw',
}

/**
 * 賽事類型
 * 1=預選賽
 * 2=分組賽
 * 3=淘汰賽
 */
export enum WorldCupMatchesTypeParams {
  Qualification = 1,
  Group = 2,
  Cup = 3,
}

/**
 * 淘汰賽類型
 * 0=全部
 * 1=32強
 * 2=16強
 * 3=8強
 * 4=4強
 * 5=季軍賽
 * 6=決賽
 * type=3才需要給
 */
export enum WorldCupMatchesRoundParams {
  All = 0,
  RoundOf32 = 1,
  RoundOf16 = 2,
  QuarterFinals = 3,
  SemiFinals = 4,
  ThirdPlaceMatch = 5,
  Final = 6,
}

/**
 * qualification=預選賽, group=小組賽, cup=淘汰賽
 */
export enum WorldCupRoundType {
  Qualification = 'qualification',
  Group = 'group',
  Cup = 'cup',
}
