import { Injectable, signal } from '@angular/core';

export interface User {
  email: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSignal = signal<User | null>(null);

  currentUser = this.currentUserSignal.asReadonly();
  isAuthenticated = this.currentUserSignal.asReadonly();

  login(email: string, password: string): boolean {
    // Mock authentication - replace with real API call
    if (email && password) {
      this.currentUserSignal.set({ email, name: email.split('@')[0] });
      localStorage.setItem(
        'user',
        JSON.stringify({ email, name: email.split('@')[0] })
      );
      return true;
    }
    return false;
  }

  signup(email: string, password: string, name: string): boolean {
    // Mock signup - replace with real API call
    if (email && password && name) {
      this.currentUserSignal.set({ email, name });
      localStorage.setItem('user', JSON.stringify({ email, name }));
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUserSignal.set(null);
    localStorage.removeItem('user');
  }

  // Check if user is already logged in
  checkAuth(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUserSignal.set(JSON.parse(user));
    }
  }
}
