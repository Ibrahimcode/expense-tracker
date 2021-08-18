import { Expense } from './expense.module';
export class ExpenseGetResponse {
  constructor(public message: string, public expenses: Expense[]) {}
}

export class ExpensePostResponse {
  constructor(public message: string, public expense: Expense) {}
}
