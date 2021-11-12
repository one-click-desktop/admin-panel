import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { ColorConstants } from '@constants/colors-constants';
import { Resource } from '@one-click-desktop/api-module';

@Component({
  selector: 'app-resource-pie-chart',
  templateUrl: './resource-pie-chart.component.html',
  styleUrls: ['./resource-pie-chart.component.scss'],
})
export class ResourcePieChartComponent implements OnInit, OnChanges {
  @Input()
  header: string;
  @Input()
  resource: Resource;

  data: any;
  options: any;

  colors = ColorConstants.pieChart;

  constructor() {}

  ngOnInit(): void {
    this.updateData();

    this.options = {
      aspectRatio: 1,
      events: [],
      animation: {
        animateRotate: false,
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.updateData();
  }

  updateData(): void {
    if (this.resource) {
      this.data = {
        labels: ['free', 'taken'],
        datasets: [
          {
            data: [
              this.resource.total - this.resource.free,
              this.resource.free,
            ],
            backgroundColor: Object.values(this.colors),
          },
        ],
      };
    }
  }
}
