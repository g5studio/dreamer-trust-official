import { IApiCursorPagination, IBaseApiResponse } from '@shared/interfaces';
import { AxiosResponse } from 'axios';

interface IPager {
  pager: {
    pageIdx: number;
    pageSize: number;
    totalPage: number;
    totalRow: number;
  };
}

interface IPaging {
  paging: IApiCursorPagination;
}

export const getNextPage = <T extends IPager>(res: AxiosResponse<IBaseApiResponse<T>>) => {
  const pager = res?.data?.data?.pager;
  if (pager?.pageIdx && pager?.pageIdx < pager.totalPage) {
    return pager.pageIdx + 1;
  }
  return undefined;
};

export const getNextCursor = <T extends IPaging>(res: AxiosResponse<IBaseApiResponse<T>>) => {
  if (res?.data?.data?.paging?.nextCursor) {
    return res.data.data.paging.nextCursor;
  }
  return undefined;
};
