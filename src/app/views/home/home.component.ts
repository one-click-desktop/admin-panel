import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, timer } from 'rxjs';

import { TimeConstants } from '@constants/time-constants';
import {
  ResourcesService,
  TotalResources,
} from '@one-click-desktop/api-module';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  totalResources: TotalResources;
  resourcesSub: Subscription;

  constructor(private resourceService: ResourcesService) {
    // !REMOVE
    // this.totalResources = {
    //   servers: [
    //     {
    //       name: 'asd',
    //       address: {
    //         address: 'localhost',
    //         port: 1444,
    //       },
    //       running: null,
    //       resources: null,
    //       free: null,
    //     },
    //     {
    //       name: 'asd',
    //       address: {
    //         address: 'localhost',
    //         port: 1444,
    //       },
    //       running: null,
    //       resources: null,
    //       free: null,
    //     },
    //   ],
    //   total: {
    //     memory: {
    //       free: 123,
    //       total: 300,
    //     },
    //     cpu: {
    //       free: 123,
    //       total: 300,
    //     },
    //     gpu: {
    //       free: 123,
    //       total: 300,
    //     },
    //     storage: {
    //       free: 123,
    //       total: 300,
    //     },
    //   },
    // };
  }

  ngOnInit(): void {
    this.resourcesSub = timer(0, TimeConstants.RESOURCES_WAIT_TIME).subscribe(
      () => this.getResources()
    );
  }

  ngOnDestroy(): void {
    this.resourcesSub.unsubscribe();
  }

  getResources(): void {
    this.resourceService
      .getResources()
      .subscribe((resources) => (this.totalResources = resources));
  }
}
