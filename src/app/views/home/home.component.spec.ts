import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chance } from 'chance';

import { HomeComponent } from './home.component';

const chance = new Chance();

jest.mock('@one-click-desktop/api-module');
jest.mock('@ng-bootstrap/ng-bootstrap');

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  test('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
