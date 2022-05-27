import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import {
  NavigationStart,
  Router,
  Event as NavigationEvent,
} from '@angular/router';
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

  // YES there are much better and simpler ways of doing this, just flexing the RxJs muscles a bit.
  // output = document.createElement('output')
  // outputBody = document.body.prepend(this.output)

  // timer = timer(0, 1000)
  //   .pipe(map(() => new Date().toLocaleTimeString()))
  //   .subscribe(time => (this.output.textContent = time));

  title = 'CSS Portfolio';
  links = [
    { path: '', icon: 'home', title: 'Home' },
    { path: 'login', icon: 'person', title: 'Login' },
    { path: 'items', icon: 'filter_list', title: 'Items' },
    { path: 'dense', icon: 'menu', title: 'CSS Dense' },
    { path: 'f16s', icon: 'menu', title: 'Viper Collage' },
    { path: 'stylizer', icon: 'menu', title: 'Stylizer' },
    { path: 'tictactoe', icon: 'menu', title: 'Tic-Tac-Toe' },
  ];

  event$;

  constructor(
    private authFacade: FeaturesAuthFacade,
    private router: Router,
    private location: Location,
  ) {
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        return (this.pageTitle = this.event$.url);
      }
    });



    
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

  logoutAttempt() {
    this.authFacade.logout();
  }

  register() {
    this.authFacade.register();
  }

  scrollTo(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView();
  }

  back(): void {
    this.location.back();
  };

}
