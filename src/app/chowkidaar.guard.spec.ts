import { TestBed } from '@angular/core/testing';

import { ChowkidaarGuard } from './chowkidaar.guard';

describe('ChowkidaarGuard', () => {
  let guard: ChowkidaarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChowkidaarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
