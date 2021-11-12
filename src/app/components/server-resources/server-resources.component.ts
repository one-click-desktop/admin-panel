import { Component, Input } from '@angular/core';

import { Server } from '@one-click-desktop/api-module';

@Component({
  selector: 'app-server-resources',
  templateUrl: './server-resources.component.html',
  styleUrls: ['./server-resources.component.scss'],
})
export class ServerResourcesComponent {
  @Input()
  server: Server;

  constructor() {}
}
