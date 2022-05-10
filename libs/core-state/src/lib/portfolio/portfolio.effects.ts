import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Page } from '@css-portfolio/api-interfaces';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PortfoliosService } from '@css-portfolio/core-data';
import * as PortfolioActions from './portfolio.actions';
import { map } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';

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
  // loadPortfolios$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(PortfolioActions.loadPortfolios),
  //         fetch({
  //             run: () =>
  //                 this.portfoliosService
  //                 .getAll()
  //                 .pipe(
  //                     map((pages: Page[]) => PortfolioActions.loadPortfoliosSuccess({ pages }))
  //                 ),
  //             onError: (action, error) => PortfolioActions.loadPortfoliosFailed({ error })
  //         })
  //     ));
  //     createAPI$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(APIActions.createAPI),
  //         pessimisticUpdate({
  //             run: (action) =>
  //                 this.apisService
  //                     .create(action.api)
  //                     .pipe(map((api: API) => APIActions.createAPISuccess({ api }))),
  //                 onError: (action, error) => APIActions.createAPIFailed({ error })
  //         })
  // ));

  // updateAPI$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(APIActions.updateAPI),
  //         pessimisticUpdate({
  //             run: (action) =>
  //                 this.apisService
  //                     .update(action.api)
  //                     .pipe(map((api: API) => APIActions.updateAPISuccess({ api}))),
  //                 onError: (action, error) => APIActions.updateAPIFailed({ error })
  //         })
  // ));

  // deleteAPI$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(APIActions.deleteAPI),
  //         pessimisticUpdate({
  //             run: (action) =>
  //                 this.apisService
  //                     .delete(action.api)
  //                     .pipe(
  //                         map(() => APIActions.deleteAPISuccess({ api: action.api }))
  //                     ),
  //                 onError: (action, error) => APIActions.deleteAPIFailed({ error })
  //         })
  //     ));

  constructor(
    private actions$: Actions,
    private portfoliosService: PortfoliosService
  ) {}
}
