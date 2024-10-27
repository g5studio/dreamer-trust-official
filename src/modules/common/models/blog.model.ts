import { TimeStamp } from '@shared/interfaces';
import { IBaseModel } from '@shared/interfaces/base-model.interface';
import { IApiBlog } from '@utilities/api/http/schema/blog.schema';
import { getTimeStamp } from '@utilities/helpers/time.helper';
import { createStore, reconcile } from 'solid-js/store';

type Blog = {
  id: string;
  publishTime: TimeStamp;
  title: string;
  subTitle: string;
  author: string;
  mainImageUrl: string;
  content: string;
};

export interface IBlog extends IBaseModel<unknown, Blog> {}

export const getBlog = (): IBlog => {
  const initialData = (): Blog => ({}) as Blog;
  const [metaData, setData] = createStore<Blog>(initialData());

  // !no need to change
  const updateData = (data: Partial<Blog>) => {
    setData(data);
    return metaData;
  };

  // !no need to change
  const reset = () => {
    setData(reconcile(initialData()));
  };

  // TODO mapping your api data here , you should reassign the value event if the field name are the same between api schema and model interface , please remove this line before commit
  const initialize = (apiResponse: IApiBlog) => {
    const { publishDate, subTitle, content, id, mainImageUrl, title, author } = apiResponse;

    updateData({
      id,
      publishTime: getTimeStamp(publishDate),
      title,
      subTitle,
      content,
      author,
      mainImageUrl,
    });
  };

  return { metaData, updateData, initialize, reset };
};
