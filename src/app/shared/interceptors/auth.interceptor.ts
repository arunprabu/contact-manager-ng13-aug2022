import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  // intercept all the subsequent req that is hitting rest api .. (post-login)
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);

    // access the token from local storage
    const token = localStorage.getItem('authToken');

    // manipulate req header with auth token being a bearerToken
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    });

    return next.handle(request);
  }
}
