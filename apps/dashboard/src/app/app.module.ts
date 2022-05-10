import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@css-portfolio/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@css-portfolio/core-data";
import { CoreStateModule } from "@css-portfolio/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@css-portfolio/environment';
import { UiLoginModule } from '@css-portfolio/ui-login';
import { PipesModule } from '@css-portfolio/pipes';
import { DirectoryComponent } from './directory/directory.component';
import { DirectoryDetailsComponent } from './directory/directory-details/directory-details.component';
import { DirectoryItemsComponent } from './directory/directory-items/directory-items.component'


@NgModule({
  declarations: [AppComponent, DirectoryComponent, DirectoryDetailsComponent, DirectoryItemsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
