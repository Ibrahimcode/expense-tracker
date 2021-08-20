import { Component, OnInit, Input } from '@angular/core';

import { Expense } from '../expense.module';

@Component({
  selector: 'expense-expense-track',
  templateUrl: './expense-track.component.html',
  styleUrls: ['./expense-track.component.css'],
})
export class ExpenseTrackComponent implements OnInit {
  @Input() expenseCard!: Expense;

  constructor() {}

  ngOnInit(): void {}
}
