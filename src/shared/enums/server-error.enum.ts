export enum ServerErrorCode {
  None = 0,
  /**
   * 連接 redis 異常
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit?gid=456605179#gid=456605179&range=R548
   */
  RedisConnectionError = 90000,
  /**
   * 後端api異常
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit?gid=456605179#gid=456605179&range=S549
   */
  PlatformApiConnectionError = 90001,

  /**
   * 請求失敗 https://innotech.atlassian.net/wiki/spaces/BAC/pages/438009987 #4
   */
  InternalServerError = 10000,

  /**
   * 參數錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/1875837240
   */
  ParameterError = 10001,

  /**
   * 後台進入維護模式，前台禁止訪問
   * @external https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142#%2383.-%E5%89%8D%E5%8F%B0%E6%9C%83%E5%93%A1%E6%89%8B%E6%A9%9F%E5%BF%AB%E6%8D%B7%E7%99%BB%E5%85%A5-V2-for-Web3.0
   */
  MaintenanceMode = 10003,

  /**
   * 查無未結算注單
   * @external https://innotech.atlassian.net/wiki/spaces/BAC/pages/438009987 #2
   * Resource not found
   */
  ResourceNotFound = 10004,

  /**
   * 請求沒有帶body https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */
  BodyRequired = 10005,

  /**
   * 內部連線錯誤
   * @external https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142#%2383.-%E5%89%8D%E5%8F%B0%E6%9C%83%E5%93%A1%E6%89%8B%E6%A9%9F%E5%BF%AB%E6%8D%B7%E7%99%BB%E5%85%A5-V2-for-Web3.0
   */
  InternalConnectionError = 10006,

  /**
   * xml解析錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #16
   */
  ParseXmlError = 10102,

  /**
   * 傳入的 id 已不存在 https://innotech.atlassian.net/wiki/spaces/BAC/pages/327876703 3
   */
  IdNotFound = 10104,

  /**
   * 昵称已经被使用(包含重复) https://innotech.atlassian.net/wiki/spaces/BAC/pages/1875837240 #9
   */
  NicknameAlreadyUsed = 10108,

  /**
   * 由 Domain 取「供應商」發生錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/584089660 #2
   */
  GetProviderByDomainError = 10110,

  /**
   * 舊密碼錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/1875837240 #9
   */
  OldPasswordError = 10111,

  /**
   * 此服务已关闭，请联系客服
   */
  ServiceClosed = 10114,

  /**
   * 權限不足(e.g. 不允許代理)
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R113
   */
  PermissionDenied = 10202,

  /**
   * token 驗證錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/30441519/inno+game #1
   */
  TokenInvalid = 10203,

  /**
   * token 過期 https://innotech.atlassian.net/wiki/spaces/BAC/pages/30441519/inno+game #1
   */
  TokenExpiry = 10204,

  /**
   * 三方 authCode 沒驗過 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2797633746#%231.%E4%B8%89%E6%96%B9%E5%BF%AB%E6%8D%B7%E7%99%BB%E5%85%A5
   */
  ThirdPartyVerifyError = 10208,

  /**
   * 帳號已存在
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R120
   */
  AccountExisted = 10209,

  /**
   * 暂不提供提前结算
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R71
   */
  CashoutDisabled = 20308,

  /**
   * 平台扣款回應未知代碼 https://innotech.atlassian.net/wiki/spaces/SP/pages/348750059/inno-order
   */
  PlatformDeductionError = 20601,

  /**
   * 優惠卷/抵用金不足 https://innotech.atlassian.net/wiki/spaces/SP/pages/1040516141/Websocket+-+STOMP #12
   */
  CouponNotEnough = 20602,

  /**
   * 找不到賽事 https://innotech.atlassian.net/wiki/spaces/BAC/pages/30441519/inno+game #1
   */
  MatchNotFound = 30001,

  /**
   * 找不到收藏中的賽事 https://innotech.atlassian.net/wiki/spaces/BAC/pages/30441519/inno+game #2
   */
  FavoritesMatchNotFound = 30002,

  /**
   * 重複收藏賽事 https://innotech.atlassian.net/wiki/spaces/BAC/pages/30441519/inno+game #1
   */
  FavoritesMatchDuplicated = 30005,

  /**
   * 找不到收藏中的冠軍聯賽 https://innotech.atlassian.net/wiki/spaces/BAC/pages/30441519/inno+game #4
   */
  FavoritesOutrightNotFound = 30006,

  /**
   * 重複收藏冠軍聯賽 https://innotech.atlassian.net/wiki/spaces/BAC/pages/30441519/inno+game #3
   */
  FavoritesOutrightDuplicated = 30007,

  /**
   * 請求UniKey過期
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R61
   * Cash Out UniKey is Expired https://innotech.atlassian.net/wiki/spaces/BAC/pages/438009987 #3
   */
  CashoutUnikeyExpired = 30008,

  /**
   * 查無提前結算公平機率
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R62
   * Cash Out Variable Not Found https://innotech.atlassian.net/wiki/spaces/BAC/pages/438009987 #3
   */
  CashoutVariableNotFound = 30009,

  /**
   * 公平機率改變 https://innotech.atlassian.net/wiki/spaces/SP/pages/1040516141/Websocket+-+STOMP #20
   */
  CashoutVariableChanged = 30010,

  /**
   * Cash Out Amount Not Enough https://innotech.atlassian.net/wiki/spaces/SP/pages/1040516141/Websocket+-+STOMP #20
   */
  CashoutClosed = 30011,

  /**
   * Cash Out Amount Not Enough https://innotech.atlassian.net/wiki/spaces/BAC/pages/438009987 #2
   */
  CashoutAmountNotEnough = 30013,

  /**
   * 事件關閉盤口 https://innotech.atlassian.net/wiki/spaces/BAC/pages/438009987 #3
   */
  EventClosed = 30015,

  /**
   * 提前結算注單已存在 https://innotech.atlassian.net/wiki/spaces/BAC/pages/438009987 #3
   */
  CashoutOrderExist = 30016,

  /**
   * 提前結算注單超過上限(10筆) https://innotech.atlassian.net/wiki/spaces/BAC/pages/438009987 #3
   */
  CashoutOrderExceedLimit = 30017,

  /**
   * 重複下注
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R34
   */
  OrderDuplicated = 30513,

  /**
   * 下注異常
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R40
   */
  OrderFailed = 30519,

  /**
   * 該單號被鎖定 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #8
   */
  OrderLocked = 120006,

  /**
   * 提款操作鎖定 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #5
   */
  WithdrawLocked = 120007,

  /**
   * 提款密碼錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #16
   */
  WithdrawPasswordError = 120008,

  /**
   * 重複的銀行卡號 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #12
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R131
   */
  BankcardDuplicated = 120009,

  /**
   * 銀行卡已被自己綁定 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #36
   */
  BankcardAlreadyBoundBySelf = 120010,

  /**
   * can not find account https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #51
   */
  AccountNotFound = 130000,

  /**
   * 密碼錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #2
   */
  PasswordError = 130001,

  /**
   * 帳號已存在 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */
  AccountAlreadyExist = 130002,

  /**
   * ip鎖定 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */

  IpLocked = 130003,

  /**
   * 連續錯誤5次，帳號被鎖定 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #6
   */
  AccountLocked = 130004,

  /**
   * 帳號已鎖定 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #6
   */
  AccountAlreadyLocked = 130005,

  /**
   * 帳號或提款密碼不正確 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #6
   */
  AccountOrWithdrawPasswordError = 130006,

  /**
   * 驗證沒通過，不能修改密碼 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #7
   */
  VerificationNotPass = 130007,

  /**
   * Ip已達當日註冊上限 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */
  RegisterIpExceedLimit = 130008,

  /**
   * 年齡未成年 https://innotech.atlassian.net/wiki/spaces/BAC/pages/1875837240 #9
   */
  AgeNotAdult = 130013,

  /**
   * 尚未設定提款密碼 https://innotech.atlassian.net/wiki/spaces/BAC/pages/1875837240 #9
   */
  WithdrawPasswordNotSet = 130014,

  /**
   * 帳號已停用 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #2
   */
  AccountDisabled = 130018,

  /**
   * IP 已達黑名單註冊上限 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */
  RegisterIpBlacklistExceedLimit = 130027,

  /**
   * redeem vip birth gift fail https://innotech.atlassian.net/wiki/spaces/BAC/pages/48431117/VIP- #3
   */
  RedeemVipBirthGiftFail = 130034,

  /**
   * 暱稱包含不雅字 https://innotech.atlassian.net/wiki/spaces/BAC/pages/1875837240 #9
   */
  NicknameIncludeBadWord = 130035,

  /**
   * 若是代理, 則提款密碼必填 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */
  RegisterAgentWithdrawPasswordRequired = 130036,

  /**
   * 若是代理, 則真實姓名必填 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */
  RegisterAgentRealNameRequired = 130037,

  /**
   * 若是代理, 則qq必填 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */
  RegisterAgentQqRequired = 130038,

  /**
   * 若是代理, 則 email 必填 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */
  RegisterAgentEmailRequired = 130039,

  /**
   * 短信驗證碼發送失敗，請稍後再試
   */
  SmsSendFail = 130047,

  /**
   * OTP code expired https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */
  OtpCodeExpired = 130048,

  /**
   * 驗證碼錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #26
   */
  VerificationCodeError = 130049,

  /**
   * Can not resend OTP code https://innotech.atlassian.net/wiki/spaces/BAC/pages/2099937308/- #41
   */
  CannotResendOtpCode = 130050,

  /**
   * The phone number is already exist https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */
  PhoneNumberAlreadyExist = 130051,

  /**
   * 必填phone number https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #45
   */
  MustProvidePhoneNumber = 130052,

  /**
   * This ip over the send SMS limit https://innotech.atlassian.net/wiki/spaces/BAC/pages/2099937308/- #41
   */
  IpOverSendSmsLimit = 130053,

  /**
   * This phone number over the send SMS limit https://innotech.atlassian.net/wiki/spaces/BAC/pages/2099937308/- #41
   */
  PhoneNumberOverSendSmsLimit = 130054,

  /**
   * The account has been bound phone number https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #46
   */
  AccountAlreadyBoundPhoneNumber = 130056,

  /**
   * 拼圖驗證錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #6
   */
  CaptchaError = 130058,

  /**
   * 無法更改幣別 https://innotech.atlassian.net/wiki/spaces/BAC/pages/1875837240 #9
   */
  CannotChangeCurrency = 130059,

  /**
   * 拼圖驗證錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #2
   */
  MustProvideCaptcha = 130060,

  /**
   * MUST_CURRENCY (幣別必填)
   * @external https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142#%2384.-%E5%89%8D%E5%8F%B0%E6%9C%83%E5%93%A1%E6%89%8B%E6%A9%9F%E5%BF%AB%E6%8D%B7-%E8%A8%BB%E5%86%8AV2-for-Web3.0
   */
  MustCurrency = 130061,

  /**
   * 會員登入需要圖形驗證 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #2
   */
  MustProvideCaptchaToLogin = 130062,

  /**
   * 兌換紅利失敗 https://innotech.atlassian.net/wiki/spaces/BAC/pages/48431117/VIP- #4
   */
  ExchangeVipScoreFail = 130064,

  /**
   * 紅利不足 https://innotech.atlassian.net/wiki/spaces/BAC/pages/48431117/VIP- #4
   */
  VipScoreNotEnough = 130065,

  /**
   * The phone number has not been bound https://innotech.atlassian.net/wiki/spaces/BAC/pages/2099937308/- #40
   */
  PhoneNumberNotBound = 130068,

  /**
   *  The email is already exist https://innotech.atlassian.net/wiki/spaces/BAC/pages/2099937308/- #66
   */
  EmailIsAlreadyExist = 130070,

  /**
   * This email over the send otp limit https://innotech.atlassian.net/wiki/spaces/BAC/pages/2099937308/- #66
   */
  EmailOverSendLimit = 130071,

  /**
   * not found vendor email setting https://innotech.atlassian.net/wiki/spaces/BAC/pages/2099937308/- #66
   */
  NotFoundVendorEmailSetting = 130072,

  /**
   * email length more than 50 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2099937308/- #66
   */
  EmailLengthMoreThan50 = 130073,

  /**
   * 同一IP每日發email 驗證碼上限次數超過業主設定 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2099937308/-#%2372.%E7%99%BC%E9%80%81Email-OTP%E9%A9%97%E8%AD%89%E7%A2%BC-v2-(%E5%8C%85%E5%90%AB%E9%87%8D%E9%80%81) #72
   */
  IpOverSendEmailLimit = 130074,

  /**
   * 昵称不能同自己的「會員账号」 https://innotech.atlassian.net/wiki/spaces/BAC/pages/1875837240 #9
   */
  NicknameCannotSameAsAccount = 130076,

  /**
   * 昵称中的連續數字不能超過4位 https://innotech.atlassian.net/wiki/spaces/BAC/pages/1875837240 #9
   */
  NicknameContinuousNumberCannotExceedFour = 130077,

  /**
   * 登入失敗請使用OTP登入 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2392142 #2
   */
  LoginFailedUseOtp = 130086,

  /**
   * 銀行卡已被他人綁定 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #35
   */
  BankcardAlreadyBound = 130087,

  /**
   * 驗證次數超過限制 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #35
   */
  VerificationCodeErrorTooManyTimes = 130088,

  /**
   * 銀行卡驗證不足 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #24
   */
  BankcardValidationNotEnough = 130089,

  /**
   * 手機/郵箱登入時密碼為空
   */
  PasswordEmpty = 130090,

  /**
   * 綁定失敗
   */
  BindFail = 130091,

  /**
   * tmp token 到期 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2797633746#%232.%E4%B8%89%E6%96%B9%E7%B6%81%E5%AE%9A%E8%88%8A%E5%B8%B3%E8%99%9F
   */
  ThirdPartyTmpTokenExpired = 130092,

  /**
   * 已經被綁定過 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2797633746#%232.%E4%B8%89%E6%96%B9%E7%B6%81%E5%AE%9A%E8%88%8A%E5%B8%B3%E8%99%9F
   */
  ThirdPartyAccountAlreadyBound = 130093,

  /**
   * 註冊失敗 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2797633746#%233.%E4%B8%89%E6%96%B9%E7%99%BB%E5%85%A5%E8%A8%BB%E5%86%8A%E6%96%B0%E5%B8%B3%E8%99%9F
   */
  RegisterFail = 130094,

  /**
   * 三方綁定失敗（已綁定過三方）
   */
  ThirdPartyBindFail = 130095,

  /**
   * 不正確 或 不合法 sms otp code（手機驗證未通過，輸入不正確或已過期）
   */
  SmsOtpCodeError = 130097,

  /**
   * 不正確 或 不合法 email otp code
   */
  EmailOtpCodeError = 130098,

  /**
   * 玩家未綁定 email（進行必須通過郵箱驗證的動作時發現未綁定）
   */
  EmailNotBound = 130099,

  /**
   * 不正確 或 不合法 otp code(超過一個認證時回傳，手機或郵箱驗證不通過，但不知道是哪個類別)
   */
  OtpCodeError = 130100,

  /**
   * 提現密碼不正確
   */
  WithdrawPasswordIncorrect = 130101,

  /**
   * 需要跑驗證流程
   */
  NeedVerification = 130102,

  /**
   * 舊三方帳號 不可以解除綁定
   */
  OldThirdPartyAccountCannotUnbind = 130103,

  /**
   * NOT_FOUND_AUTHORIZATION 未帶入 登入 token https://innotech.atlassian.net/wiki/spaces/BAC/pages/2099937308/-#%2371.%E7%99%BC%E9%80%81OTP%E9%A9%97%E8%AD%89%E7%A2%BC-v2-(%E5%8C%85%E5%90%AB%E9%87%8D%E9%80%81)
   */
  NotFoundAuthorization = 130105,

  /**
   * 帳號已經綁定email
   */
  TokenVerifyFail = 130106,

  /**
   * otpType 有問題（郵箱/手機登入，如type帶入存款則失敗，防呆用途，用戶看不到）
   */
  OtpTypeProblem = 130107,

  /**
   * 註冊失敗
   */
  UnexpectedRegisterFailed = 130108,

  /**
   * 需要驗證 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2797633746#%231.%E4%B8%89%E6%96%B9%E5%BF%AB%E6%8D%B7%E7%99%BB%E5%85%A5
   */
  UserRequireValidate = 139000,

  /**
   * Third Party no binding https://innotech.atlassian.net/wiki/spaces/BAC/pages/2797633746#%231.%E4%B8%89%E6%96%B9%E5%BF%AB%E6%8D%B7%E7%99%BB%E5%85%A5
   */
  ThirdPartyNoBinding = 139002,

  /**
   * 找不到該單號 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #8
   */
  OrderNotFound = 140003,

  /**
   * 此銀行卡不屬於平台業主 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #10
   */
  BankcardNotOwnByBrand = 140008,

  /**
   * 此會員不屬於當前銀行卡業主 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #10
   */
  BankcardUserNotOwnByBrand = 140009,

  /**
   * 有一筆存款單正在審核或鎖定中 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #10
   */
  DepositOrderPendingOrLockedExist = 140013,

  /**
   * 該單號已經通過 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #8
   */
  OrderAlreadyApproved = 1400015,

  /**
   * 該單號已經被拒絕 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #8
   */
  OrderAlreadyRejected = 1400016,

  /**
   * 餘額不足 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #16
   */
  InsufficientBalance = 140019,

  /**
   * 提款單狀態錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #26
   */
  WithdrawStatusError = 140020,

  /**
   * 銀行卡非啟用狀態 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #10
   */
  BankcardNotEnabled = 140021,

  /**
   * 會員未設定出款銀行卡 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #24
   */
  UserNotSetWithdrawBankcard = 140022,

  /**
   * 低於最低提款金額 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #16
   */
  WithdrawAmountLessThanMin = 140023,

  /**
   * 錯誤次數過多，暫時鎖定 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #16
   */
  WithdrawPasswordErrorTooManyTimes = 140024,

  /**
   * 銀行卡已達限制張數 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #12
   */
  BankcardReachedLimit = 140025,

  /**
   * 銀行卡格式有誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #36
   */
  BankcardFormatError = 140026,

  /**
   * 低于存款最低额度
   */
  DepositAmountLessThanMin = 140030,

  /**
   * 低于存款最低额度
   */
  DepositAmountMinimum = 140036,
  /**
   * 存款金額超出可用範圍 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #10
   */
  DepositAmountExceedLimit = 140038,

  /**
   * 超過存款最高額度
   */
  DepositAmountExceedMax = 140061,

  /**
   * 会员找不到对应第三方层级
   */
  MemberNotFoundThirdpartyLevel = 140062,
  /**
   * 找不到對應的第三方關聯帳號
   */
  MemberNotFoundThirdpartyAccount = 140063,

  /**
   * 提款金额小于提款手续费，请提高提款金额
   */
  WithdrawAmountLessThanFee = 140071,

  /**
   * 提款金額不在範圍內 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #16
   */
  WithdrawAmountNotInRange = 140072,

  /**
   * 該張銀行卡超過限額 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #10
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R259
   */
  BankcardExceedLimit = 140073,
  /**
   * 操作逾時，請重新操作
   */
  OperationTimeout = 140078,

  /**
   * 已存在未完成的數字貨幣存款單 https://innotech.atlassian.net/wiki/spaces/BAC/pages/53018741/- #3
   */
  CryptocurrencyDepositAlreadyExist = 140095,

  /**
   * 啟用錢包的幣別不是數字貨幣 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #27
   */
  WalletCurrencyNotCryptocurrency = 140096,

  /**
   * 數字貨幣地址不存在 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #27
   */
  WalletAddressNotFound = 140097,

  /**
   * 數字錢包地址重複 https://innotech.atlassian.net/browse/QIP-8309
   */
  DuplicateDigitalWalletAddress = 140098,

  /**
   * 超過存款範圍
   */
  DepositAmountExceedRange = 140111,

  /**
   * 銀行停用 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #10
   */
  BankcardDisabled = 140114,

  /**
   *  三方支付下单失败，请稍后再试或联系7x24客服 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #10
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R300
   */
  ThirdPartyPaymentOrderFailed = 140119,

  /**
   * 存款前要先完善個人信息 https://innotech.atlassian.net/wiki/spaces/BAC/pages/53018741/-
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R301
   */
  DepositUserInfoNotCompleted = 140120,

  /**
   * 優惠券/抵用金 發行量不足 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #5
   */
  PromotionCouponNotEnough = 140126,

  /**
   * 券過期
   */
  PromotionCouponExpired = 140127,

  /**
   * 提現請輸入尾數末3碼為0的整數
   */
  WithdrawAmountNotEndWithZero = 140131,
  /**
   * 充值請輸入尾數末1碼為0的整數
   */
  DepositAmountNotEndWithZero = 140132,

  /**
   * 已綁定此錢包類型 (IN-1092) https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #12
   */
  WalletTypeDuplicated = 140137,

  /**
   * 此錢包地址已被其他會員綁定 (IN-1092) https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #12
   */
  WalletAddressConflict = 140138,

  /**
   * 還有c2c提款單未完成 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #24
   */
  WithdrawProcessing = 140140,

  /**
   * 銀行卡驗證失敗 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #35
   */
  BankcardValidationFailed = 140141,

  /**
   * 至少需要使用銀行卡成功提款過一次 https://innotech.atlassian.net/wiki/spaces/BAC/pages/12288035/- #16
   */
  WithdrawNeedUseBankcardAtLeastOnce = 140143,

  /**
   * 第三方遊戲啟動 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  ThirdpartyCanNotStarUp = 160001,

  /**
   * 會員第三方遊戲被停押 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  ThirdpartyCeaseOperations = 160004,

  /**
   * 轉帳進行中 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #9
   */
  TransferBalanceInProgress = 160005,

  /**
   * 網路錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyNetworkError = 160102,

  /**
   * 創建或確認帳號錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyCreateOrConfirmAccountError = 160111,

  /**
   * 帳號已存在或密碼錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyAccountExistOrPasswordError = 160112,

  /**
   * 取得帳號餘額失敗 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyGetBalanceError = 160113,

  /**
   * 重複轉帳 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyRepeatError = 160114,

  /**
   * 轉帳失敗 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyTransactionError = 160115,

  /**
   * 預約轉帳失敗 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyReserveTransactionError = 160116,

  /**
   * 轉帳確認失敗 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyConfirmTransactionError = 160117,

  /**
   * AG餘額不足 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyAgBalanceNotEnough = 160118,

  /**
   * 第三方餘額不足 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyBalanceNotEnough = 160123,

  /**
   * 取得provider service失敗 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyGetProviderServiceError = 160124,

  /**
   * 三方資產轉移中
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R347
   */
  TransferThirdPartyInprogress = 160125,

  /**
   * 您上次進入的遊戲為【】，是否要將資產轉回到平台? https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyBalanceInOtherWalletNow = 160126,

  /**
   * 請先離開您現在正在遊玩的遊戲。 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyUserIsPlaying = 160127,

  /**
   * 餘額不足以遊玩遊戲，請先充值 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyBalanceNotEnoughToPlay = 160128,

  /**
   * 資產停留在三方遊戲
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R344
   */
  TransferThirdPartyMoneyFailed = 160131,

  /**
   * Balance is in BBIN, [{}] now, please transfer out first https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyBalanceInBbinNow = 160129,

  /**
   * User is playing PT, please exit game https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #15
   */
  TransferThirdPartyUserIsPlayingPt = 160130,

  /**
   * 會員第三方遊戲不提供試玩 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  ThirdpartyNotTryGame = 160134,

  /**
   * User is playing V8, please exit game https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #15
   */
  TransferThirdPartyUserIsPlayingV8 = 160135,

  /**
   * User is playing LY, please exit game https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #15
   */
  TransferThirdPartyUserIsPlayingLY = 160136,

  /**
   * 线路异常，请稍后再试 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #16
   */
  LineIsAbnormalAndTryAgainLater = 160139,

  /**
   * AG in system maintenance https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyAgInMaintenance = 160148,

  /**
   * BBIN in system maintenance https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */

  TransferThirdPartyBbinInMaintenance = 160149,

  /**
   * KY in system maintenance https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyKyInMaintenance = 160150,

  /**
   * LY in system maintenance https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyLyInMaintenance = 160151,

  /**
   * PT in system maintenance https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyPtInMaintenance = 160152,

  /**
   * V8 in system maintenance https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyV8InMaintenance = 160153,

  /**
   * Unknown provider in system maintenance https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #11
   */
  TransferThirdPartyUnknownProviderInMaintenance = 160154,

  /**
   * 【AG】资金移转中，请稍后再试或联系7x24客服 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #16
   */
  TransferringAndTryAgainLaterInAG = 160155,

  /**
   * 【KY】资金移转中，请稍后再试或联系7x24客服 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #16
   */
  TransferringAndTryAgainLaterInKY = 160156,

  /**
   * 【PT】资金归集失败，请稍后再试或联系7x24客服 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #16
   */
  TransferFailedAndTryAgainLaterInPT = 160157,

  /**
   * 【BBIN】资金归集失败，请稍后再试或联系7x24客服 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #16
   */
  TransferFailedAndTryAgainLaterInBBIN = 160158,

  /**
   * 【V8】资金归集失败，请稍后再试或联系7x24客服 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #16
   */
  TransferFailedAndTryAgainLaterInV8 = 160159,

  /**
   * 【LY】资金归集失败，请稍后再试或联系7x24客服 https://innotech.atlassian.net/wiki/spaces/BAC/pages/45547564/- #16
   */
  TransferFailedAndTryAgainLaterInLY = 160160,

  /**
   * 取得會員詳細資料錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/1852670028 #1
   */
  GetMemberDetailError = 200110,

  /**
   * 訊息不存在 service https://innotech.atlassian.net/wiki/spaces/BAC/pages/2100002851/- #3
   */
  MessageNotFound = 200128,

  /**
   * 優惠活動不存在 https://innotech.atlassian.net/wiki/spaces/BAC/pages/897318996/- #2
   */
  PromotionNotFound = 200130,

  /**
   * 已經領取過優惠 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #5
   */
  PromotionAlreadyApplied = 200135,

  /**
   * 預算不足 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #5
   */
  BudgetNotEnough = 200143,

  /**
   * 不符合活動資格 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  NotQualified = 200144,

  /**
   * 会员注册区间-"您帐户注册日期不在本次活动范围内" https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  MemberRegisterDateNotInActivityRange = 200145,

  /**
   * 存款总数区间-"您的存款总数未达门槛，请前往存款" https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  DepositTotalAmountNotInActivityRange = 200146,

  /**
   * 注单判断-"您的有效投注未达门槛，请前往投注" https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  ValidBetAmountNotInActivityRange = 200147,

  /**
   * 不准相同IP https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  NotAllowSameIp = 200148,

  /**
   * 只准APP版参加-"本活动仅能通过APP申请" https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  OnlyAppCanApply = 200149,

  /**
   * 不再活動時間內 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  NotInActivityTime = 200150,

  /**
   * 使用者被後台設定成不能參加任何優惠-"很抱歉，您的账户不能参加本次活动" https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  UserCannotApplyAnyPromotion = 200151,

  /**
   * 已達領取次數上限 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #5
   */
  ApplyCountExceedLimit = 200155,

  /**
   * 存款次數未達門檻 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  DepositCountNotInActivityRange = 200205,

  /**
   * 會員輸未達門檻 (TODO) https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  MemberLoseNotInActivityRange = 200206,

  /**
   * 會員贏未達門檻 (TODO) https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  MemberWinNotInActivityRange = 200207,

  /**
   * 此活动限定首次存款用户，很抱歉，您的账户不能参加本次活动 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #13
   */
  FirstDepositOnly = 200212,

  /**
   * 此活动限定再次存款用户，很抱歉，您的账户不能参加本次活动 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #13
   */
  NextDepositOnly = 200213,

  /**
   * 會員幣別不符合 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  MemberCurrencyNotInActivityRange = 200215,

  /**
   * 優惠活動領取名稱重複 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  PromotionNameDuplicated = 200216,

  /**
   * 正在審核已提交的登記送審申請資料 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #5
   */
  PromotionDzPending = 200219,

  /**
   * 優惠活動領取名稱重複 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #5
   */
  PromotionDzNameDuplicated = 200304,

  /**
   * 領取優惠活動的會員未填寫姓名 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #3
   */
  PromotionMemberNameNotFilled = 200305,

  /**
   * 您未符合本活動參與條件，請詳見活動說明，謝謝
   */
  PromotionMemberNotQualified = 200309,

  /**
   * 会员单日有效投注(全部) https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #5
   */
  MemberValidBetAmountNotEnough = 200311,

  /**
   * 会员单日有效投注(體育) https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #5
   */
  MemberValidBetAmountSportNotEnough = 200312,

  /**
   * 会员累計有效投注(全部) https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #5
   */
  MemberTotalValidBetAmountNotEnough = 200313,

  /**
   * 会员累計有效投注(體育) https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #5
   */
  MemberTotalValidBetAmountSportNotEnough = 200314,

  /**
   * 取消進球
   * @external https://docs.google.com/spreadsheets/d/1_bvDa9KJU61_GvFQjzeuEPqKtSTHZ7702-WPiKszrVU/edit#gid=456605179&range=R465
   */
  GoalCancel = 200317,

  /**
   * 會員填寫手機 https://innotech.atlassian.net/wiki/spaces/BAC/pages/1474396163 1.
   */
  MemberPhoneNotFilled = 200318,

  /**
   * 會員完善信息 https://innotech.atlassian.net/wiki/spaces/BAC/pages/1474396163 1.
   */
  MemberInfoNotCompleted = 200319,

  /**
   * 活动尚未开始
   */
  PromotionNotStarted = 210001,

  /**
   * 郵箱未綁定
   */
  PromotionEmailNotBind = 210002,

  /**
   * 進球賽事會員投注額(體育), 會員不滿足此條件 https://innotech.atlassian.net/wiki/spaces/BAC/pages/47775789/- #5
   */
  MemberBetAmountInGoalMatchNotEnough = 210004,

  /**
   * 無法連接 C2C service https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #3
   */
  CtcServiceError = 300001,

  /**
   * C2C 黑名單 service https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #3
   */
  CtcServiceBlacklistError = 300002,

  /**
   * 檔案大小超過限制 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #6
   */
  CtcFileTooLarge = 300003,

  /**
   * 檔案文件格式錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #6
   */
  CtcFileFormatError = 300004,

  /**
   * 充值時間expired https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #6
   */
  CtcDepositTimeExpired = 300005,

  /**
   * CRM黑名單 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #2
   */
  CtcCrmBlacklist = 300006,

  /**
   * CRM後台的C2C存提開關已關閉 service https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #3
   */
  CtcCrmSwitchOff = 300007,

  /**
   * C2C錯誤提款時間 service https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #24
   */
  CtcWithdrawTimeError = 300008,

  /**
   * 前筆提現單「建單時間」未超過1分鐘 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #24
   */
  CtcWithdrawTimeNotOverOneMinute = 300009,

  /**
   * C2C service 回傳錯誤碼 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #25
   */
  CtcServiceErrorCode = 300010,

  /**
   * 不支援已選貨幣(只支援CNY) service https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #3
   */
  CtcCurrencyNotSupport = 300011,

  /**
   * C2C催促進度失敗 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #25
   */
  CtcWithdrawPInvestigateFailed = 300012,

  /**
   * 存款人姓名錯誤 https://innotech.atlassian.net/wiki/spaces/BAC/pages/2592473118/C2C #26
   */
  CtcDepositNameError = 300013,
  /**
   * 體育賽事不存在
   * @external https://innotech.atlassian.net/browse/IN-13342
   */
  SportGameNotExisted = 40001,
  /**
   * Ctc upload s3 failed
   * @external https://innotech.atlassian.net/browse/IN-28175
   */
  CtcS3UploadFailed = 7130034,
}

export enum I18nServerErrorCode {
  ParamsError = 'COM-0000015',
  ServerError = 'RED-0000022',
  ServerError2 = 'RED-0000023',
}

/**
 * @external https://innotech.atlassian.net/wiki/spaces/GDIM/pages/2600861701/Error+Code
 */
export enum ImSocketErrorCode {
  Unknown = 1001,
  NotFound = 1002,
  NotFoundExecutable = 1003,
  SystemMaintenance = 1004,
  SettingParameterError = 1005,
  RequestParameterError = 2001,
  RequestParameterParseError = 2002,
  RequestPageError = 2003,
  ParseError = 2004,
  TimeZoneParseError = 2005,
  FrequentOperation = 2006,
  RequestParameterValidationFailed = 2007,
  FormatConversionError = 3001,
  RepoParameterError = 3002,
  LoginVerificationFailed = 4002,
  ConnectionInterrupted = 4003,
  UnknownCommand = 4004,
  MessageTooFrequent = 4005,
  LengthTooLong = 4006,
  VipLevelNotEnough = 4007,
  InsufficientAmount = 4008,
}
