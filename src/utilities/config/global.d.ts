type CheckFn = () => boolean;
type ArrowFn<Arg, ReturnValue = void> = (arg: Arg) => ReturnValue;
type MultipleArgsArrowFn<Args extends Array, ReturnValue = void> = (...args: Args) => ReturnValue;
type NavigatorTheme = Record<'memberCenter' | 'login' | 'register' | 'default', string>;
type PartialRecord<K, T> = Partial<Record<K, T>>;

declare interface Window {
  gtag?: MultipleArgsArrowFn<unknown[], void>;
  fbq?: MultipleArgsArrowFn<unknown[], void>;
  subscribeIsOnline?: (callback: (isOnline: boolean) => void) => () => void;
}
