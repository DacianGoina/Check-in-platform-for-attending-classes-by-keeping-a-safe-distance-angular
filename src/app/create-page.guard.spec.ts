import { TestBed } from '@angular/core/testing';

import { CreatePageGuard } from './create-page.guard';

describe('CreatePageGuard', () => {
  let guard: CreatePageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreatePageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
