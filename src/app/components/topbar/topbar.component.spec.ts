import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
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

  test('should call logout service when clicked logout', () => {
    //TODO: add test after
  });
});
