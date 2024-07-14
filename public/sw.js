import { clientsClaim } from 'workbox-core';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { Strategy } from 'workbox-strategies';

self.skipWaiting();
clientsClaim();
// remove index.html
precacheAndRoute(
  self.__WB_MANIFEST
    .filter(({ url }) => {
      return url.indexOf('index.html') === -1 && url.indexOf('-legacy') === -1;
    })
    .map(({ url, revision }) => {
      // url start with assets/
      const isStaticAsset = url.indexOf('assets/') === 0;
      const domain = 'SW_JS_RESOURCE_URL';
      // remove trailing slash
      const urlWithoutTrailingSlash = domain.replace(/\/$/, '');
      const normalizeUrl = isStaticAsset ? url.replace('assets/', `${urlWithoutTrailingSlash}/assets/`) : url;
      return {
        url: normalizeUrl,
        revision,
      };
    }),
);
cleanupOutdatedCaches();

class FallbackStrategy extends Strategy {
  async _handle(request, handler) {
    try {
      // try original request
      const response = await handler.fetchAndCachePut(request);
      if (response.status >= 200 && response.status <= 299) {
        return response;
      }
      throw new Error(response.statusText);
    } catch (error) {
      const cachedResponse = await handler.cacheMatch(request);
      try {
        // since we are unable to update sw.js once the domain is changed, we need to fetch the new domain from the api
        // find the pattern `var swFallbackUrl="{fallbackUrl}";` in the original html
        // this is the api that we need to fetch the redirect domain
        const text = await cachedResponse.text();
        const match = text.match(/swFallbackUrl="([^"]+)"/)[1];
        const res = await fetch(match);
        const json = res.json();
        const redirectDomain = json.redirectDomain;
        // try new domain
        const fallback = await handler.fetch(redirectDomain);
        if (fallback.status >= 200 && fallback.status <= 299) {
          // write the fallback to cache to make sure we can update the fetch api url
          await handler.cachePut(request, fallback.clone());
          return fallback;
        }
        throw new Error(fallback.statusText);
      } catch (error) {
        // try cache
        return cachedResponse;
      }
    }
  }
}

registerRoute(
  ({ sameOrigin, url }) => {
    // our page should only use the same origin
    const path = new URL(url).pathname;
    // path is empty or a pattern look like "/",  "/something/else" or "/something/else/some.html"
    return sameOrigin && /^\/([^.]*(\.html)?$)?$/.test(path);
  },
  new FallbackStrategy(),
  'GET',
);
