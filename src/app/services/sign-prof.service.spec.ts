import { TestBed } from '@angular/core/testing';

import { SignProfService } from './sign-prof.service';

describe('SignProfService', () => {
  let service: SignProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignProfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
