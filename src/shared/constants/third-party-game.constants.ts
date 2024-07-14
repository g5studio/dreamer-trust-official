import { ThirdpartyProvider } from '@shared/enums';

export const alwaysOpen = 'always_open';

export const thirdGamesGroup = {
  live: [
    ThirdpartyProvider.AGLive,
    ThirdpartyProvider.BGLive,
    ThirdpartyProvider.DBLive,
    ThirdpartyProvider.XBBLive,
    ThirdpartyProvider.EVOLive,
    ThirdpartyProvider.EzugiLive,
    ThirdpartyProvider.AELive,
    ThirdpartyProvider.BBINLive,
  ],
  fish: [ThirdpartyProvider.AGFishing, ThirdpartyProvider.KSFishing, ThirdpartyProvider.JDBFishing],
  slot: [
    ThirdpartyProvider.MG,
    ThirdpartyProvider.DT,
    ThirdpartyProvider.CQ9Slot,
    ThirdpartyProvider.PGSlot,
    ThirdpartyProvider.PTSlot,
    ThirdpartyProvider.JDBSlot,
    ThirdpartyProvider.PPSlot,
    ThirdpartyProvider.AGSlot,
    ThirdpartyProvider.BSSlot,
    ThirdpartyProvider.QUICK_SPIN_SLOT,
  ],
  chessCard: [ThirdpartyProvider.KYBoard, ThirdpartyProvider.V8Board, ThirdpartyProvider.LYBoard],
  eSport: [ThirdpartyProvider.AviaEGame, ThirdpartyProvider.TFESport],
  horseRacing: [ThirdpartyProvider.RCBHorse],
  lottery: [ThirdpartyProvider.INNOLottery],
};
