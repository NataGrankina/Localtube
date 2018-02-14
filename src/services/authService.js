/* eslint-disable no-undef */
import {
  GOOGLE_API_KEY,
  GOOGLE_API_CLIENT_ID,
  GAPI_YOUTUBE_URL,
  GOOGLE_API_SCOPE
} from 'config';

// Singletone for Auth instance incapsulated in servise clojure
let googleAuth;

function getGoogleAuthInfo(googleUser) {
  const isAuthorized = googleUser.hasGrantedScopes(GOOGLE_API_SCOPE);
  const user = isAuthorized
    ? {
      picture: googleUser.w3.Paa,
      nickname: googleUser.w3.ig
    }
    : null;
  const token = isAuthorized
    ? `${googleUser.Zi.token_type} ${googleUser.Zi.access_token}`
    : null;

  return { user, isAuthorized, token };
}

function initGoogleApi() {
  const clientInitPromise = new Promise((resolve) => {
    gapi.load('client:auth2', () => {
      resolve(gapi.client.init({
        apiKey: GOOGLE_API_KEY,
        discoveryDocs: [GAPI_YOUTUBE_URL],
        clientId: GOOGLE_API_CLIENT_ID,
        scope: GOOGLE_API_SCOPE
      }));
    });
  });

  return clientInitPromise.then(() => {
    googleAuth = gapi.auth2.getAuthInstance();

    // Handle initial sign-in state. (Determine if user is already signed in.)
    return getGoogleAuthInfo(googleAuth.currentUser.get());
  });
}

export function signIn() {
  return googleAuth.signIn().then(getGoogleAuthInfo);
}

export function signOut() {
  return googleAuth.signOut();
}

export default {
  initGoogleApi,
  signIn,
  signOut
};
