import { TestBed } from '@angular/core/testing';

import { OrdersLogicService } from './orders-logic.service';

describe('OrdersLogicService', () => {
  let service: OrdersLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
