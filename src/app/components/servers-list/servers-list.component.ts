import { Component, Input } from '@angular/core';

import { Server } from '@one-click-desktop/api-module';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss'],
})
export class ServersListComponent {
  @Input()
  servers: Server[];

  constructor() {}
}
