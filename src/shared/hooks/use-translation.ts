import { getTranslation } from '@shared/models/translation.model';
import { createRoot } from 'solid-js';

const {
  metaData: translation,
  changeLanguage,
  translate,
  updateDictionary,
  initialize: initDictionary,
} = createRoot(getTranslation);

export { translation, changeLanguage, translate, initDictionary, updateDictionary };
