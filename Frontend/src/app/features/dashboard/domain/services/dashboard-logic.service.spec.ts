import { TestBed } from '@angular/core/testing';

import { DashboardLogicService } from './dashboard-logic.service';

describe('DashboardLogicService', () => {
  let service: DashboardLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
