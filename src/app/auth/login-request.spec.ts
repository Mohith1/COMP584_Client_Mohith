import { TestBed } from '@angular/core/testing';

import { LoginRequest } from './login-request';

describe('LoginRequest', () => {
  let service: LoginRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
