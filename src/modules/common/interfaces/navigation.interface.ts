/**
 * 記錄被選取的menu項目其寬度與位置
 * 用於呈現點擊後該menu項目的背景範圍大小與移動動畫
 */
export interface IBackgroundPosition extends Pick<DOMRect, 'left' | 'width'> {}
