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

  onTokenExpired() {
    console.log(this.keycloak.isTokenExpired());
    console.log('expired ' + new Date());
    if (this.keycloak.isTokenExpired()) {
      this.keycloak
        .updateToken(5)
        .then((refreshed) => {
          if (refreshed) {
            console.log('refreshed ' + new Date());
          } else {
            console.log('not refreshed');
          }
        })
        .catch((err) => {
          console.error(
            ` ${err}: failed to refresh token or the session has expired`
          );
        });
    }
    return false;
  }

  logout() {
    this.keycloak.logout({ redirectUri: window.location.origin });
  }
}
