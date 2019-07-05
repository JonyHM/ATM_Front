import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmPageComponent } from './atm-page/atm-page.component';
import { AppCommonModule } from './../../app-common/app-common.module';
import { BalanceService } from './../../service/balance.service';
import { AdminComponent } from './admin/admin.component';
import { AccountService } from '../../service/account.service';
import { BankService } from '../../service/bank.service';

@NgModule({
  declarations: [
    AtmPageComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
  ],
  exports: [
    AtmPageComponent
  ],
  providers: [
    AccountService,
    BankService,
    BalanceService
  ]
})
export class AtmModule { }
