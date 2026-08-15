import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <nav class="navbar">
        <h2>Panel de Administración</h2>
        <button (click)="logout()" class="btn-logout">Cerrar Sesión</button>
      </nav>
      <main class="content">
        <h1>Bienvenido, {{ (authService.currentUser$ | async)?.name }}</h1>
        <p>Rol: <strong>Administrador</strong></p>
        <div class="card">
          <p>Esta es un área protegida exclusiva para administradores.</p>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .dashboard-container { font-family: sans-serif; background: #f9fafb; min-height: 100vh; }
    .navbar { display: flex; justify-content: space-between; padding: 1rem 2rem; background: #1f2937; color: white; }
    .btn-logout { background: #ef4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
    .content { padding: 2rem; }
    .card { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-top: 1rem; }
  `]
})
export class AdminDashboardComponent {
  authService = inject(AuthService);
  logout() { this.authService.logout(); }
}