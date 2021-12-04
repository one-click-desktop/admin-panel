import { Component } from '@angular/core';

import { LoginService, Token } from '@one-click-desktop/api-module';
import { Login } from '@one-click-desktop/api-module';
import { LoggedInService } from '@services/loggedin/loggedin.service';

const INVALID_LOGIN = 'Login or password incorrect';
const NO_CONNECTION = 'Unable to connect to server';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: Login;
  error: string;

  processing: boolean;

  constructor(
    private loginService: LoginService,
    private loggedInService: LoggedInService
  ) {
    this.login = {
      login: null,
      password: null,
    };
  }

  onSubmit(): void {
    this.processing = true;
    this.error = null;
    this.loginService
      .login(this.login)
      .subscribe(
        (token) => {
          if (token.role !== Token.RoleEnum.Admin) {
            this.error = INVALID_LOGIN;
            return;
          }
          this.loggedInService.login(this.login, token.token);
        },
        (error) => {
          this.error = error?.status === 401 ? INVALID_LOGIN : NO_CONNECTION;
        }
      )
      .add(() => {
        this.processing = false;
      });
  }
}
