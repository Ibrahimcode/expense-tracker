import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ExpenseCost } from './expense-cost.module';
import { Expense } from '../expense.module';
import { ExpenseService } from '../expense.service';
import { generate } from 'rxjs';

@Component({
  selector: 'expense-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css'],
})
export class ExpenseEditComponent implements OnInit {
  cost1: string = '';
  cost2: string = '';
  cost3: string = '';
  cost4: string = '';
  cost5: string = '';
  // cost: ExpenseCost = new ExpenseCost()

  total: number = 0.0;
  currentItem: { name: string; address: string } = {
    name: '',
    address: '',
  };

  id!: string;
  editMode: boolean = false;
  originalExpense!: Expense;
  expense!: Expense;

  constructor(
    private expenseService: ExpenseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (!this.id) {
        this.editMode = false;
        return;
      }

      this.originalExpense = this.expenseService.getExpense(this.id);

      if (!this.originalExpense) {
        return;
      }

      this.editMode = true;
      this.expense = JSON.parse(JSON.stringify(this.originalExpense));

      this.cost1 = this.expense.cost1;
      this.cost2 = this.expense.cost2;
      this.cost3 = this.expense.cost3;
      this.cost4 = this.expense.cost4;
      this.cost5 = this.expense.cost5;

      this.calTotal();

      console.log(this.expense);
    });
  }

  // itemCount() {
  //   return this.cost;
  // }

  // itemCounter(i: number) {
  //   return new Array(i);
  // }

  press(i: string) {
    console.log(i);
  }

  calTotal() {
    let cost1 = parseFloat(this.cost1);
    let cost2 = parseFloat(this.cost2);
    let cost3 = parseFloat(this.cost3);
    let cost4 = parseFloat(this.cost4);
    let cost5 = parseFloat(this.cost5);

    console.log(cost1);
    let costList = [cost1, cost2, cost3, cost4, cost5];
    let amounts = 0;
    costList.forEach((cost) => {
      if (isNaN(cost)) {
        cost = 0.0;
        // amounts.push(cost);
        amounts += cost;
      }
      // amounts.push(cost);
      amounts += cost;
    });

    amounts;
    this.total = amounts; //parseFloat((cost1 + cost2 + cost3 + cost4 + cost5).toFixed(2));
  }

  onSubmit(form: NgForm) {
    let values = form.value; // get all the values of the form.
    console.log(values);

    const lastModified = new Date();

    let newExpense = new Expense(
      this.expenseService.generateId(),

      lastModified,

      values.date,

      values.expenditure1,
      values.cost1,

      values.expenditure2,
      values.cost2,

      values.expenditure3,
      values.cost3,

      values.expenditure4,
      values.cost4,

      values.expenditure5,
      values.cost5
    );

    // this.expenseService.generateId();

    if (this.editMode) {
      this.expenseService.updateExpense(this.originalExpense, newExpense);
    } else {
      this.expenseService.addExpense(newExpense);
    }

    this.router.navigate(['/expense']);
  }

  onCancel() {
    this.router.navigate(['/expense']);
  }
}
