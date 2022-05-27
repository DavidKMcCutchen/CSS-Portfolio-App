import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { LoginComponent, ToolbarComponent, WildComponent } from "@css-portfolio/ui-login";
import { DirectoryComponent } from './directory/directory.component';
import { DirectoryItemsComponent } from './directory/directory-items/directory-items.component';
import { CssDenseComponent } from './directory/directory-items/css-dense/css-dense.component';
import { F16sComponent } from './directory/directory-items/f16s/f16s.component';
import { FeaturesUnAuthGuard, FeaturesAuthGuard } from '@css-portfolio/core-data';
import { StylizerComponent } from './directory/directory-items/stylizer/stylizer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicTacToeComponent } from './directory/directory-items/tic-tac-toe/tic-tac-toe.component';


// Auth and UnAuth Guards to be added later
// canActivate: [FeaturesAuthGuard];
// canActivate: [FeaturesUnAuthGuard];

const routes: Route[] = [
  {path: '', component: DirectoryComponent, canActivate: [FeaturesAuthGuard] },
  {path: 'wild', component: WildComponent},
  {path: 'directory', component: DirectoryComponent, canActivate: [FeaturesAuthGuard]},
  {path: 'items', component: DirectoryItemsComponent, canActivate: [FeaturesAuthGuard]},
  {path: 'dense', component: CssDenseComponent, canActivate: [FeaturesAuthGuard]},
  {path: 'f16s', component: F16sComponent, canActivate: [FeaturesAuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [FeaturesUnAuthGuard]},
  {path: 'stylizer', component: StylizerComponent, canActivate: [FeaturesAuthGuard] },
  {path: 'toolbar', component: ToolbarComponent, canActivate: [FeaturesAuthGuard] },
  {path: 'tictactoe', component: TicTacToeComponent, canActivate: [FeaturesAuthGuard] },
  // {path: 'register', component: RegisterComponent, canActivate: [FeaturesUnAuthGuard]},
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
