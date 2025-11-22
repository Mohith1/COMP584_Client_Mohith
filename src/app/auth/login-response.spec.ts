import { TestBed } from '@angular/core/testing';

import { LoginResponse } from './login-response';

describe('LoginResponse', () => {
  let service: LoginResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginResponse);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
