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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    const id = this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.expense = this.expenseService.getExpense(id);
    });
  }

  onDeleteExpense() {
    console.log('onDeleteExpense');
    this.expenseService.deleteExpense(this.expense);
    this.router.navigate(['/expense']);
  }
}
