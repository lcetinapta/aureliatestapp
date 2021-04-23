import { OpenIdConnectConfiguration } from "aurelia-open-id-connect";
import { UserManagerSettings, WebStorageStateStore } from "oidc-client";
import environment from "environment";

let appHost = environment.AppHost;
let authServer = environment.Identityserver;

export default {
    loginRedirectRoute: "/",
    logoutRedirectRoute: "/",
    unauthorizedRedirectRoute: "/",
    userManagerSettings: {

        // The number of seconds in advance of access token expiry
        // to raise the access token expiring event.
        accessTokenExpiringNotificationTime: 1,

        // Either host your own OpenID Provider or select a certified authority
        // from the list http://openid.net/certification/
        authority: authServer,

        automaticSilentRenew: true,

        // IdentityServer4 supports OpenID Connect Session Management
        // https://openid.net/specs/openid-connect-session-1_0.html
        monitorSession: true,
        checkSessionInterval: 2000,

        // The client or application ID that the authority issues.
        client_id: "WebClient",

        filterProtocolClaims: true,
        loadUserInfo: true, 
        post_logout_redirect_uri: `${ appHost }/signout-oidc`,
        redirect_uri: `${ appHost }/signin-oidc`,
        response_type: "code",
        scope: "openid offline_access profile ChatHub AdministrationApi Tickets Notifications",
        // number of millisecods to wait for the authorization
        // server to response to silent renew request
        silentRequestTimeout: 10000,
        silent_redirect_uri: `${ appHost }/signin-oidc`,
        userStore: new WebStorageStateStore({
            prefix: "oidc",
            store: window.localStorage,
        }),
    } as UserManagerSettings,
} as OpenIdConnectConfiguration;
