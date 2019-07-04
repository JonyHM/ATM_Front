import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AppCommonModule } from './../app-common/app-common.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AppCommonModule,
    CommonModule
  ]
})
export class CoreModule { }
