import { Account } from './../../../model/account';
import { Component, OnInit } from '@angular/core';

import { AccountService } from './../../../service/account.service';
import { BankService } from './../../../service/bank.service';
import { UserService } from './../../../service/user.service';
import { Bank } from './../../../model/bank';
import { User } from './../../../model/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public displayedAccountColumns: string[] = ['bank', 'number', 'owner'];
  public displayedBankColumns: string[] = ['name'];
  public displayedUserColumns: string[] = ['name', 'email', 'profile'];

  public accounts: Array<Account>;
  public banks: Array<Bank>;
  public users: Array<User>;

  constructor(
    private accountService: AccountService,
    private bankService: BankService,
    private userService: UserService
  ) {
    this.accounts = new Array<Account>();
    this.banks = new Array<Bank>();
    this.users = new Array<User>();
  }

  ngOnInit() {
    this.accountService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);

    this.bankService.getBanks()
      .subscribe(banks => this.banks = banks);

    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

}
