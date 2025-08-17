import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
   navigateTo(role: 'admin' | 'user'): void {
    this.authService.setRole(role);
    this.router.navigate(['/saved-forms']);
  }
}
