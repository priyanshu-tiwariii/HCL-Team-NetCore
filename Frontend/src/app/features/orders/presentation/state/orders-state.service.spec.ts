import { TestBed } from '@angular/core/testing';

import { OrdersStateService } from './orders-state.service';

describe('OrdersStateService', () => {
  let service: OrdersStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
