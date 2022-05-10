import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioEnvironment, PORTFOLIO_ENVIRONMENT } from '@css-portfolio/environment';
import { Observable } from 'rxjs';

export const TOKEN_NAME = 'cs-sample::token';
export const MODEL = 'auth';

@Injectable({
  providedIn: 'root',
})
export class FeaturesAuthService {
  constructor(
    @Inject(PORTFOLIO_ENVIRONMENT) private config: PortfolioEnvironment,
    private router: Router,
    private http: HttpClient
  ) {}

  getToken(): string | null {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string | null): void {
    localStorage.setItem(TOKEN_NAME, token ?? 'null');
  }

  login(loginData: any): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(
      `${this.config.apiUrl}${MODEL}/login`,
      loginData
    );
    
  };

  logout(): void {
    this.setToken(null);
    this.router.navigate(['/login']);
  };

  register(): void {
    this.router.navigate(['/register'])
  }
}
