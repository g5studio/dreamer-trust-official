import { formatClasses } from '@utilities/helpers/format.helper';
import { IBaseComponentProps, Slot } from '@shared/interfaces';
import { Show, batch, createEffect, createSignal, on } from 'solid-js';
import { useLocalAssets } from '@shared/hooks/use-local-asset';
import { startsWith } from '@utilities/helpers/utilities.helper';
import { isLocalUrl } from '@utilities/helpers/asset.helper';
import { useLocalAssetExistence } from '@shared/hooks/use-local-asset-existence';

/**
 * Picture must support both webp and jpg/png
 * we have two types of url
 * 1. our local import assets
 * 2. vendor's assets
 *
 * our local import assets is very special, in development we use the local assets
 * but in production we use the same path with cdn asset domain to get the assets
 *
 * vendor's assets is very simple, we just use the url directly
 *
 * we display the webp if the browser support webp
 */
export interface IPictureProps extends IBaseComponentProps {
  src: string;
  webpSrc?: string;
  fallbackSrc?: string;
  fallbackSlot?: Slot;
  alt?: string;
  lazy?: boolean;
  classes?: string;
  width?: number;
  height?: number;
  pictureClasses?: string;
  draggable?: boolean;
  onError?: (value: boolean) => void;
  // some library like html-to-png doesn't support picture, only img is allowed
  pureImg?: boolean;
  onClick?: () => void;
  onLoad?: () => void;
}

const Picture = (props: IPictureProps) => {
  // reactive warning of this can be ignore
  // eslint-disable-next-line solid/reactivity
  const [isUsingFallbackSrc, setIsUsingFallbackSrc] = createSignal(false);
  const [isLoaded, setIsLoaded] = createSignal(false);
  const isLocalExist = useLocalAssetExistence(() => props.src);

  createEffect(
    on(
      () => props.src,
      (current, previous) => {
        if (current !== previous) {
          setIsUsingFallbackSrc(false);
        }
      },
    ),
  );

  const currentSrc = () => {
    if (
      (isUsingFallbackSrc() && props.fallbackSrc) ||
      (!props.src && props.fallbackSrc) ||
      (isLocalUrl(props.src) && !isLocalExist())
    ) {
      return props.fallbackSrc;
    }
    return props.src;
  };

  const onImageError = () => {
    if (props.fallbackSrc) {
      setIsUsingFallbackSrc(true);
    }
  };

  const localAssetUrl = useLocalAssets(() => {
    if (isLocalUrl(currentSrc())) {
      return currentSrc();
    }
    return undefined;
  });

  const webpLocalAssetUrl = useLocalAssets(() => {
    const url = props.webpSrc ?? currentSrc();
    const isLocalImage = isLocalUrl(url) && (url?.endsWith('.png') || url?.endsWith('.jpg'));
    if (isLocalImage) {
      return url?.replace(/(\.png|\.jpg)$/, '.webp');
    }
    return undefined;
  });

  const assetsUrl = () => {
    const isLocalImage = isLocalUrl(currentSrc());
    if (isLocalImage) {
      return localAssetUrl();
    }
    return currentSrc();
  };

  const webpUrl = () => {
    const isLocalImage = isLocalUrl(currentSrc());
    if (isLocalImage) {
      return webpLocalAssetUrl();
    }
    return props.webpSrc;
  };
  const imgSlot = () => (
    <>
      <img
        width={props.width}
        height={props.height}
        data-testid={props.testId}
        src={assetsUrl()}
        onError={() => {
          batch(() => {
            const currentUrl = assetsUrl();
            const isUsingFallbackSrcInstance = isUsingFallbackSrc();
            props.onError?.(isUsingFallbackSrcInstance);
            if (currentUrl && currentUrl === props.src && !isUsingFallbackSrcInstance) {
              onImageError();
            }
          });
        }}
        alt={props.alt}
        class={formatClasses(props.classes, {
          'cursor-pointer': !!props.onClick,
          hidden: !isLoaded(),
        })}
        loading={props.lazy ? 'lazy' : 'eager'}
        style={props.style}
        draggable={props.draggable ?? true}
        onClick={props.onClick}
        onLoad={() => {
          setIsLoaded(true);
          props.onLoad?.();
        }}
      />
      <Show when={!isLoaded()}>
        <Show fallback={<div class={props.classes} />} when={props.fallbackSlot}>
          {props.fallbackSlot?.()}
        </Show>
      </Show>
    </>
  );
  const isMixedProtocol = (url?: string) => {
    const hostProtocol = window.location.protocol;
    if (url && startsWith(url, 'http:') && hostProtocol === 'https:') {
      return true;
    }
    return false;
  };

  return (
    <Show
      when={assetsUrl()}
      fallback={
        <Show fallback={<div class={props.classes} />} when={props.fallbackSlot}>
          {props.fallbackSlot?.()}
        </Show>
      }>
      {/* picture doesn't support mixed-content image, change to pure image if the url start with http */}
      <Show when={!props.pureImg && !isMixedProtocol(assetsUrl())} fallback={imgSlot()}>
        <picture class={formatClasses(props.pictureClasses)}>
          <Show when={webpUrl()}>{(src) => <source srcset={src()} type="image/webp" />}</Show>
          {imgSlot()}
        </picture>
      </Show>
    </Show>
  );
};

export default Picture;
