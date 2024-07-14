import { Currency, LocaleDash } from '@shared/enums';
import { JSXElement } from 'solid-js';

/**
 * 時間格式
 * https://docs.google.com/spreadsheets/d/1rMLVkDYYaQt6VlNw7yyPndBAPXkapjIoWcIU30DKvOY/edit#gid=0
 */
export type LocaleFormatTime = string;

export type Slot = () => JSXElement;

export interface ICurrencyCouponData {
  currency: Currency;
  couponSizeTotal?: number;
  creditAmountTotal?: number;
}

export interface HTMLVideoElementIOS extends HTMLVideoElement {
  mozRequestFullScreen?: () => void;
  webkitEnterFullScreen?: () => void;
}

export type Dictionary = Record<LocaleDash, PartialRecord<string, string>>;
