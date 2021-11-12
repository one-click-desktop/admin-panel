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

  constructor(private resourceService: ResourcesService) {
    // !REMOVE
    // Uncomment below to test with mock data
    // const resources = {
    //   memory: {
    //     free: 123,
    //     total: 300,
    //   },
    //   cpu: {
    //     free: 123,
    //     total: 300,
    //   },
    //   gpu: {
    //     free: 123,
    //     total: 300,
    //   },
    //   storage: {
    //     free: 123,
    //     total: 300,
    //   },
    // };
    // const machines = [
    //   {
    //     type: MachineType.Cpu,
    //     amount: 8,
    //   },
    //   {
    //     type: MachineType.Gpu,
    //     amount: 8,
    //   },
    // ];
    // const server = {
    //   name: 'asd',
    //   address: {
    //     address: 'localhost',
    //     port: 1444,
    //   },
    //   running: machines,
    //   resources: resources,
    //   free: machines,
    // };
    // this.totalResources = {
    //   servers: [
    //     server,
    //     server,
    //     server,
    //     server,
    //     server,
    //     server,
    //     server,
    //     server,
    //     server,
    //     server,
    //     server,
    //     server,
    //   ],
    //   total: resources,
    // };
    // this.selectedServer = this.totalResources.servers[0];
  }

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
