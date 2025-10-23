import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { railwayGuard } from './railway-guard';

describe('railwayGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => railwayGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
