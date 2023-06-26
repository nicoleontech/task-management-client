import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  keycloak: Keycloak = new Keycloak({
    url: 'http://localhost:8088/auth',
    realm: 'Task-management',
    clientId: 'task-management-spa',
  });

  private token: string = '';

  constructor() {}

  initKeycloak(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.keycloak
        .init({
          onLoad: 'login-required',
          silentCheckSsoRedirectUri:
            window.location.origin + '/assets/silent-check-sso.html',
          redirectUri: window.location.origin,
        })
        .then((authenticated) => {
          if (authenticated) {
            this.token = this.keycloak.token!;
          }
          resolve(authenticated);
        })
        .catch((err) => reject(err));
    });
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean | undefined {
    return this.keycloak.authenticated;
  }

  logout() {
    this.keycloak.logout({ redirectUri: window.location.origin });
  }

  updateToken() {
    return this.keycloak.updateToken(480);
  }
}
