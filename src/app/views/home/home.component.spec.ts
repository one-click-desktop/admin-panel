import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chance } from 'chance';
import { of } from 'rxjs';
import { mocked, MockedObject } from 'ts-jest/dist/utils/testing';

import { ResourcesService } from '@one-click-desktop/api-module';

import { HomeComponent } from './home.component';

const chance = new Chance();

jest.mock('@one-click-desktop/api-module');

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;
  let resourcesService: MockedObject<ResourcesService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ResourcesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    resourcesService = mocked(TestBed.inject(ResourcesService));
    resourcesService.getResources.mockReturnValue(
      of({
        servers: [],
        total: null,
      } as any)
    );
  });

  test('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  test('should call getResources on init and after RESOURCES_WAIT_TIME ms', () => {
    jest.useFakeTimers();
    const spy = jest.spyOn(component, 'getResources');

    fixture.detectChanges();
    jest.advanceTimersToNextTimer();

    expect(spy).toHaveBeenCalledTimes(1);
    jest.advanceTimersToNextTimer();

    expect(spy).toHaveBeenCalledTimes(2);
    jest.useRealTimers();
  });

  test('getResources should call resourceService getResources', () => {
    component.getResources();

    expect(resourcesService.getResources).toHaveBeenCalled();
  });
});
