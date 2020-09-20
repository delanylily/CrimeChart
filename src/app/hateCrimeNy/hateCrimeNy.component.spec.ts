/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HateCrimeNyComponent } from './hateCrimeNy.component';

describe('HateCrimeNyComponent', () => {
  let component: HateCrimeNyComponent;
  let fixture: ComponentFixture<HateCrimeNyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HateCrimeNyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HateCrimeNyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
