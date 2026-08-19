import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { filter, map, take } from 'rxjs';

export const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isLoggedIn() && authService.currentUserSubject.value) {
      const user = authService.currentUserSubject.value;
      if (allowedRoles.includes(user.role)) {
        return true;
      }
      if (user.role === 'admin') router.navigate(['/admin']);
      else router.navigate(['/user']);
      return false;
    }

    return authService.currentUser$.pipe(
      filter(user => user !== null),
      take(1),
      map(user => {
        if (allowedRoles.includes(user!.role)) {
          return true;
        }
        if (user!.role === 'admin') router.navigate(['/admin']);
        else router.navigate(['/user']);
        return false;
      })
    );
  };
};