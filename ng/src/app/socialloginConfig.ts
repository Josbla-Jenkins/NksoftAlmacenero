import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider } from "angular5-social-login";

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("295664713247-jac7899ug6fkdhm6o9sr1i7dm3pk40l7.apps.googleusercontent.com")
    }]);
    
    return config;
}