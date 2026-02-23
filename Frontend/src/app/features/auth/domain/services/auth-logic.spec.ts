import { TestBed } from '@angular/core/testing';

import { AuthLogic } from './auth-logic';

describe('AuthLogic', () => {
  let service: AuthLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
