
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WildComponent } from './wild/wild.component';
import { MaterialModule } from '@css-portfolio/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PipesModule } from '@css-portfolio/pipes';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, PipesModule],
  declarations: [LoginComponent, ToolbarComponent, WildComponent, RegisterComponent],
  exports: [LoginComponent, ToolbarComponent, WildComponent, RegisterComponent],
})
export class UiLoginModule {}
