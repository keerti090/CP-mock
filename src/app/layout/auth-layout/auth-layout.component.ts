import { Component, Input } from '@angular/core';
import { FooterComponent, HeaderComponent } from 'uilib';

/**
 * Common page shell for auth screens (login, signup):
 * uilib header on top, centered card for projected content, uilib footer below.
 */
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
