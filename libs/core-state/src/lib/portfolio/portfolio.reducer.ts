import { Page } from "@css-portfolio/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as PortfolioActions from './portfolio.actions';

export const PORTFOLIO_FEATURE_KEY = 'pages';

export interface PortfolioState extends EntityState<Page> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface PortfolioPartialState {
    readonly [PORTFOLIO_FEATURE_KEY]: PortfolioState
};

export const portfolioAdapter: EntityAdapter<Page> = createEntityAdapter<Page>({ selectId: (a) => a.id});

export const initialPortfolioState: PortfolioState = portfolioAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): PortfolioState => ({ ...state, error});

const onDispatch = (state, action): PortfolioState => ({
    ...state,
    loaded: false,
    error: null
});

const _portfolioReducer = createReducer(
    initialPortfolioState,
    on(
        PortfolioActions.loadPortfolioFailed,
        PortfolioActions.loadPortfoliosFailed,
        PortfolioActions.createPortfolioFailed,
        PortfolioActions.updatePortfolioFailed,
        PortfolioActions.deletePortfolioFailed,
        onFailed
    ),
    on(
        PortfolioActions.loadPortfolio,
        PortfolioActions.loadPortfolios,
        PortfolioActions.createPortfolio,
        PortfolioActions.updatePortfolio,
        PortfolioActions.deletePortfolio,
        onDispatch
    ),
    on(
        PortfolioActions.loadPortfolioSuccess, (state, { page }) =>
        portfolioAdapter.upsertOne(page, {...state, loaded: true})
    ),
    on(
        PortfolioActions.selectPortfolio, (state, { pageId }) => ({
            ...state,
            selectedId: pageId
        })
    ),
    on(
        PortfolioActions.loadPortfoliosSuccess, (state, { pages }) =>
        portfolioAdapter.setAll(pages, {...state, loaded: true})
    ),
    on(
        PortfolioActions.deletePortfolioSuccess, (state, { page }) =>
        portfolioAdapter.removeOne(page.id, {...state, loaded: true})
    ),
    on(
        PortfolioActions.updatePortfolioSuccess, (state, { page }) =>
        portfolioAdapter.updateOne(
            {id: page.id, changes: page},
            {...state, loaded: true}
        )
    ),
    on(
        PortfolioActions.createPortfolioSuccess, (state, {page }) =>
        portfolioAdapter.addOne(page, {...state, loaded: true})
    ),
)

export function portfolioReducer(
    state: PortfolioState | undefined,
    action: Action
) {
    return _portfolioReducer(state, action)
}