import { Injectable } from '@angular/core';

import { APP_CONFIG } from '@environments/environment';
import { Configuration } from '@one-click-desktop/api-module';

const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  constructor() {}

  static getConfiguration(): Configuration {
    return new Configuration({
      withCredentials: true,
      basePath: APP_CONFIG.basePath,
      credentials: { bearerAuth: ConfigurationService.getToken },
    });
  }

  static getToken(): string {
    return localStorage.getItem(TOKEN);
  }

  set token(token: string) {
    localStorage.setItem(TOKEN, token);
  }

  get token() {
    return localStorage.getItem(TOKEN);
  }

  clearToken(): void {
    localStorage.removeItem(TOKEN);
  }
}
