import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from './keycloak.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private keycloakService: KeycloakService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.keycloakService.isAuthenticated() &&
      this.keycloakService.keycloak.isTokenExpired(5)
    ) {
      this.keycloakService
        .updateToken()
        .then(() => this.addAuthHeader(request, next));
    }
    return this.addAuthHeader(request, next);
  }

  addAuthHeader(request: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.keycloakService.getToken();
    if (!authToken) {
      return next.handle(request);
    }

    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return next.handle(authRequest);
  }
}
