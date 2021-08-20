import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ExpenseService } from '../expense.service';
import { Expense } from '../expense.module';

@Component({
  selector: 'expense-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css'],
})
export class ExpenseDetailComponent implements OnInit {
  @Input() expense!: Expense;

  total: number = 0.0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    const id = this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.expense = this.expenseService.getExpense(id);

      this.calTotal();
    });
  }

  calTotal() {
    let total = 0.0;
    let amounts = [
      parseFloat(this.expense.cost1),
      parseFloat(this.expense.cost2),
      parseFloat(this.expense.cost3),
      parseFloat(this.expense.cost4),
      parseFloat(this.expense.cost5),
    ];

    amounts.forEach((cost) => {
      if (isNaN(cost)) {
        cost = 0.0;
        total += cost;
      }
      total += cost;
    });

    this.total = total;
  }

  onDeleteExpense() {
    console.log('onDeleteExpense');
    this.expenseService.deleteExpense(this.expense);
    this.router.navigate(['/expense']);
  }
}
