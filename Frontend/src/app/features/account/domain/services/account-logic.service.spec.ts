import { TestBed } from '@angular/core/testing';

import { AccountLogicService } from './account-logic.service';

describe('AccountLogicService', () => {
  let service: AccountLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
