import { Bank } from './../model/bank';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

const API = environment.ApiUrl;

@Injectable()
export class BankService {

  constructor(private http: HttpClient) { }

  public getBanks() {
    return this.http.get<Bank[]>(API + '/bank');
  }
}
