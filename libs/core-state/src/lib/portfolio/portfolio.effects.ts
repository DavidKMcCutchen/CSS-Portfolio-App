import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PortfoliosService } from '@css-portfolio/core-data';
import * as PortfolioActions from './portfolio.actions';
import { map } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { Page } from '@css-portfolio/api-interfaces';

@Injectable()
export class PortfolioEffects {
  loadPortfolio$ = createEffect(() =>
    {return this.actions$.pipe(
      ofType(PortfolioActions.loadPortfolio),
      fetch({
        run: (action) =>
          this.portfoliosService
            .find(action.pageId)
            .pipe(
              map((page: Page) =>
                PortfolioActions.loadPortfolioSuccess({ page })
              )
            ),
        onError: (action, error) =>
          PortfolioActions.loadPortfolioFailed({ error }),
      })
    )}
  );
  loadPortfolios$ = createEffect(() =>
      { return this.actions$.pipe(
          ofType(PortfolioActions.loadPortfolios),
          fetch({
              run: () =>
                  this.portfoliosService
                  .getAll()
                  .pipe(
                      map((pages: Page[]) => PortfolioActions.loadPortfoliosSuccess({ pages }))
                  ),
              onError: (action, error) => PortfolioActions.loadPortfoliosFailed({ error })
          })
      ) });
      createPortfolio$ = createEffect(() =>
      { return this.actions$.pipe(
          ofType(PortfolioActions.createPortfolio),
          pessimisticUpdate({
              run: (action) =>
                  this.portfoliosService
                      .create(action.page)
                      .pipe(map((page: Page) => PortfolioActions.createPortfolioSuccess({ page }))),
                  onError: (action, error) => PortfolioActions.createPortfolioFailed({ error })
          })
  ) });

  updatePortfolio$ = createEffect(() =>
      { return this.actions$.pipe(
          ofType(PortfolioActions.updatePortfolio),
          pessimisticUpdate({
              run: (action) =>
                  this.portfoliosService
                      .update(action.page)
                      .pipe(map((page: Page) => PortfolioActions.updatePortfolioSuccess({ page}))),
                  onError: (action, error) => PortfolioActions.updatePortfolioFailed({ error })
          })
  ) });

  deletePortfolio$ = createEffect(() =>
      { return this.actions$.pipe(
          ofType(PortfolioActions.deletePortfolio),
          pessimisticUpdate({
              run: (action) =>
                  this.portfoliosService
                      .delete(action.page)
                      .pipe(
                          map(() => PortfolioActions.deletePortfolioSuccess({ page: action.page }))
                      ),
                  onError: (action, error) => PortfolioActions.deletePortfolioFailed({ error })
          })
      ) });

  constructor(
    private actions$: Actions,
    private portfoliosService: PortfoliosService
  ) {}
}
