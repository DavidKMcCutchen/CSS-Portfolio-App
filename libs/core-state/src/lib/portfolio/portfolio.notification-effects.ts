import { Injectable } from '@angular/core';
import { NotificationsService } from '@css-portfolio/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as PortfolioActions from './portfolio.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PortfolioActions.createPortfolioSuccess),
        tap(() => this.notificationService.notify('Create Portfolio Successful'))
      ),
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PortfolioActions.updatePortfolioSuccess),
        tap(() => this.notificationService.notify('Update Portfolio Successful'))
      ),
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PortfolioActions.deletePortfolioSuccess),
        tap(() => this.notificationService.notify('Delete Portfolio Successful'))
      ),
    { dispatch: false }
  );

  loadAllSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PortfolioActions.loadPortfoliosSuccess),
        tap(() => this.notificationService.notify('Load APIs Successful'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}
