import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { PathConstants } from '@constants/path-constants';
import { LoggedInService } from '@services/loggedin/loggedin.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private loggedInService: LoggedInService,
    private router: Router
  ) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(this.loggedInService.isLoggedIn());
    return this.loggedInService.isLoggedIn()
      ? true
      : this.router.navigate([PathConstants.LOGIN]);
  }
}
