import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
 const authService = inject(AuthService);
  const router = inject(Router);

  const allowedRoles = route.data['roles'] as string[];

  const currentUserRole = authService.currentUserRole();

  if (currentUserRole && allowedRoles.includes(currentUserRole)) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
