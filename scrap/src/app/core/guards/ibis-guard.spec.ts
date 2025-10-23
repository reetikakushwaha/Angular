import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ibisGuard } from './ibis-guard';

describe('ibisGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ibisGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
