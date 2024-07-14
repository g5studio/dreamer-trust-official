import useGoogleLogin from './use-google-login';
import { JSX } from 'solid-js';

interface IGoogleLoginPluginsProps {
  onSuccess: (response: { code: string }) => void;
  onFailure: (response: any) => void;
  clientId: string;
  cookiePolicy?: string;
  loginHint?: string;
  hostedDomain?: string;
  autoLoad?: boolean;
  isSignedIn?: boolean;
  fetchBasicProfile?: boolean;
  redirectUri?: string;
  discoveryDocs?: string[];
  uxMode?: string;

  scope?: string;
  accessType?: string;
  responseType?: string;
  jsSrc?: string;
  prompt?: string;
  render?: (props: { onClick: (e?: Event) => void; disabled: boolean }) => JSX.Element;
}

const GoogleLoginPlugins = (props: Partial<IGoogleLoginPluginsProps>) => {
  const { signIn, loaded } = useGoogleLogin({
    onSuccess: props.onSuccess,
    onAutoLoadFinished: () => {},
    onRequest: () => {},
    onFailure: props.onFailure,
    onScriptLoadFailure: () => {},
    clientId: props.clientId,
    cookiePolicy: props.cookiePolicy,
    loginHint: props.loginHint,
    hostedDomain: props.hostedDomain,
    autoLoad: props.autoLoad,
    isSignedIn: props.isSignedIn,
    fetchBasicProfile: props.fetchBasicProfile,
    redirectUri: props.redirectUri,
    discoveryDocs: props.discoveryDocs,
    uxMode: props.uxMode,
    scope: props.scope,
    accessType: props.accessType,
    responseType: props.responseType,
    jsSrc: props.jsSrc,
    prompt: props.prompt,
  });
  const disabled = !loaded;

  if (props.render) {
    return props.render({ onClick: signIn, disabled });
  }
};
export default GoogleLoginPlugins;
