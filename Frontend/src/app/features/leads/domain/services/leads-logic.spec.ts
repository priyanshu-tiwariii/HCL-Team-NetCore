import { TestBed } from '@angular/core/testing';

import { LeadsLogic } from './leads-logic';

describe('LeadsLogic', () => {
  let service: LeadsLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadsLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
