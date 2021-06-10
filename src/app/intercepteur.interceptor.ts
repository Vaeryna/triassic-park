import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class IntercepteurInterceptor implements HttpInterceptor {
  /*   constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);
  } */

  // We inject a LoginService
  constructor(private auS: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //   console.log('INTERCEPTOR');

    // We retrieve the token, if any
    const token = this.auS.getAuthToken();
    let newHeaders = req.headers;

    if (token) {
      // If we have a token, we append it to our new headers
      newHeaders = newHeaders.append('authtoken', token);
    }
    // Finally we have to clone our request with our new headers
    // This is required because HttpRequests are immutable
    const authReq = req.clone({ headers: newHeaders });
    // Then we return an Observable that will run the request
    // or pass it to the next interceptor if any
    return next.handle(authReq);
  }
}
