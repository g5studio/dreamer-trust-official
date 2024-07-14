import { LocaleDash } from '@shared/enums';
import { useLocalAssets } from '@shared/hooks/use-local-asset';
import { usePinyin } from '@shared/hooks/use-pinyin';
import { translation } from '@shared/hooks/use-translation';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { jsonData } from '@utilities/helpers/asset.helper';
import { debounce } from '@utilities/helpers/utilities.helper';
import { Accessor, JSXElement, createEffect, createSignal } from 'solid-js';

interface IMatchSearchData {
  pinYin: Accessor<string[]>;
  handleSearch: (e: KeyboardEvent, canSearchNullValue?: boolean) => void;
  handleComposition: (e: CompositionEvent) => void;
  inputHandler: (value: string) => void;
  resetSearchValue: () => void;
}

interface IMatchSearchProps extends IBaseComponentProps {
  handleSearchAction: (searchKey: string) => void;
  onSetInputRefValue: (value: string) => void;
  component: (matchSearchData: IMatchSearchData) => JSXElement;
}

const MatchSearch = (props: IMatchSearchProps) => {
  const [onComposition, setOnComposition] = createSignal(false);
  const [pinYin, setPinYin] = createSignal<string[]>([]);

  const { search, createDictionary } = usePinyin();

  const resetSearchValue = () => {
    props.onSetInputRefValue('');
    setPinYin([]);
  };

  const handleSearch = (e: KeyboardEvent, canSearchNullValue: boolean = false) => {
    if (e.key === 'Enter') {
      const searchKey = (e.target as HTMLInputElement).value;
      if (typeof searchKey !== 'string' || (!searchKey.trim() && !canSearchNullValue)) return;
      props.handleSearchAction(searchKey);
    }
  };

  const handleComposition = (e: CompositionEvent) => {
    const target = e?.target as HTMLInputElement;
    if (e.type === 'compositionend') {
      props.onSetInputRefValue(target?.value ?? '');
      setOnComposition(false);
    } else {
      setOnComposition(true);
    }
  };

  // this is a callback function and don't need reactivity
  // eslint-disable-next-line solid/reactivity
  const inputHandler = debounce((value: string) => {
    if (!onComposition()) {
      if (value.trim()) {
        setPinYin(search(value.trim()));
        return;
      }
      setPinYin([]);
    }
  }, 300);

  const jsonUrl = useLocalAssets(() => '/search/sport-fuzzy-search-dictionary.json');
  const fuzzySearchDictionaryAccessor = jsonData<{ cn: string[]; en: string[] }>(jsonUrl);

  createEffect(() => {
    const fuzzySearchData = fuzzySearchDictionaryAccessor();
    const isZh = translation.language === LocaleDash.zh_CN || translation.language === LocaleDash.zh_HK;
    createDictionary((isZh ? fuzzySearchData?.cn : fuzzySearchData?.en) ?? []);
  });

  return (
    <>
      {props.component({
        pinYin,
        handleSearch,
        handleComposition,
        inputHandler,
        resetSearchValue,
      })}
    </>
  );
};

export default MatchSearch;
