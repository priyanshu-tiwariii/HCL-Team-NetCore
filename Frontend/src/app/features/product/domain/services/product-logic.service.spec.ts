import { TestBed } from '@angular/core/testing';

import { ProductLogicService } from './product-logic.service';

describe('ProductLogicService', () => {
  let service: ProductLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
