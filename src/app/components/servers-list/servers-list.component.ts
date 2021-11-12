import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Server } from '@one-click-desktop/api-module';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss'],
})
export class ServersListComponent {
  @Input()
  servers: Server[];

  @Output()
  selectedChanged: EventEmitter<Server> = new EventEmitter();

  selectedServer: Server;

  constructor() {}

  selectServer(server: Server): void {
    this.selectedServer = server;
    this.selectedChanged.emit(server);
  }

  isSelected(server: Server): boolean {
    return this.selectedServer === server;
  }
}
