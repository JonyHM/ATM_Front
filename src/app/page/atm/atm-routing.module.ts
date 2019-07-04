import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtmPageComponent } from './atm-page/atm-page.component';
import { AuthGuard } from './../../guard/auth.guard';

const routes: Routes = [
  {
    path: 'atm',
    component: AtmPageComponent,
    data: {
      path: 'atm',
      title: 'ATM Page',
      icon: 'home'
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmRoutingModule { }
