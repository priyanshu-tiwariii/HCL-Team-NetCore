import { TestBed } from '@angular/core/testing';

import { LeadsRepository } from './leads-repository';

describe('LeadsRepository', () => {
  let service: LeadsRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadsRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
