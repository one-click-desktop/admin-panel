import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { PathConstants } from '@constants/path-constants';
import { Login } from '@one-click-desktop/api-module';
import { ConfigurationService } from '@services/configuration/configuration.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInService {
  constructor(
    private configService: ConfigurationService,
    private router: Router
  ) {}

  login(login: Login, token: string): void {
    this.configService.token = token;
    this.router.navigate([PathConstants.HOME]);
  }

  logout(): void {
    this.configService.clearToken();
    this.router.navigate([PathConstants.LOGIN]);
  }

  isLoggedIn(): boolean {
    return !!this.configService.token;
  }
}
