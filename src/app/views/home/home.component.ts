import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, timer } from 'rxjs';

import { TimeConstants } from '@constants/time-constants';
import {
  ResourcesService,
  Server,
  TotalResources,
} from '@one-click-desktop/api-module';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  totalResources: TotalResources;
  resourcesSub: Subscription;
  selectedServer: Server;

  constructor(private resourceService: ResourcesService) {}

  ngOnInit(): void {
    this.resourcesSub = timer(0, TimeConstants.RESOURCES_WAIT_TIME).subscribe(
      () => this.getResources()
    );
  }

  ngOnDestroy(): void {
    this.resourcesSub?.unsubscribe();
  }

  getResources(): void {
    this.resourceService
      .getResources()
      .subscribe((resources) => (this.totalResources = resources));
  }

  serverSelected(server: Server): void {
    this.selectedServer = server;
  }
}
