import { Component } from '@angular/core';
import { faXmark, faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faXmark = faXmark;

  faBell = faBell;

  faInfoCircle = faInfoCircle;

  isOpen = false;
}
