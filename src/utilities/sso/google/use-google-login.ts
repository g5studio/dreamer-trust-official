import { createEffect, createSignal, onCleanup } from 'solid-js';
import { gapi } from 'gapi-script';

const useGoogleLogin = (props) => {
  const [loaded, setLoaded] = createSignal(false);
  const [unmounted, setUnmounted] = createSignal(false);

  const handleSignInSuccess = (res: any) => {
    const basicProfile = res.getBasicProfile();
    const authResponse = res.getAuthResponse(true);
    const profile = {
      googleId: basicProfile.getId(),
      imageUrl: basicProfile.getImageUrl(),
      email: basicProfile.getEmail(),
      name: basicProfile.getName(),
      givenName: basicProfile.getGivenName(),
      familyName: basicProfile.getFamilyName(),
    };

    const response = {
      ...res,
      googleId: basicProfile.getId(),
      tokenObj: authResponse,
      tokenId: authResponse.id_token,
      accessToken: authResponse.access_token,
      profileObj: profile,
    };

    if (props.onSuccess) {
      props.onSuccess(response);
    }
  };

  function signIn(e: Event) {
    if (e) {
      e.preventDefault();
    }
    if (loaded()) {
      const GoogleAuth = gapi.auth2.getAuthInstance();
      const options = {
        prompt: props.prompt,
      };
      props.onRequest?.();
      if (props.responseType === 'code') {
        GoogleAuth.grantOfflineAccess(options).then(
          (res) => props.onSuccess(res),
          (err) => props.onFailure(err),
        );
      } else {
        GoogleAuth.signIn(options).then(
          (res) => handleSignInSuccess(res),
          (err) => props.onFailure(err),
        );
      }
    }
  }

  createEffect(() => {
    const onLoadFailure = props.onScriptLoadFailure || props.onFailure;
    const params = {
      client_id: props.clientId,
      cookie_policy: props.cookiePolicy,
      login_hint: props.loginHint,
      hosted_domain: props.hostedDomain,
      fetch_basic_profile: props.fetchBasicProfile,
      discoveryDocs: props.discoveryDocs,
      ux_mode: props.uxMode,
      redirect_uri: props.redirectUri,
      scope: props.scope,
      access_type: props.accessType,
    };

    if (props.responseType === 'code') {
      params.access_type = 'offline';
    }
    const isSignedIn = false;

    gapi.load('auth2', () => {
      const GoogleAuth = gapi.auth2.getAuthInstance();
      if (!GoogleAuth) {
        gapi.auth2.init(params).then(
          (res) => {
            if (!unmounted()) {
              setLoaded(true);
              const signedIn = isSignedIn && res.isSignedIn.get();
              props.onAutoLoadFinished?.(signedIn);
              if (signedIn) {
                handleSignInSuccess(res.currentUser.get());
              }
            }
          },
          (err) => {
            setLoaded(true);
            props.onAutoLoadFinished?.(false);
            onLoadFailure(err);
          },
        );
      } else {
        GoogleAuth.then(
          () => {
            if (unmounted()) {
              return;
            }
            if (isSignedIn && GoogleAuth.isSignedIn.get()) {
              setLoaded(true);
              props.onAutoLoadFinished?.(true);
              handleSignInSuccess(GoogleAuth.currentUser.get());
            } else {
              setLoaded(true);
              props.onAutoLoadFinished?.(false);
            }
          },
          (err) => {
            props.onFailure(err);
          },
        );
      }
    });
  });
  onCleanup(() => {
    setUnmounted(true);
  });

  return { signIn, loaded: loaded() };
};

export default useGoogleLogin;
