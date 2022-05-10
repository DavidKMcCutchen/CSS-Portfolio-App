import { ActionReducerMap } from "@ngrx/store";
import * as fromPortfolios from './portfolio/portfolio.reducer';
import * as fromAuth from './auth/auth.reducer';

export interface AppState {
    [fromPortfolios.PORTFOLIO_FEATURE_KEY]: fromPortfolios.PortfolioState;
    [fromAuth.AUTH_FEATURE_KEY]: fromAuth.FeaturesAuthState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromPortfolios.PORTFOLIO_FEATURE_KEY]: fromPortfolios.portfolioReducer,
    [fromAuth.AUTH_FEATURE_KEY]: fromAuth.authReducer
};