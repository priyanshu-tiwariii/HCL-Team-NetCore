import { TestBed } from '@angular/core/testing';

import { MyOrdersRepositoryService } from './my-orders-repository.service';

describe('MyOrdersRepositoryService', () => {
  let service: MyOrdersRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyOrdersRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
