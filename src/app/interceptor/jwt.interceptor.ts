import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('user'));

    if (currentUser && currentUser.token) {
      request = request.clone({
        headers: request.headers.set('Authorization', `${currentUser.type} ${currentUser.token}`)
      });
    }

    return next.handle(request);
  }
}
