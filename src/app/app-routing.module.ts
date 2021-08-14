import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpenseComponent } from './expense/expense.component';
import { ExpenseDetailComponent } from './expense/expense-detail/expense-detail.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/expense', pathMatch: 'full' },
  {
    path: 'expense',
    component: ExpenseComponent,
    children: [
      { path: 'new', component: ExpenseEditComponent },
      { path: ':id', component: ExpenseDetailComponent },
      { path: ':id/edit', component: ExpenseEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
