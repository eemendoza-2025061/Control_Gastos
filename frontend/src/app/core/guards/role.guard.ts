import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs';

export const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.currentUser$.pipe(
      take(1),
      map(user => {
        if (user && allowedRoles.includes(user.role)) {
          return true;
        }
        
        // Redirección si no tiene permisos
        if (user?.role === 'admin') router.navigate(['/admin']);
        else if (user?.role === 'user') router.navigate(['/user']);
        else router.navigate(['/login']);
        
        return false;
      })
    );
  };
};