import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { BehaviorSubject } from 'rxjs';

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

  constructor() {
    console.log('calling init');
  }

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
          console.log(authenticated);
          if (authenticated) {
            this.token = this.keycloak.token!;
            console.log(this.token);
          }
          resolve(authenticated);
        })
        .catch((err) => reject(err));
    });
  }

  getToken(): string {
    console.log(this.token);

    return this.token;
  }

  isAuthenticated(): boolean | undefined {
    return this.keycloak.authenticated;
  }
}
