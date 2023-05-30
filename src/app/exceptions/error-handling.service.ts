import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  constructor(private toastr: ToastrService) {}

  handleHttpError(error: HttpErrorResponse): void {
    const errorMessage = error.message || 'An error occured';
    //display error message to the user
    console.log(errorMessage);
    this.toastr.error(errorMessage, 'Error');
  }
}
