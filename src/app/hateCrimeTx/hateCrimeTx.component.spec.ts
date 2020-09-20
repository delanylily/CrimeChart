/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HateCrimeTxComponent } from './hateCrimeTx.component';

describe('HateCrimeTxComponent', () => {
  let component: HateCrimeTxComponent;
  let fixture: ComponentFixture<HateCrimeTxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HateCrimeTxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HateCrimeTxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
