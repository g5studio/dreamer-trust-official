import { TopicDependency } from '@shared/enums';
import { I18nServerErrorCode, ServerErrorCode } from '@shared/enums/server-error.enum';

export interface IBaseApiError {
  error: unknown;
}

export interface IBaseI18nApiResponse<Data = unknown> {
  reason: I18nServerErrorCode;
  data: Data;
}

export interface IBaseApiResponse<Data = unknown> {
  msg: string;
  code: ServerErrorCode;
  data: Data;
  time: number;
  traceId: string;
}

export type ApiEmptyBody = PartialRecord<string, never>;

export interface IApiPagination {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalCount: number;
  totalPages: number;
}

export interface IApiCursorPagination {
  nextCursor?: string;
  previousCursor?: string;
}

export interface IApiCommunicationSoftwareInfo {
  /**
   * 通訊軟體類型
   */
  communicationType: number;
  /**
   * 通訊軟體名稱
   */
  communicationName: string;
  /**
   * 通訊軟體帳號
   */
  communicationAccount: string;
}

export interface ITopicSetting<T, U = undefined> {
  dependency: TopicDependency[];
  topic: (params: U) => string;
  isMatch: (path: string) => boolean;
  type?: T;
}

export interface IApiImPager {
  pageIdx: number;
  pageSize: number;
  totalPage: number;
  totalRow: number;
}
