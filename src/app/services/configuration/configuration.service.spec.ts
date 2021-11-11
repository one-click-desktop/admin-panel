import { TestBed } from '@angular/core/testing';

import { Chance } from 'chance';

import { APP_CONFIG } from '@environments/environment';

import { ConfigurationService } from './configuration.service';

const chance = new Chance();

describe('ConfigurationService', () => {
  let service: ConfigurationService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('getConfiguration should return configuration with function as credentials.bearerAuth', () => {
    const conf = ConfigurationService.getConfiguration();

    expect(typeof conf.credentials.bearerAuth).toBe('function');
  });

  test('getConfiguration should return accessToken as function returning set token', () => {
    const token = chance.string();
    service.token = token;

    const conf = ConfigurationService.getConfiguration();

    expect((conf.credentials.bearerAuth as () => string)()).toBe(token);
  });

  test('getConfiguration should return APP_CONFIG basePath', () => {
    const conf = ConfigurationService.getConfiguration();

    expect(conf.basePath).toBe(APP_CONFIG.basePath);
  });

  test('getToken should return token', () => {
    const token = chance.string();

    service.token = token;

    expect(ConfigurationService.getToken()).toBe(token);
  });

  test('get token should return token', () => {
    const token = chance.string();

    service.token = token;

    expect(service.token).toBe(token);
  });

  test('clearToken should clear token', () => {
    const token = chance.string();
    service.token = token;

    service.clearToken();

    expect(service.token).toBeFalsy();
  });
});
