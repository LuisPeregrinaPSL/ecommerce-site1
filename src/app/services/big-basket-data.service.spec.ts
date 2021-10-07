import { TestBed } from '@angular/core/testing';

import { BigBasketDataService } from './big-basket-data.service';

describe('BigBasketDataService', () => {
  let service: BigBasketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigBasketDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
