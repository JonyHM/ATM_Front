import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { User } from '../model/user';

const API = environment.ApiUrl;

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(id: number) {
    return this.http.get<User>(API + '/user/' + id);
  }

  public getUsers() {
    return this.http.get<Array<User>>(API + '/user/');
  }
}
