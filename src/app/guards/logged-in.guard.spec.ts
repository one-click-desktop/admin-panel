import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { mocked, MockedObject } from 'ts-jest/dist/utils/testing';

import { PathConstants } from '@constants/path-constants';
import { LoggedInService } from '@services/loggedin/loggedin.service';

import { LoggedInGuard } from './logged-in.guard';

jest.mock('@services/loggedin/loggedin.service');
jest.mock('@angular/router');

describe('LoggedInGuard', () => {
  let guard: LoggedInGuard;
  let loggedInService: MockedObject<LoggedInService>;
  let router: MockedObject<Router>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedInService, Router],
    });
    guard = TestBed.inject(LoggedInGuard);

    loggedInService = mocked(TestBed.inject(LoggedInService));
    router = mocked(TestBed.inject(Router));
  });

  test('should be created', () => {
    expect(guard).toBeTruthy();
  });

  test('should return true if isLoggedIn is true', () => {
    loggedInService.isLoggedIn.mockReturnValueOnce(true);

    expect(guard.canActivate(null, null)).toBeTruthy();
  });

  test('should call router navigate to login if isLoggedIn is false', () => {
    loggedInService.isLoggedIn.mockReturnValueOnce(false);

    guard.canActivate(null, null);

    expect(router.navigate).toHaveBeenCalledWith([PathConstants.LOGIN]);
  });
});
