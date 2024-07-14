/**
 * PaymentMethod ID
 * https://docs.google.com/spreadsheets/d/1aRKOsxzALe2ewmH61585JkZBjJTOQCF8-hElnc9mUZU/edit?usp=sharing
 */
export enum PaymentMethodId {
  /** 银行卡汇款 */
  BankCard = 1,
  /** 支付寶入款帳戶 */
  Alipay_Account = 1101,
  /** 支付宝转卡 */
  Alipay_Transfer = 1102,
  /** 微信入款账户 */
  WeChat_Account = 1103,
  /** 微信转卡 */
  WeChat_Transfer = 1104,
  /** 云闪付转卡 */
  YunShanFu_Transfer = 1105,
  /** OVO扫码 */
  OVO_Scan = 1201,
  /** Dana扫码 */
  Dana_Scan = 1202,
  /** Gopay扫码 */
  Gopay_Scan = 1203,
  /** LinkAja扫码 */
  LinkAja_Scan = 1204,
  /** ZaloPay扫码 */
  ZaloPay_Scan = 1205,
  /** MomoPay扫码 */
  MomoPay_Scan = 1206,
  /** ViettelPay扫码 */
  ViettelPay_Scan = 1207,
  /** TrueMoney扫码 */
  TrueMoney_Scan = 1208,
  /** Napas扫码 */
  Napas_Scan = 1209,
  /** UPI 扫码 */
  UPI_Scan = 1210,
  /** Promptpay扫码 */
  Promptpay_Scan = 1211,
  /** 貴賓廳存款 */
  Vip_Room = 1301,
  /** 网银充值 */
  Bank_Recharge = 2001,
  /** 银行转账 */
  Bank_Transfer = 2002,
  /** 银行直连扫码 */
  Bank_QrCode = 2003,
  /** 充值卡 */
  RechargeCard = 2004,
  /** 充值卡存款 */
  RechargeCardDeposit = 2005,
  /** AstroPay */
  AstroPay = 2006,
  /** 支付宝 */
  Alipay = 2101,
  /** 微信 */
  WeChat_H5 = 2102,
  /** 云闪付转卡 */
  YunShanFu_Transfer_Card = 2103,
  /** 手机银行转帐 */
  MobileBank_Transfer = 2104,
  /** 银联扫码 */
  UnionPay_Scan = 2105,
  /** 京東 */
  JD_Scan = 2106,
  /** QQ直連(H5) */
  QQ_H5 = 2107,
  /** 购宝扫码 */
  GouBao_Scan = 2108,
  /** CGPAY */
  CGPAY_Scan = 2109,
  /** 數字人民幣 */
  E_CNY = 2110,
  /** 988pay */
  Pay988 = 2111,
  /** TOPAY */
  TOPAY = 2112,
  /** Taobao */
  TAOBAO = 2113,
  /** TikTok */
  TikTok = 2114,
  /** 代客充值 */
  Customized = 2119,
  /** EBPay錢包 */
  EBPay = 2120,
  /** KD錢包 */
  KD = 2121,
  /** V88Pay錢包 存款 */
  V88Pay = 2122,
  /** 雲支付 */
  Cloudpay = 2123,
  /** 钱能钱包 */
  Money = 2124,
  /** C币钱包 */
  CCoin = 2125,
  /** ABpay */
  ABpay = 2126,
  /** 波币钱包 */
  bobiPay = 2127,
  /** 福豆钱包 */
  FudouPay = 2129,
  /** 万币钱包 */
  wanbi = 2128,
  /** ZaloPay */
  ZaloPay = 2201,
  /** MomoPay */
  MomoPay = 2202,
  /** VietcomBank */
  VietcomBank = 2203,
  /** VietinbankiPay */
  VietinbankiPay = 2204,
  /** ViettelPay */
  ViettelPay = 2205,
  /** Promptpay */
  PromptPay = 2206,
  /** TrueMoney */
  TrueMoney = 2207,
  /** 電子錢包 */
  E_wallet = 2208,
  /** UPI */
  UPI = 2209,
  /** TNG */
  TNG = 2210,
  /** OVO */
  OVO = 2211,
  /** GoPay */
  GoPay = 2212,
  /** TPBank */
  TPBank = 2213,
  /** TechcomBank */
  Techcombank = 2214,
  /** PVBank */
  PVBank = 2215,
  /** VIBank */
  VIBank = 2216,
  /** MBBank */
  MBBank = 2217,
  /** DANA 存款 */
  DANA = 2218,
  /** LinkAja */
  LinkAja = 2219,
  /** BTC 存款 */
  BTC = 3001,
  /** ETH 存款 */
  ETH = 3002,
  /** LTC 存款 */
  LTC = 3003,
  /** DOGE 存款 */
  DOGE = 3004,
  /** BCH 存款 */
  BCH = 3005,
  /** DASH 存款 */
  DASH = 3006,
  /** ETC 存款 */
  ETC = 3007,
  /** TRX 存款 */
  TRX = 3008,
  /** USDT (OMNI) 存款 */
  // USDT = 3101,
  /** USDT (ERC20) 存款 */
  USDT_ERC20 = 3102,
  /** USDT (TRC20) 存款 */
  USDT_TRC20 = 3103,
  /** AAVE 存款 */
  AAVE = 3104,
  /** DAI 存款 */
  DAI = 3105,
  /** UNI 存款 */
  UNI = 3106,
  /** WBTC 存款 */
  WBTC_ERC20 = 3107,
  /** USDC(ERC20) 存款 */
  USDC_ERC20 = 3108,
  /** GOPAY錢包 存款 */
  GOPAY = 2115,
  /** OKPAY錢包 存款 */
  OKPAY = 2116,
  /** 翼支付 存款 */
  BestPay = 2117,
  /** 拼多多 存款 */
  Pinduoduo = 2118,
  /** ShopeePay錢包 存款 */
  ShopeePay = 2220,
  /** Alfamart錢包 存款 */
  Alfamart = 2221,
  /** Pix錢包 存款 */
  Pix = 2222,
  /** C2C 防冻结银行卡汇款 */
  C2C = 4001,
  /** xxpay錢包 存款 */
  XXPay = 2007,
  /** KOIPAY錢包 存款 */
  KOIPAY = 2130,
}
