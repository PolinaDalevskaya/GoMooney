import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpensePageComponent } from './expense-page.component';

describe('ExpensePageComponent', () => {
  let component: ExpensePageComponent;
  let fixture: ComponentFixture<ExpensePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});