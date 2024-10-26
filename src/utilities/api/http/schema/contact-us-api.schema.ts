export enum Need {
  TrustService = 'TrustService',
  EstatePlanning = 'EstatePlanning',
  AssetManagement = 'AssetManagement',
  CorporateService = 'CorporateService',
}

export interface IApiContactUsInput {
  name: string;
  company: string;
  email: string;
  mobileCountryCode: string;
  mobileNumber: string;
  needs: Need[];
  comments: string;
}
