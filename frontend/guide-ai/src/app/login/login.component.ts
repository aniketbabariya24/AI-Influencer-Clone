import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formType: string = 'login';
  name: string = '';
  password: string = '';
  email: string = '';

  loginwaiting: boolean = false;
  registerwaiting: boolean = false;

  loginMessage: string = '';
  registerMessage: string = '';

  constructor(private authApiService: AuthService) {}

  changeFormType(type: string) {
    this.formType = type;
  }

  login(): void {
    this.loginMessage = '';
    this.loginwaiting = true;
    this.authApiService
      .userLogin({
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (res) => {
          if (res.status == 'success') {
            sessionStorage.setItem('token', res.token);
            this.loginwaiting = false;
            this.loginMessage = res.message;
            setTimeout(() => {
              window.location.href = '/home';
            }, 1000);
          } else {
            this.loginwaiting = false;
            this.loginMessage = res.message;
          }
        },
        (err) => {
          this.loginwaiting = false;
          this.loginMessage = err.error.message || 'Something went wrong';
        }
      );
  }

  register() {
    this.registerMessage = '';
    this.registerwaiting = true;
    this.authApiService
      .userRegister({
        name: this.name,
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (res) => {
          if (res.status == 'success') {
            this.registerwaiting = false;
            this.registerMessage = res.message;
            setTimeout(() => {
              window.location.href = '/login';
            }, 1000);
          } else {
            this.registerwaiting = false;
            this.registerMessage = res.message;
          }
        },
        (err) => {
          this.registerwaiting = false;
          this.registerMessage = err.error.message || 'Something went wrong';
        }
      );
  }

  messageClear(): void {
    this.loginMessage = '';
    this.registerMessage = '';
  }
}
