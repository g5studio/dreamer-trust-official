import { pyStr, pyValue } from '@shared/constants/pinyin.constants';
import { createSignal } from 'solid-js';

const convertPY = (chrStr: string) => {
  if (chrStr == null || chrStr.length === 0) return '';
  const tmpChr = chrStr.charAt(0);

  // 用Unicode 編碼判斷是否為特殊符號和英數
  if (chrStr.charCodeAt(0) <= 255) {
    return {
      isChinese: false,
      character: tmpChr,
    };
  }

  for (let i = 0; i < pyStr.length; i++) {
    if (pyStr[i].indexOf(tmpChr) >= 0) {
      return {
        isChinese: true,
        character: pyValue[i],
      };
    }
  }
  return null;
};

const convertPYs = (str: string) => {
  const arr = str.split('');
  const arrPY: string[] = [];
  const arrPYS: string[] = [];
  let wordWithSpace = '';

  for (let i = 0; i < arr.length; i++) {
    const ssht = convertPY(arr[i]);
    if (ssht) {
      if (ssht.isChinese) {
        wordWithSpace += ssht.character + (i + 1 === arr.length ? '' : ' ');
      } else {
        wordWithSpace += ssht.character;
      }
      arrPY.push(ssht.character);
      arrPYS.push(ssht.character.charAt(0));
    }
  }
  return [arrPY.join(''), arrPYS.join(''), wordWithSpace, str];
};

interface Dictionary {
  wholeWord: string;
  firstWord: string;
  wholeWordWithSpace: string;
  origin: string;
}

export function usePinyin() {
  const [dictionaryList, setDictionaryList] = createSignal<Dictionary[]>([]);
  const cacheRecord = new Set();

  const search = (keyword: string) => {
    const normalizedKeyword = keyword.replace(/\s/g, '');
    const lowerKeyword = normalizedKeyword.toLocaleLowerCase();
    const match: string[] = [];
    const dictionaryListInstance = dictionaryList();
    for (let i = 0; i < dictionaryListInstance.length; i++) {
      const league = dictionaryListInstance[i];
      if (
        league.wholeWord.toLocaleLowerCase().includes(lowerKeyword) ||
        league.firstWord.toLocaleLowerCase().includes(lowerKeyword) ||
        league.origin.toLocaleLowerCase().includes(lowerKeyword)
      ) {
        match.push(league.origin);
      }
    }
    return match;
  };

  const hasDictCached = (name: string) => {
    return cacheRecord.has(name);
  };

  const createDictionary = (source: string[] | string) => {
    if (Array.isArray(source)) {
      const newDict: Dictionary[] = [];
      const keyList = Object.keys(source);
      for (let i = 0; i < keyList.length; i++) {
        const name = source[i];
        if (typeof name === 'string' && !hasDictCached(name)) {
          const [wholeWord, firstWord, wholeWordWithSpace, origin] = convertPYs(name);
          cacheRecord.add(name);
          newDict.push({
            wholeWord,
            firstWord,
            wholeWordWithSpace,
            origin,
          });
        }
      }
      setDictionaryList((prev) => [...prev, ...newDict]);
    } else if (typeof source === 'string') {
      createDictionary([source]);
    }
  };

  return {
    search,
    createDictionary,
  };
}
