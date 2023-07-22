import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'influencers-ai';
  constructor() {}

  private includedRoutes: string[] = ['login'];
  // exclude the navbar from the login page
  public isNavbarIncluded(): boolean {
    return !this.includedRoutes.includes(window.location.pathname.split('/')[1]);
  }
}
