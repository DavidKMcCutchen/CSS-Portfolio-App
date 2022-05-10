import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { LoginComponent, RegisterComponent, WildComponent } from "@css-portfolio/ui-login";
import { FeaturesAuthGuard, FeaturesUnAuthGuard } from '@css-portfolio/core-data';
import { DirectoryComponent } from './directory/directory.component';
import { AppComponent } from './app.component';

// Auth and UnAuth Guards to be added later
// canActivate: [FeaturesAuthGuard];
// canActivate: [FeaturesUnAuthGuard];

const routes: Route[] = [
  {path: '', component: DirectoryComponent },
  {path: 'wild', component: WildComponent},
  {path: 'directory', component: DirectoryComponent},
  // {path: 'login', component: LoginComponent, canActivate: [FeaturesUnAuthGuard] },
  // {path: 'register', component: RegisterComponent, canActivate: [FeaturesUnAuthGuard]},
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
