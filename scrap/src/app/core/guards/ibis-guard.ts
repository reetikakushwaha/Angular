import { CanActivateFn } from '@angular/router';

export const ibisGuard: CanActivateFn = (route, state) => {
  return true;
};
