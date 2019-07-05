import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MenuItem } from './model/menu-itens';
import { AtmToolbarService } from './service/atm-toolbar.service';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public appName = 'ATM';
  public mainMenuItems;
  public activeMenuItem$: Observable<MenuItem>;
  public isAuthenticated: boolean;
  public userName: string;
  public role: string;

  constructor(
    private toolbarService: AtmToolbarService,
    private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.mainMenuItems = this.toolbarService.getMenuItems();
    this.activeMenuItem$ = this.toolbarService.activeMenuItem$;

    this.checkAuthentication();
  }

  public checkAuthentication() {
    const showMenu = window.localStorage.getItem('show');
    showMenu !== undefined && showMenu !== null
      ? this.authenticate(!!showMenu)
      : this.authService.showMenuEmitter
        .subscribe(show => {
          this.authenticate(show);
        });

    this.activatedRoute
      .queryParams
      .subscribe(params => {
        const name = window.localStorage.getItem('userName');
        const userName = name !== null ? name : params.name;

        const role = window.localStorage.getItem('role');
        const updatedRole = role !== null ? role : params.role;

        window.localStorage.setItem('userName', userName);
        window.localStorage.setItem('role', updatedRole);
      });

    this.role = window.localStorage.getItem('role');
    this.userName = window.localStorage.getItem('userName');
  }

  public logout() {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  private authenticate(show: boolean) {
    this.isAuthenticated = show;
  }

  public shouldBeActiveLink(linkRole: string) {
    if (linkRole === 'ALL') {
      return true;
    } else if (linkRole === this.role) {
      return true;
    } else {
      return false;
    }
  }
}
