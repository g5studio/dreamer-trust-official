import { encryptMd5 } from './md5.helper';

/**
 * 生成指定長度隨機字串
 * @param length 隨機字串長度
 * @returns 隨機字串
 */
export const generateRandomString = (length: number): string => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  while (text.length < length) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const parseTimestampFirst4Last6 = (timestamp: number) => {
  const timestampFirst4 = timestamp.toString().match(/^([0-9]{4})/)?.[0];
  const timestampLast6 = timestamp.toString().match(/([0-9]{6})$/)?.[0];
  if (!timestampFirst4 || !timestampLast6) throw Error('Timestamp RegexMatch fail');

  return [timestampFirst4, timestampLast6];
};

const parseHashFirst2Last3 = (hash: string) => {
  const hashFirst2 = hash.toString().match(/^(\w{2})/)?.[0];
  const hashLast3 = hash.toString().match(/(\w{3})$/)?.[0];
  if (!hashFirst2 || !hashLast3) throw Error('Hash RegexMatch fail');

  return [hashFirst2, hashLast3];
};

export const generateCKS = (timestamp: number, account: string, vendor: string) => {
  if (timestamp.toString().length !== 10) throw Error('Timestamp length must be 10');
  if (!account && account !== '') throw Error('Account is required');
  if (!vendor) throw Error('Vendor is required');

  const accountLowerCase = String(account).toLowerCase();
  const vendorLowerCase = String(vendor).toLowerCase();

  const [timestampFirst4, timestampLast6] = parseTimestampFirst4Last6(timestamp);

  const key = `${timestampFirst4}${vendorLowerCase}${accountLowerCase}${timestampLast6}`;
  const hash = encryptMd5(key);

  const [hashFirst2, hashLast3] = parseHashFirst2Last3(hash);

  const cks = `${timestamp}${hashFirst2}${hashLast3}`;

  return cks;
};
