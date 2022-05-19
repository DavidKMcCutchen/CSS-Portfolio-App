import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { ActivatedRoute, NavigationStart, Router, Event as NavigationEvent } from '@angular/router';
import { FeaturesAuthFacade } from '@css-portfolio/core-state';







@Component({
  selector: 'css-portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnDestroy {
  pageTitle: string;
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
    {path: 'login', icon: 'person', title: 'Login'},
    // {path: 'pages', icon: 'view_list', title: 'Pages'},
    // {path: 'directory', icon: 'view_list', title: 'Directory'},
    {path: 'items', icon: 'filter_list', title: 'Items'},
    {path: 'dense', icon: 'menu', title: 'CSS Dense'},
    {path: 'f16s', icon: 'menu', title: 'Viper Collage'},
    {path: 'stylizer', icon: 'menu', title: 'Stylizer'}
  ];


  event$
  
  constructor(
    private authFacade: FeaturesAuthFacade,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
      this.event$
      =this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                console.log(event.url);
                return this.pageTitle = this.event$.url;
              }
            });
  }
 
  ngOnDestroy() {
    this.event$.unsubscribe();
  };

    
  logoutAttempt() {
    this.authFacade.logout();
  }

  register() {
    this.authFacade.register();
  }

  scrollTo(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView()
  };

  back(): void {
    this.location.back()
  }


  

}
