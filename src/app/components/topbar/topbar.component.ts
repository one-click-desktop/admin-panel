import { Component } from '@angular/core';

import { LoggedInService } from '@services/loggedin/loggedin.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  constructor(private loggedInService: LoggedInService) {}

  logout(): void {
    this.loggedInService.logout();
  }
}
