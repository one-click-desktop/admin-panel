import { Injectable } from '@angular/core';

import { APP_CONFIG } from '@environments/environment';
import { Configuration } from '@one-click-desktop/api-module';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private static token: string;

  constructor() {}

  static getConfiguration(): Configuration {
    return new Configuration({
      withCredentials: true,
      basePath: APP_CONFIG.basePath,
      credentials: { bearerAuth: ConfigurationService.getToken },
    });
  }

  static getToken(): string {
    return ConfigurationService.token;
  }

  set token(token: string) {
    ConfigurationService.token = token;
  }
}
