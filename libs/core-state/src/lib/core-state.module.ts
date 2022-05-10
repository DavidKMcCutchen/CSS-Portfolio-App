import { FeaturesAuthEffects } from './auth/auth.effects';
import { NotificationEffects } from './portfolio/portfolio.notification-effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { RootStoreConfig, StoreModule } from "@ngrx/store";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CoreDataModule } from '@css-portfolio/core-data';
import { PortfolioEffects } from './portfolio/portfolio.effects';
import { reducers } from ".";



const store_name = 'Portfolio Store';


const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};


@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([PortfolioEffects, NotificationEffects, FeaturesAuthEffects]),
    StoreDevtoolsModule.instrument({ name: store_name })
  ],
  providers: []
})

export class CoreStateModule {}