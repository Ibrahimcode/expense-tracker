import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Expense } from './expense.module';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expense!: Expense;
  constructor() {}

  generateId() {
    const date = new Date().getTime() / 1000; // current date/time in seconds
    const dateId = date.toFixed(0);
    console.log(dateId);
    return dateId;
  }

  getExpense(id: string) {
    return this.expense;
  }

  addExpense(expense: Expense) {}

  updateExpense(originalExpense: Expense, newExpense: Expense) {}
}
