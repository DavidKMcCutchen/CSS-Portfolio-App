import { NgModule, ModuleWithProviders } from '@angular/core';
import { PORTFOLIO_ENVIRONMENT } from './portfolio.token';
import { PortfolioEnvironment } from "./portfolio.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: PortfolioEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: PORTFOLIO_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
