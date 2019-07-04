import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmRoutingModule } from './atm-routing.module';
import { AtmPageComponent } from './atm-page/atm-page.component';
import { AppCommonModule } from './../../app-common/app-common.module';
import { BalanceService } from './../../service/balance.service';

@NgModule({
  declarations: [
    AtmPageComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    AtmRoutingModule
  ],
  exports: [
    AtmPageComponent
  ],
  providers: [BalanceService]
})
export class AtmModule { }
