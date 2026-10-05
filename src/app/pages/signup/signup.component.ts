import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlertComponent, ButtonComponent } from 'uilib';
import { AuthLayoutComponent } from '../../layout/auth-layout/auth-layout.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    AlertComponent,
    ButtonComponent,
    AuthLayoutComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSignup(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const name = this.email.split('@')[0];
    if (this.authService.signup(this.email, this.password, name)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Unable to create your account. Please try again.';
    }
  }

  onCancel(event: Event): void {
    // appcore-button renders a native <button> without a type, which would submit the form
    event.preventDefault();
    this.router.navigate(['/login']);
  }
}
