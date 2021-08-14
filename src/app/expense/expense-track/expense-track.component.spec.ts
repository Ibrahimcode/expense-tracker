import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTrackComponent } from './expense-track.component';

describe('ExpenseTrackComponent', () => {
  let component: ExpenseTrackComponent;
  let fixture: ComponentFixture<ExpenseTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
