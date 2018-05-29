import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs/index';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class HttpService {

  private domain = 'http://autumn-field-3316.getsandbox.com/';

  constructor(
    private http: HttpClient
  ) {}

  get<T>(endpoint: string, optionalHttpOptions = {}): Observable<T> {
    return this.http.get<T>(this.domain + endpoint, {
      ...httpOptions,
      ...optionalHttpOptions
    });
  }

  post<T>(endpoint: string, body, optionalHttpOptions = {}): Observable<T> {
    return this.http.post<T>(this.domain + endpoint, body, {
      ...httpOptions,
      ...optionalHttpOptions
    });
  }

  put<T>(endpoint: string, body, optionalHttpOptions = {}): Observable<T> {
    return this.http.put<T>(this.domain + endpoint, body, {
      ...httpOptions,
      ...optionalHttpOptions
    });
  }

  delete<T>(endpoint: string, optionalHttpOptions = {}) {
    return this.http.delete<T>(this.domain + endpoint, {
      ...httpOptions,
      ...optionalHttpOptions
    });
  }


}
