import { TestBed } from '@angular/core/testing';

import { LeadsState } from './leads-state';

describe('LeadsState', () => {
  let service: LeadsState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadsState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
