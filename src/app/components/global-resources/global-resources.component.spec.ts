import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalResourcesComponent } from './global-resources.component';

describe('GlobalResourcesComponent', () => {
  let component: GlobalResourcesComponent;
  let fixture: ComponentFixture<GlobalResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalResourcesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
