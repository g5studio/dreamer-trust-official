import { ErrorType } from '@shared/enums/common.enum';

type LogProps<T = unknown> = {
  msg: string;
  params?: T;
};

export class Log {
  static systemStyle = 'color: #0aa03d;';

  static errorStyle = 'color: #c01818;';

  static infoStyle = 'color: #ff7a00; background: #000000';

  /**
   * System Log
   * @description dev , qa , stg, uat
   * @param param0 訊息類型與內容
   */
  public static system = ({ msg, params }: LogProps): void => {
    console.log(`%c[System]: ${msg}`, this.systemStyle);
    this.printParams(params, this.systemStyle);
  };

  /**
   * Error Log
   * @param param0 訊息類型與內容
   * @param type 錯誤訊息種類
   */
  public static error = ({ msg, params }: LogProps, type: ErrorType = ErrorType.System) => {
    console.error(`[${type} error]: ${msg}`);
    this.printParams(params, this.errorStyle);
  };

  /**
   * Info Log
   * @description dev
   * @param param0 訊息類型與內容
   */
  public static info = ({ msg, params }: LogProps) => {
    console.log(`%c[Info]: ${msg}`, this.infoStyle);
    this.printParams(params, this.infoStyle);
  };

  public static printParams(params: any, style: string) {
    if (params) {
      console.groupCollapsed('%cRead More', style);
      console.info(params);
      console.groupEnd();
    }
  }
}
