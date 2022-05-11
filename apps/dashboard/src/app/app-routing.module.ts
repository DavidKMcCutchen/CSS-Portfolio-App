import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { LoginComponent, RegisterComponent, WildComponent } from "@css-portfolio/ui-login";
import { DirectoryComponent } from './directory/directory.component';
import { DirectoryItemsComponent } from './directory/directory-items/directory-items.component';
import { CssDenseComponent } from './directory/directory-items/css-dense/css-dense.component';

// Auth and UnAuth Guards to be added later
// canActivate: [FeaturesAuthGuard];
// canActivate: [FeaturesUnAuthGuard];

const routes: Route[] = [
  {path: '', component: DirectoryComponent },
  {path: 'wild', component: WildComponent},
  {path: 'directory', component: DirectoryComponent},
  {path: 'items', component: DirectoryItemsComponent},
  {path: 'dense', component: CssDenseComponent},
  // {path: 'login', component: LoginComponent, canActivate: [FeaturesUnAuthGuard] },
  // {path: 'register', component: RegisterComponent, canActivate: [FeaturesUnAuthGuard]},
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
