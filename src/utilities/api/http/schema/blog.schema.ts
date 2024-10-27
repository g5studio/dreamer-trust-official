import { Language } from '@shared/enums';

export enum Need {
  TrustService = 'TrustService',
  EstatePlanning = 'EstatePlanning',
  AssetManagement = 'AssetManagement',
  CorporateService = 'CorporateService',
}

export interface IApiBlog {
  id: string;
  title: string;
  subTitle: string;
  author: string;
  publishDate: string;
  mainImageUrl: string;
  content: string;
}

export interface IApiBlogListSearchParams {
  language: Language;
}

export interface IApiBlogSearchParams extends IApiBlogListSearchParams {
  id: string;
}
