import { Language } from '@shared/enums';

export interface IApiQuestion {
  question: string;
  answer: string;
}

export interface IApiQuestionListSearchParams {
  language: Language;
}
