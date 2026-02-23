import { TestBed } from '@angular/core/testing';

import { MyOrdersStateService } from './my-orders-state.service';

describe('MyOrdersStateService', () => {
  let service: MyOrdersStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyOrdersStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
