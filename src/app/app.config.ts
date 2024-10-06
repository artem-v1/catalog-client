import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'catalog',
        clientId: 'catalog-client-keycloak-id'
      },
      initOptions: {
        checkLoginIframe: false,
        onLoad: 'check-sso', // 'login-required' , 'check-sso'
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      },
      enableBearerInterceptor: true
    });
}

export  const  appConfig : ApplicationConfig = { 
  providers : [ 
    provideRouter (routes), 
    { 
      provide : APP_INITIALIZER , 
      useFactory : initializeKeycloak, 
      multi : true , 
      deps : [ KeycloakService ] 
    }, 
    KeycloakService , 
    { 
      provide : HTTP_INTERCEPTORS , 
      useClass : KeycloakBearerInterceptor , 
      multi : true
     } 
  ] 
};
