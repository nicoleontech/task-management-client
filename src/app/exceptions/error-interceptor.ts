import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ErrorHandlingService } from "./error-handling.service";
import { Observable, catchError, throwError } from "rxjs";



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private errorHandlingService: ErrorHandlingService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(request)
            .pipe(catchError((error: HttpErrorResponse) => {
                this.errorHandlingService.handleHttpError(error);
                return throwError(() => new Error("error"));
            }))
    }
}