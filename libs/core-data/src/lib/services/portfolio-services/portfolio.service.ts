import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PortfolioEnvironment, PORTFOLIO_ENVIRONMENT } from '@css-portfolio/environment';
import { Page } from '@css-portfolio/api-interfaces';


export const test = 'https://api-30x30.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {
  model = 'portfolios';

  constructor(
    private httpClient: HttpClient,
    @Inject(PORTFOLIO_ENVIRONMENT) private environment: PortfolioEnvironment
  ) {}

  getAll() {
    return this.httpClient.get<Page[]>(this.getUrl())
  };

  find(pageId: string) {
    return this.httpClient.get<Page>(this.getUrlById(pageId))
  };

  create(pages: Page) {
    return this.httpClient.post<Page>(this.getUrl(), pages)
  };

  update(pages: Page) {
    return this.httpClient.patch<Page>(this.getUrlById(pages.id), pages)
  };

  delete({ id }: Page) {
    return this.httpClient.delete<Page>(this.getUrlById(id))
  };

  private getUrl() {
    return `${test}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/id`
  };
}