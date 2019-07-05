import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AppCommonModule } from './../app-common/app-common.module';
import { UserService } from './../service/user.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AppCommonModule,
    CommonModule
  ],
  providers: [
    UserService
  ]
})
export class CoreModule { }
