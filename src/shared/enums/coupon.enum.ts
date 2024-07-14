export enum CouponCenterPageType {
  Credit = 'credit',
  Coupon = 'coupon',
}

export enum RestrictionsType {
  NotSupport = 0, // 不適用
  All = 1, // 全部
  DependencyGameLimit = 2, // 依照各遊戲限制設定
}

export enum CouponTicketType {
  /** 優惠券樣式: 通用 */
  Common = 0,
  /** 優惠券樣式: 體育 */
  Sport = 1,
  /** 優惠券樣式: 彩票 */
  Lottery = 2,
  /** 優惠券樣式: 單一彩票 & 單一球種 */
  Mixed = 3,
}

export enum LotteryType {
  '3d' = '3d',
  K3 = 'k3',
  Kl8 = 'kl8',
  Klsf = 'klsf',
  Lottery = 'lottery',
  Mvn = 'mvn',
  Nvn = 'nvn',
  Pcdd = 'pcdd',
  Pk10 = 'pk10',
  Six = 'six',
  Ssc = 'ssc',
  Svn = 'svn',
  Syxw = 'syxw',
  Vnmega = 'vnmega',
  Vnpower = 'vnpower',
}
