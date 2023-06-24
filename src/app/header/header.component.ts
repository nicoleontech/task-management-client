import { Component } from '@angular/core';
import { KeycloakService } from '../auth/keycloak.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private keycloakService: KeycloakService) {}
  onLogout() {
    this.keycloakService.logout();
  }
}
