import { Component, Input } from '@angular/core';

import { Resources } from '@one-click-desktop/api-module';

@Component({
  selector: 'app-global-resources',
  templateUrl: './global-resources.component.html',
  styleUrls: ['./global-resources.component.scss'],
})
export class GlobalResourcesComponent {
  @Input()
  resources: Resources;

  constructor() {}
}
