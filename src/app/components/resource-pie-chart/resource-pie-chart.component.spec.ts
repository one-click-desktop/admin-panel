import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chance } from 'chance';

import { ResourcePieChartComponent } from './resource-pie-chart.component';

const chance = new Chance();

describe('ResourcePieChartComponent', () => {
  let component: ResourcePieChartComponent;
  let fixture: ComponentFixture<ResourcePieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourcePieChartComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcePieChartComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  test('should call updateData on create', () => {
    const spy = jest.spyOn(component, 'updateData');

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  test('should call updateData on changes', () => {
    const spy = jest.spyOn(component, 'updateData');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);

    component.ngOnChanges(null);

    expect(spy).toHaveBeenCalledTimes(2);
  });

  test('updateData should not change data if resource is falsy', () => {
    const data = chance.string();
    component.data = data;
    component.resource = null;

    component.updateData();

    expect(component.data).toBe(data);
  });

  test('updateData should change data if resource is truthy', () => {
    const data = chance.string();
    component.data = data;
    component.resource = { free: chance.natural(), total: chance.natural() };

    component.updateData();

    expect(component.data === data).toBeFalsy();
  });
});
