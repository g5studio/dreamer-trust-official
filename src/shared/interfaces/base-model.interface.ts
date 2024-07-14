export interface IBaseModel<ApiData, MetaData> {
  metaData: MetaData;
  /**
   * 模型初始建構式
   */
  initialize: (data: ApiData) => void;
  updateData: (data: Partial<MetaData>) => MetaData;
  reset: () => void;
}
