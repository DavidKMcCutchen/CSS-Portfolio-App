import { createAction, props } from "@ngrx/store";
import {  Page } from "@css-portfolio/api-interfaces";

// Select Entity

export const selectPortfolio = createAction(
    '[PORTFOLIO] Select Portfolio',
    props<{ pageId: string }>()
);

// Load all Entities

export const loadPortfolios = createAction(
    '[PORTFOLIO] Load Portfolios'
);

export const loadPortfoliosSuccess = createAction(
    '[PORTFOLIO] Load Portfolios Success',
    props<{ pages: Page[]}>()
);

export const loadPortfoliosFailed = createAction(
    '[PORTFOLIO] Load Portfolios Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadPortfolio = createAction(
    '[PORTFOLIO] Load Portfolio',
    props<{ pageId: string}>()
);

export const loadPortfolioSuccess = createAction(
    '[PORTFOLIO] Load Portfolio Success',
    props<{ page: Page}>()
);

export const loadPortfolioFailed = createAction(
    '[PORTFOLIO] Load Portfolio Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createPortfolio = createAction(
    '[PORTFOLIO] Create Portfolio',
    props<{ page: Page}>()
);

export const createPortfolioSuccess = createAction(
    '[PORTFOLIO] Create Portfolio Success',
    props<{ page: Page}>()
);

export const createPortfolioFailed = createAction(
    '[PORTFOLIO] Create Portfolio Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updatePortfolio = createAction(
    '[PORTFOLIO] Update Portfolio',
    props<{ page: Page}>()
);

export const updatePortfolioSuccess = createAction(
    '[PORTFOLIO] Update Portfolio Success',
    props<{ page: Page}>()
);

export const updatePortfolioFailed = createAction(
    '[PORTFOLIO] Create Portfolio Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deletePortfolio = createAction(
    '[PORTFOLIO] Delete Portfolio',
    props<{ page: Page}>()
);

export const deletePortfolioSuccess = createAction(
    '[PORTFOLIO] Delete Portfolio Success',
    props<{ page: Page}>()
);

export const deletePortfolioFailed = createAction(
    '[PORTFOLIO] Create Portfolio Failed',
    props<{ error: any}>()
);