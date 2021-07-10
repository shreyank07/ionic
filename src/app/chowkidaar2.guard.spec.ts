import { TestBed } from '@angular/core/testing';

import { Chowkidaar2Guard } from './chowkidaar2.guard';

describe('Chowkidaar2Guard', () => {
  let guard: Chowkidaar2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Chowkidaar2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
