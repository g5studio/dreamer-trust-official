import { JSEncrypt } from 'jsencrypt';

export const encryptRSA = (pwd: string, publicKey: string) => {
  const key = `-----BEGIN PUBLIC KEY-----${publicKey}-----END PUBLIC KEY-----`;
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(key);

  return encrypt.encrypt(pwd) as string;
};
