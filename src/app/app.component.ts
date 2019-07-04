import { AuthenticationService } from './service/authentication.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';

import { MenuItem } from './model/menu-itens';
import { AtmToolbarService } from './service/atm-toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {

  public appName = 'ATM';
  public mainMenuItems;
  public activeMenuItem$: Observable<MenuItem>;
  public isAuthenticated: boolean;

  constructor(
    private toolbarService: AtmToolbarService,
    private authService: AuthenticationService) {
    this.isAuthenticated = false;
  }

  ngOnInit(): void {
    this.mainMenuItems = this.toolbarService.getMenuItems();
    this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
    this.authService.showMenuEmitter
      .subscribe(show => this.isAuthenticated = show);
  }

  ngAfterViewChecked(): void {
    this.authService.showMenuEmitter
      .subscribe(show => this.isAuthenticated = show);

    this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
  }
}
