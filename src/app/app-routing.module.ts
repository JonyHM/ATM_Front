import { AuthGuard } from './guard/auth.guard';
import { AtmPageComponent } from './page/atm/atm-page/atm-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import { AdminComponent } from './page/atm/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'atm',
    component: AtmPageComponent,
    data: {
      path: 'atm',
      title: 'ATM Page',
      icon: 'local_atm',
      role: 'ALL'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: {
      path: 'admin',
      title: 'Admin',
      icon: 'lock',
      role: 'ADMIN'
    },
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
