import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Login } from './../model/login';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public showMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  public login(login: Login) {
    return this.http.post<any>(API + '/auth', login)
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('user', JSON.stringify(user));
        }

        this.showMenuEmitter.emit(true);
        return user;
      }));
  }

  public logout() {
    localStorage.removeItem('user');
  }
}
