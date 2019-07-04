import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { User } from '../model/user';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(email: string) {
    return this.http.get<User>(API + '/atm/' + email);
  }
}
