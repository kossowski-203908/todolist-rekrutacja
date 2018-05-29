import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/index';

@Injectable()
export class HttpErrorService {

  handleError(error: HttpErrorResponse) {
    let message = 'ERROR! ';
    switch (error.status) {
      case 400: {
        message += 'Bad request - incorrect value\n' + error.message;
        break;
      }
      case 401: {
        message += 'Unauthorized access\n' + error.message;
        break;
      }
      case 402: {
        message += 'Payment required\n' + error.message;
        break;
      }
      case 403: {
        message += 'Forbidden access\n' + error.message;
        break;
      }
      case 404: {
        message += 'Resource not found\n' + error.message;
        break;
      }
      default: {
        message += error.message || 'Server error';
      }
    }
    return throwError(message);
  }
}
