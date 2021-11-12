import { Chance } from 'chance';

import {
  IpAddress,
  Machine,
  Resources,
  Server,
} from '@one-click-desktop/api-module';

const chance = new Chance();

export interface ServerFixtureParameters {
  name?: string;
  address?: IpAddress;
  running?: Machine[];
  free?: Machine[];
  resources?: Resources;
}

export function getServerFixture(parameters?: ServerFixtureParameters): Server {
  return {
    name: parameters?.name || chance.string(),
    address: parameters?.address || {
      address: chance.ip(),
      port: chance.normal(),
    },
    running: parameters?.running || null,
    free: parameters?.free || null,
    resources: parameters?.resources || null,
  };
}
