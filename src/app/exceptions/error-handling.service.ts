import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable()
export class ErrorHandlingService {
    constructor() { }

    handleHttpError(error: HttpErrorResponse): void {
        const errorMessage = error.message || "An error occured";
        //display error message to the user
    }
}
