import md5Lib from 'md5';

const md5 = () => md5Lib as (arg: string) => string;

export const encryptMd5 = (pwd: string): string => md5()(pwd);

// export const encryptSportCartSingleTransId = (key: string): string =>
//   md5()(`${key}|${user.token.sport}|${new Date().getTime().toString()}`);
