import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import {
  ExpenseGetResponse,
  ExpensePostResponse,
} from './expense.response.model';

import { Expense } from './expense.module';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expensesRecordChangeEvent = new Subject<Expense[]>();
  expense!: Expense;
  expenses!: Expense[];
  constructor(private http: HttpClient) {}

  generateId() {
    const date = new Date().getTime() / 1000; // current date/time in seconds
    const dateId = date.toFixed(0);
    console.log(dateId);
    return dateId;
  }

  getContacts(): Expense[] {
    // return this.Expenses.slice();
    let expenseList!: Expense[];
    this.http
      .get<ExpenseGetResponse>('http://localhost:3000/expenses')
      .subscribe(
        (expenses) => {
          console.log(expenses);
          this.expenses = expenses.expenses;
          // this.maxContactId = this.getMaxId();
          this.expenses.sort();

          const expensesRecordClone = this.expenses.slice();

          this.expensesRecordChangeEvent.next(expensesRecordClone);

          expenseList = expensesRecordClone;
          console.log('contactList received');
        },
        // error method
        (error: any) => {
          console.log(error);
        }
      );

    return expenseList;
  }

  getExpense(id: string) {
    let expenseFound!: Expense;
    this.expenses.forEach((expense) => {
      if (expense.id === id) {
        expenseFound = expense;
      }
    });
    return expenseFound;
  }

  addExpense(newExpense: Expense) {
    if (!newExpense) {
      return;
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // add to database
    this.http
      .post<ExpensePostResponse>('http://localhost:3000/expenses', newExpense, {
        headers: headers,
      })
      .subscribe((responseData) => {
        // add new expense to expenses
        this.expenses.push(responseData.expense);
        this.expenses.sort();
        const expensesRecordClone = this.expenses.slice();
        this.expensesRecordChangeEvent.next(expensesRecordClone);
      });
  }

  updateExpense(originalExpense: Expense, newExpense: Expense) {
    if (!originalExpense || !newExpense) {
      return;
    }
    const pos = this.expenses.findIndex((c) => c.id === originalExpense.id);
    if (pos < 0) {
      return;
    }
    // set the id of the new Expense to the id of the old Expense
    newExpense.id = originalExpense.id;
    // newExpense._id = originalExpense._id;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // update database
    this.http
      .put('http://localhost:3000/expenses/' + originalExpense.id, newExpense, {
        headers: headers,
      })
      .subscribe(() => {
        this.expenses[pos] = newExpense;
        this.expenses.sort();
        const expensesRecordClone = this.expenses.slice();
        this.expensesRecordChangeEvent.next(expensesRecordClone);
      });
  }

  deleteExpense(expense: Expense) {
    if (!expense) {
      return;
    }
    const pos = this.expenses.findIndex((c) => c.id === expense.id);
    if (pos < 0) {
      return;
    }
    // delete from database
    this.http
      .delete('http://localhost:3000/expenses/' + expense.id)
      .subscribe(() => {
        this.expenses.splice(pos, 1);
        this.expenses.sort();
        const expensesRecordClone = this.expenses.slice();
        this.expensesRecordChangeEvent.next(expensesRecordClone);
      });
  }
}
