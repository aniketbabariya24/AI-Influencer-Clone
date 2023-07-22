import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  token: string = sessionStorage.getItem('token') || '';

  influencer_name: string = sessionStorage.getItem('influencer_name') || '';

  constructor() {}

  login_logoutDisplay(): boolean {
    if (this.token !== null && this.token !== undefined && this.token !== '') {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    sessionStorage.removeItem('token');
    setTimeout(() => {
      window.location.href = '/home';
    }, 1000);
  }
}
