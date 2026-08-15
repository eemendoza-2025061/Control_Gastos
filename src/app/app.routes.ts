import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { AdminDashboardComponent } from './features/auth/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './features/auth/user/user-dashboard/user-dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminDashboardComponent, 
    canActivate: [authGuard, roleGuard(['admin'])] 
  },
  { 
    path: 'user', 
    component: UserDashboardComponent, 
    canActivate: [authGuard, roleGuard(['user'])] 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];