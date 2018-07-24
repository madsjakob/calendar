import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickMonthComponent } from './date-pick-month.component';

describe('DatePickMonthComponent', () => {
  let component: DatePickMonthComponent;
  let fixture: ComponentFixture<DatePickMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
