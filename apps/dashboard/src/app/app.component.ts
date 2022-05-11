import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { FeaturesAuthFacade } from '@css-portfolio/core-state';
import { ToggleAction } from '@ngrx/store-devtools/src/actions';




@Component({
  selector: 'css-portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  isAuthenticated$ = this.authFacade.isUserAuthenticated$;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  opened = true;
  events: string[] = [];

  title= 'CSS Portfolio';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'pages', icon: 'view_list', title: 'Pages'},
    {path: 'directory', icon: 'view_list', title: 'Directory'},
    {path: 'items', icon: 'view_list', title: 'Items'},
    {path: 'dense', icon: 'view_list', title: 'CSS Dense'},
  ];



  constructor(private authFacade: FeaturesAuthFacade) {}

  logoutAttempt() {
    this.authFacade.logout();
  }

  register() {
    this.authFacade.register();
  }

  openSideNav() {
    this.opened = !this.opened;
  };
}
