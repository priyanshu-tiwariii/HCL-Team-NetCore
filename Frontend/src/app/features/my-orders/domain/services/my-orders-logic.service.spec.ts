import { TestBed } from '@angular/core/testing';

import { MyOrdersLogicService } from './my-orders-logic.service';

describe('MyOrdersLogicService', () => {
  let service: MyOrdersLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyOrdersLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
