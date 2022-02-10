import UAuth from '@uauth/js';

export const BASE_URL = '';

export const uauth = new UAuth({
    // These can be copied from the bottom of your app's configuration page on unstoppabledomains.com.
    clientID: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,

    // These are the scopes your app is requesting from the ud server.
    scope: 'openid email wallet',

    // This is the url that the auth server will redirect back to after every authorization attempt.
    redirectUri: process.env.REACT_APP_REDIRECT_URI,

    // OPTIONAL: This is the url that the auth server will redirect back to after
    // logging out. If not included, as in this example, the authorization is just
    // removed from the cache when uauth.logout is called.
    // postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI,
  }) 
