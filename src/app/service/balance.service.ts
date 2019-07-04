import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Balance } from './../model/balance';

const API = environment.ApiUrl;

@Injectable()
export class BalanceService {

  constructor(private http: HttpClient) { }

  public getBalance(email: string) {
    return this.http.get<Balance>(API + '/atm/balance/' + email);
  }
}
