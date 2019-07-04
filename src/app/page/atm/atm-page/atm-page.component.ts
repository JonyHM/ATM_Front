import { Component, OnInit } from '@angular/core';

import { BalanceService } from './../../../service/balance.service';

@Component({
  selector: 'app-atm-page',
  templateUrl: './atm-page.component.html',
  styleUrls: ['./atm-page.component.scss']
})
export class AtmPageComponent implements OnInit {

  public balance: number;

  constructor(private balanceService: BalanceService) {}

  ngOnInit() {
    this.balanceService.getBalance('jose.souza@bol.com')
      .subscribe(balance => {
        this.balance = balance.balance;
      });
  }

}
