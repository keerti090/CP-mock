import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink], // Required for ngModel and routerLink
  templateUrl: './login.component.html', // 👈 Points to your new HTML file
  styleUrls: ['./login.component.scss'], // 👈 Points to your SCSS file
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onLogin(): void {
    console.log('Logging in with:', this.email, this.password);
    if (this.email && this.password) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Please enter email and password');
    }
  }
}
