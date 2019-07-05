import { Account } from './../model/account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

const API = environment.ApiUrl;

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }

  public getAccounts() {
    return this.http.get<Account[]>(API + '/account');
  }
}
