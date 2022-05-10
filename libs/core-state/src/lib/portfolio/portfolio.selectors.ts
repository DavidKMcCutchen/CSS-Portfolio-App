import { emptyPage } from "@css-portfolio/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { portfolioAdapter, PortfolioState, PORTFOLIO_FEATURE_KEY } from "./portfolio.reducer";

export const getPortfolioState = createFeatureSelector<PortfolioState>(PORTFOLIO_FEATURE_KEY);

const { selectAll, selectEntities } = portfolioAdapter.getSelectors();

export const getPortfoliosLoaded = createSelector(
    getPortfolioState,
    (state: PortfolioState) => state.loaded
);

export const getPortfolioError = createSelector(
    getPortfolioState,
    (state: PortfolioState) => state.error
);

export const getAllPortfolios = createSelector(
    getPortfolioState,
    (state: PortfolioState) => selectAll(state)
);

export const getPortfolioEntities = createSelector(
    getPortfolioState,
    (state: PortfolioState) => selectEntities(state)
);

export const getSelectedPortfolioId = createSelector(
    getPortfolioState,
    (state: PortfolioState) => state.selectedId
);

export const getSelectedPortfolio = createSelector(
    getPortfolioEntities,
    getSelectedPortfolioId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyPage
);