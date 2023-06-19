import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlingService } from './error-handling.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { KeycloakService } from '../auth/keycloak.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private errorHandlingService: ErrorHandlingService,
    private keycloakService: KeycloakService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error) {
          switch (error.status) {
            case 401:
              console.error(error.status);
              this.keycloakService.logout();
              break;
            default:
              this.errorHandlingService.handleHttpError(error);
              console.log(error);
              break;
          }
        }
        return throwError(() => new Error('error'));
      })
    );
  }
}
