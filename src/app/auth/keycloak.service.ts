import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  authToken: string | undefined = '';
  constructor() {
    this.initKeycloak();
  }

  initKeycloak() {
    const keycloak = new Keycloak({
      url: 'http://localhost:8088/auth',
      realm: 'Task-management',
      clientId: 'task-management-spa',
    });
    keycloak
      .init({
        onLoad: 'login-required',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
        redirectUri: window.location.origin,
      })
      .then((authenticated) => {
        console.log(authenticated);
        if (authenticated) {
          this.authToken = keycloak.token;
          console.log('token', keycloak.token);
        }
      })
      .catch(function () {
        console.log('failed to initialize');
      });
  }

  getAuthorizationToken() {
    return this.authToken;
  }
}
