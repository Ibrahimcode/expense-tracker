import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Subject } from 'rxjs';
import { Expense } from '../expense.module';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'expense-expense-records',
  templateUrl: './expense-records.component.html',
  styleUrls: ['./expense-records.component.css'],
})
export class ExpenseRecordsComponent implements OnInit {
  subcription!: Subscription;
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenses = this.expenseService.getExpenses();

    this.subcription = this.expenseService.expensesRecordChangeEvent.subscribe(
      (expenses) => {
        this.expenses = expenses;
      }
    );
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
