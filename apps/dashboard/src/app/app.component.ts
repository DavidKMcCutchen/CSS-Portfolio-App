import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { ActivatedRoute } from '@angular/router';
import { FeaturesAuthFacade } from '@css-portfolio/core-state';
import { RouterModule } from '@nestjs/core';






@Component({
  selector: 'css-portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  pageList = 'Home';
  


  showFiller = false;
  isAuthenticated$ = this.authFacade.isUserAuthenticated$;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  opened = true;
  events: string[] = [];

  title= 'CSS Portfolio';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    // {path: 'pages', icon: 'view_list', title: 'Pages'},
    {path: 'directory', icon: 'view_list', title: 'Directory'},
    {path: 'items', icon: 'filter_list', title: 'Items'},
    {path: 'dense', icon: 'menu', title: 'CSS Dense'},
    {path: 'f16s', icon: 'menu', title: 'Viper Collage'},
  ];

  






  constructor(
    private authFacade: FeaturesAuthFacade,
    private route: ActivatedRoute) {};

    componentLink = this.route.snapshot.paramMap.getAll;

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
