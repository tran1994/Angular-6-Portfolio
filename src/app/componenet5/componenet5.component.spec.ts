import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenet5Component } from './componenet5.component';

describe('Componenet5Component', () => {
  let component: Componenet5Component;
  let fixture: ComponentFixture<Componenet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componenet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componenet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
