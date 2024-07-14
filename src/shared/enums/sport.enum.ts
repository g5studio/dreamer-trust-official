/**
 * 主客隊伍
 */
export enum SportHATeam {
  /** 主隊 */
  Home = 'home',
  /** 客隊 */
  Away = 'away',
}

export enum SportBadgeType {
  /** 區域 id ==> cid */
  Categories = 1,
  /** 聯賽 id ==> tid */
  Tournaments = 2,
  /** 隊伍 id ==> homeId | awayId */
  Competitors = 3,
  /** 國旗(網球國旗) cid ==> homeId | awayId */
  Countryflags = 4,
}

/**
 * 賽事分類
 */
export enum SportGameCategory {
  /** 滾球 */
  Inplay = 'inplay',
  /** 即將 */
  Incoming = 'incoming',
  /** 早盤 */
  Early = 'early',
  /** 串場 */
  Parlay = 'parlay',
  /** 冠軍 */
  Outright = 'outright',
}

export enum SportGameMainSessionCategory {
  /** 滾球 */
  Inplay = 1,
  /** 聯賽 */
  League = 2,
  /** 精選 */
  Featured = 3,
  /** 即將 */
  Incoming = 4,
}

/**
 * 賽事分類縮寫
 */
export enum SportGameCategoryAbbr {
  /** 滾球 */
  Inplay = 'ipc',
  /** 即將 */
  Incoming = 'imc',
  /** 早盤 */
  Early = 'pc',
  /** 串場 */
  Parlay = 'psc',
  /** 冠軍 */
  Outright = 'orc',
}

/**
 * 賽事球種
 */
export enum SportCategory {
  /** 足球 */
  Football = 'football',
  /** 籃球 */
  Basketball = 'basketball',
  /** 網球 */
  Tennis = 'tennis',
  /** 棒球 */
  Baseball = 'baseball',
}

export enum SportMatchType {
  Regular = 'regular',
  Outright = 'outright',
}

/**
 * 0:全部,1:单注,2.串场,3.冠军
 */
export enum SportOrderDataType {
  /**
   * 全部
   */
  All = 0,
  /**
   * 单注
   */
  Single,
  /**
   * 串场
   */
  Parlay,
  /**
   * 冠军
   */
  Outright,
}

/**
 * (NORMAL：一般進球、CORNER：角球、BOOKING：罰牌數)
 */
export enum ScoreType {
  /** 一般進球 */
  Normal = 'NORMAL',
  /** 角球 */
  Corner = 'CORNER',
  /** 罰牌數 */
  Booking = 'BOOKING',
}

/**
 * 0-未定義  1-滾球  2-即將  3-今日  4-早盤
 */
export enum SportOrderPhase {
  /** 未定義 */
  Undefined = 0,
  /** 滾球 */
  Inplay = 1,
  /** 即將 */
  Incoming = 2,
  /** 今日 */
  Today = 3,
  /** 早盤 */
  Early = 4,
}

