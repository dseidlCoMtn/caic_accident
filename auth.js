const auth = {
    auth0: null,
    init: async () => {
        auth.auth0 = await createAuth0Client(AUTH0_CONFIG);

        const isAuthenticated = await auth.auth0.isAuthenticated();

        if (isAuthenticated) {  // if you're already authed, quietly update the ui and move on
            window.history.replaceState({}, document.title, window.location.origin + window.location.pathname);
            auth.updateUI();
            return;
        }

        const query = window.location.search;

        if (query.includes("auth=true")) { // force a login, which will refresh the page and lose this query param
            auth.login();
            return;
        }

        const shouldParseResult = query.includes("code=") && query.includes("state=");

        if (shouldParseResult) { // you're not currently authed but you have all the info you need to auth
            try {
                await auth.auth0.handleRedirectCallback();
            } catch (err) {
                console.log("Error parsing redirect:", err);
            }

            window.history.replaceState({}, document.title, window.location.origin + window.location.pathname);
        }

        auth.updateUI();
    },
    login: async () => {
        try {
            await auth.auth0.loginWithRedirect({redirect_uri: window.location.origin + window.location.pathname});
        } catch (err) {
            console.log("Log in failed", err);
        }
    },
    logout: () => {
        try {
            auth.auth0.logout({returnTo: window.location.origin + window.location.pathname});
        } catch (err) {
            console.log("Log out failed", err);
        }
    },
    // conditionally renders the login button or the user's avatar based on auth state
    // NOTE: this is now vestigial and does nothing. it remains because i'm pretty sure they're going to reverse this decision
    // and shortly we'll have a UI to update again.
    updateUI: async () => {
        try {
            const isAuthenticated = await auth.auth0.isAuthenticated();

            if (isAuthenticated) {
                // if authed, show the little user icon in the upper left. click it to log out.
                const user = await auth.auth0.getUser();
                $('#auth-button')
                    .removeClass('hidden')
                    .html(`<img src="${user.picture}"/>`)
                    .click(auth.logout)
                    .tooltip();
                
                // make sure the other one stays hidden
                $('#home-button').addClass('hidden');
            } else {
                // else you're the public, show the CAIC logo so they can click it to go back to home.
                $('#home-button').removeClass('hidden');

                // make sure the other one stays hidden
                $('#auth-button').addClass('hidden');
            }
        } catch (err) {
            console.log("Error updating UI!", err);
            return;
        }
    },
    fetchCAICAuthHeaderWithToken: async () => {
        // auth0 will automatically use the same token from pageload if it's still not expired. otherwise, it will use your refresh
        // token to automatically get you a new access token. if that fails for some reason, it'll send you to the login page again.

        let header = {};

        // by this point, auth has already been initialized and if you wanted to be authed by now you would be.
        const isAuthenticated = await auth.auth0.isAuthenticated();
        if (isAuthenticated) {
            // if you've authed, get the token and create the header.
            try {
                const token = await auth.auth0.getTokenSilently({redirect_uri: window.location.origin + window.location.pathname});
                //const token = await auth.auth0.login();
                if (token) {
                    header['Authorization'] = `Bearer ${token}`;
                } else {
                    console.warn('Auth0 said you were logged in but the returned token was null!');
                }
            } catch (e) {
                // if you need to login again because your auth expired or you need to give further permissions,
                // we will automatically redirect you to the login page again.
                if (e.error === 'login_required' || e.error === 'consent_required') {
                    auth.login();
                }
                throw e;
            }
        }

        // either way, keep the UI up to date
        await auth.updateUI();

        return header;
    }
}