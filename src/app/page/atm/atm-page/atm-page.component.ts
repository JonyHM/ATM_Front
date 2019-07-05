import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

import { BalanceService } from './../../../service/balance.service';
import { User } from './../../../model/user';

@Component({
  selector: 'app-atm-page',
  templateUrl: './atm-page.component.html',
  styleUrls: ['./atm-page.component.scss']
})
export class AtmPageComponent implements OnInit {

  public balance: number;

  constructor(private balanceService: BalanceService) {}

  ngOnInit() {
    const user: User = jwt_decode(window.localStorage.getItem('user'));
    this.balanceService.getBalance(user.email)
      .subscribe(balance => {
        this.balance = balance.balance;
      });
  }

}
