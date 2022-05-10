import { TestBed } from '@angular/core/testing';

import { PortfoliosService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: PortfoliosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfoliosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
