import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FeaturesAuthFacade } from '@css-portfolio/core-state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeaturesUnAuthGuard implements CanActivate {
  constructor(public router: Router, private authFacade: FeaturesAuthFacade) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authFacade.isUserAuthenticated$.pipe(
      map((userAuthenticated) => {
        if (!userAuthenticated) return true;
        this.router.navigateByUrl('/');
        return false;
      })
    );
  }
}