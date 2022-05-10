import { Injectable } from "@angular/core";
import { Page } from "@css-portfolio/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as PortfolioActions from './portfolio.actions';
import * as PortfolioSelectors from './portfolio.selectors';
import * as fromPortfolios from './portfolio.reducer';



@Injectable({
    providedIn: 'root'
})

export class PortfolioFacade {
    allPortfolios$ = this.store.pipe(
        map((state) => PortfolioSelectors.getAllPortfolios(state)),
    )
    selectedPortfolios$ = this.store.pipe(select(PortfolioSelectors.getSelectedPortfolio));
    loaded$ = this.store.pipe(select(PortfolioSelectors.getPortfoliosLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === PortfolioActions.createPortfolio({} as any) .type ||
        action.type === PortfolioActions.updatePortfolio({} as any) .type ||
        action.type === PortfolioActions.deletePortfolio({} as any) .type 
        ))

        selectPortfolio(pageId: string) {
            this.dispatch(PortfolioActions.selectPortfolio({ pageId }));
        };

        loadPortfolios() {
            this.dispatch(PortfolioActions.loadPortfolios())
        };

        loadPortfolio(pageId: string) {
            this.dispatch(PortfolioActions.loadPortfolio({ pageId }))
        };

        savePortfolio(page: Page) {
            page.id ? this.updatePortfolio(page) : this.createPortfolio(page)
        };

        createPortfolio(page: Page) {
            this.dispatch(PortfolioActions.createPortfolio({ page }))
        };

        updatePortfolio(page: Page) {
            this.dispatch(PortfolioActions.updatePortfolio({ page }))
        };

        deletePortfolio(page: Page) {
            this.dispatch(PortfolioActions.deletePortfolio({ page }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromPortfolios.PortfolioPartialState>,
            private actions$: ActionsSubject
        ) {}
}