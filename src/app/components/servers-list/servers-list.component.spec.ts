import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { getServerFixture } from '@testing/fixtures';

import { ServersListComponent } from './servers-list.component';

describe('ServersListComponent', () => {
  let component: ServersListComponent;
  let fixture: ComponentFixture<ServersListComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServersListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersListComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
  });

  test('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  test('should call selectServer when click on item', () => {
    const spy = jest.spyOn(component, 'selectServer');
    component.servers = [getServerFixture()];
    fixture.detectChanges();

    const item = debugElement.query(By.css('.item'));
    item.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

  test('item should have class item-selected when is selected', () => {
    const server = getServerFixture();
    component.servers = [server];
    component.selectedServer = server;

    fixture.detectChanges();

    const item = debugElement.query(By.css('.item'));
    expect(item.nativeElement.classList).toContain('item-selected');
  });

  test('selectServer should change selected server and emit change', () => {
    const spy = jest.spyOn(component.selectedChanged, 'emit');
    const server = getServerFixture();
    component.selectedServer = null;

    component.selectServer(server);

    expect(component.selectedServer).toBe(server);
    expect(spy).toHaveBeenCalledWith(server);
  });

  test('selectedChanged should emit message', (done) => {
    const server = getServerFixture();

    component.selectedChanged.subscribe((srv) => {
      expect(srv).toBe(server);
      done();
    });

    component.selectedChanged.emit(server);
  });

  test('isSelected should return true if passed server is selected', () => {
    const server = getServerFixture();
    component.selectedServer = server;

    expect(component.isSelected(server)).toBeTruthy();
  });

  test('isSelected should return true if passed server is selected', () => {
    const server = getServerFixture();
    component.selectedServer = null;

    expect(component.isSelected(server)).toBeFalsy();
  });
});
