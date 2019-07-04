import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

import { MenuItem } from './../model/menu-itens';

@Injectable()
export class AtmToolbarService {

  public activeMenuItem$: Observable<MenuItem>;

  constructor(
    private router: Router,
    private titleService: Title
  ) {
    this.activeMenuItem$ = this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map(route => {
          const active = this.lastRouteWithMenuItem(route.root);
          this.titleService.setTitle(active.title);
          return active;
        })
      );
  }

  public getMenuItems(): MenuItem[] {
    return this.router.config
      .filter(route => route.data && route.data.title)
      .map(route => {
        return{
          path: route.path,
          title: route.data.title,
          icon: route.data.icon
        };
      });
  }

  private lastRouteWithMenuItem(route: ActivatedRoute): MenuItem {
    let lastMenu;
    do { lastMenu = this.extractMenu(route) || lastMenu; }
// tslint:disable-next-line: no-conditional-assignment
    while ( route = route.firstChild );
    return lastMenu;
  }

  private extractMenu(route: ActivatedRoute): MenuItem {
    const config = route.routeConfig;
    return config && config.data && config.data.title
      ? { path: config.path, title: config.data.title, icon: config.data.icon }
      : { path: '', title: '', icon: '' };
  }
}
