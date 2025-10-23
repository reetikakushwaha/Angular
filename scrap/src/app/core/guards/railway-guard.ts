import { CanActivateFn } from '@angular/router';

export const railwayGuard: CanActivateFn = (route, state) => {
  return true;
};