export enum OtherLottieTabs {
  /** 廣場入口 */
  IM = 'im',
  /** 娛樂城入口 */
  Casino = 'casino',
  /** 比分網入口 */
  Score = 'sscore',
  /** 推廣活動入口 */
  Promotions = 'promotions',
  /** 頂級贊助入口 */
  Sponsor = 'sponsors',
  /** 收藏賽事入口 */
  FavoriteAll = 'favoriteAll',
  /** 群星助陣(vd001 ) */
  AllStar = 'allStar',
  /** 品牌大使(vd001 ) */
  Endorse = 'endorse',
  /** 合作夥伴 - 拉齊奧足球俱樂部(vd004)、曼城足球俱樂部(vd001) */
  Manchester = 'manchester',
  /** 合作夥伴 - 摩納哥(vd004) */
  Monaco = 'monaco',
  /** 合作夥伴 - 沃爾夫斯堡(vd004) */
  Wolfsburg = 'wolfsburg',
  /** 合作夥伴 - 狼隊(vd004) */
  Wolf = 'wolf',
  /** 合作夥伴 - 萊斯特城 */
  Leicester = 'leicester',
  /** 廣場入口 */
  Roma = 'roma',
  /** 廣場入口 */
  Bilbao = 'bilbao',
  /** 廣場入口 */
  Sevilla = 'sevilla',
  /** 廣場入口 */
  Partnership = 'partnership',
  /** 合作夥伴 - 皇家马德里(vd007) */
  RealMadrid = 'realMadrid',
  /** 合作夥伴 - 波鸿(vd007) */
  Bochum = 'bochum',
  /** 合作夥伴 - 美因茨(vd007) */
  Mainz = 'mainz',
  /** 合作夥伴 - 云达不莱梅 (vd007) */
  WerderBremen = 'werderBremen',
  /** 合作夥伴 - 门兴格拉德巴赫(vd007) */
  Monchengladbach = 'monchengladbach',
  /** Euro Cup入口 */
  EuroCup = 'euroCup',
}

export enum SportMarketType {
  /** 歐洲盤 */
  EU = 'EU',
  /** 香港盤 */
  HK = 'HK',
  /** 馬來盤 */
  ML = 'ML',
  /** 印尼盤 */
  IN = 'IN',
}

export enum SportMarket {
  /** 主隊 */
  Home,
  /** 客隊 */
  Away,
  /** 和 */
  draw,
}

/** 體育全域設置事件 */
export enum SportGlobalSettingAction {
  /** 更新賽事事件 */
  UpdateGameEvent = 1,
  /** 更新推薦賽事事件 */
  UpdatePopularGameEvent,
  /** 更新體育開關事件 */
  UpdateSportBallSwitch,
  /** 更新盤口開關事件 */
  UpdateGameHandicapSwitch,
  /** 更新體育頁面設計 */
  UpdateSportPagePattern,
  /** 更新投注盤口設置 */
  UpdateBetSetting,
  /** 更新推送提示音開關 */
  UpdateSoundSwitch,
  /** 更新推送提示音類型 */
  UpdateSoundType,
  /** 更新賠率偏好設定 */
  UpdateReceiveType,
  /** 更新盤口玩法設定 */
  UpdateBetsMarketOption,
  /** 更新聯賽等級設定 */
  UpdateBetsTourLevel,
  /** 更新全域限額設定 */
  UpdateBetsLimitOption,
  /** 更新聯賽&賽事限額設定 */
  UpdateBetsLimitOptionMatch,
  /** 更新個人限額設定 */
  UpdateBetsUserLimitOption,
  /** 更新單場限額設定 */
  UpdateBetsMatchLimit,
  /** 更新個人單場限額設定 */
  UpdateBetsUserMatchLimit,
  /** 串場早盤日期列表 */
  UpdateDateList,
  /** 更新盤口模樣 */
  UpdateSimpleMatchMode,
  /** 更新球種盤口排序 (亞洲盤) */
  UpdateAsiaSimpleSortType,
  /** 更新球種盤口排序 (國際盤) */
  UpdateInterSimpleSortType,
  /** 更新不同球種半全場設定 (亞洲盤) */
  UpdateAsiaSimpleRule,
  /** 更新不同球種盤odds offset (亞洲盤) */
  UpdateAsiaSimplePartialOdds,
  /** 更新不同球種盤odds offset (國際盤) */
  UpdateInterSimplePartialOdds,
  /** 更新全域限額設定緩存 */
  UpdateBetsLimitOptionCache,
  /** 更新單場限額設定緩存 */
  UpdateBetsMatchLimitCache,
  /** 獲取全域限額設定緩存 */
  GetBetsLimitOption,
  /** 獲取單場限額設定緩存 */
  GetBetsMatchLimit,
  /** 清除個人限額 */
  ClearUserLimit,
}
