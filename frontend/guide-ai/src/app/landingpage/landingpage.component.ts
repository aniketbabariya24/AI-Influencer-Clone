import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent {
  token: string = sessionStorage.getItem('token') || '';

  constructor() {}

  login_logoutDisplay(): boolean {
    if (this.token !== null && this.token !== undefined && this.token !== '') {
      return true;
    } else {
      return false;
    }
  }
}
