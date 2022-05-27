// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class NavbarService  {

//   private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//   constructor(private router: Router) {
//     router.events.subscribe(() => {
//       this.setShowNav(false);
//     });
//   }



//   getShowNav(){
//     return this.showNav$.asObservable();
//   }

//   setShowNav(showHide: boolean) {
//     this.showNav$.next(showHide);
//   }

//   toggleNavState() {
//     this.showNav$.next(!this.showNav$.value);
//   }

//   isNavOpen() {
//     return this.showNav$.value;
//   }
// }
