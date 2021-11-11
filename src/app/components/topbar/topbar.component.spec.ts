import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { mocked, MockedObject } from 'ts-jest/dist/utils/testing';

import { LoggedInService } from '@services/loggedin/loggedin.service';

import { TopbarComponent } from './topbar.component';

jest.mock('@services/loggedin/loggedin.service');

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;
  let debugElement: DebugElement;
  let loggedInService: MockedObject<LoggedInService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopbarComponent],
      providers: [LoggedInService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();

    loggedInService = mocked(TestBed.inject(LoggedInService));
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should show logo', () => {
    const logo = debugElement.query(By.css('.topbar-logo')).nativeElement;
    expect(logo.textContent).toBe('One Click Desktop Admin Panel');
  });

  test('should show logout nav', () => {
    checkIfNavExists('Log out');
  });

  function checkIfNavExists(name: string) {
    const navLinks = debugElement.queryAll(By.css('.nav-link'));
    expect(navLinks.map((nav) => nav.nativeElement.textContent)).toContain(
      name
    );
  }

  test('should call logout when logout clicked', () => {
    const spy = jest.spyOn(component, 'logout');
    const logout = debugElement
      .queryAll(By.css('.nav-link'))
      .filter((nav) => nav.nativeElement.textContent === 'Log out')[0];

    logout.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

  test('logout should call logout', () => {
    component.logout();

    expect(loggedInService.logout).toHaveBeenCalled();
  });
});
