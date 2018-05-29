import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { HttpErrorService } from './http-error.service';
import { catchError } from 'rxjs/internal/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class HttpService {

  private domain = 'http://autumn-field-3316.getsandbox.com/';

  constructor(
    private http: HttpClient,
    private httpErrorService: HttpErrorService
  ) {}

  get<T>(endpoint: string, optionalHttpOptions = {}): Observable<T> {
    return this.http.get<T>(this.domain + endpoint, {
      ...httpOptions,
      ...optionalHttpOptions
    }).pipe(
      catchError(this.httpErrorService.handleError)
    );
  }

  post<T>(endpoint: string, body, optionalHttpOptions = {}): Observable<T> {
    return this.http.post<T>(this.domain + endpoint, body, {
      ...httpOptions,
      ...optionalHttpOptions
    }).pipe(
      catchError(this.httpErrorService.handleError)
    );
  }
}
