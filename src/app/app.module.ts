import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { ExpenseDetailComponent } from './expense/expense-detail/expense-detail.component';
import { ExpenseRecordsComponent } from './expense/expense-records/expense-records.component';
import { ExpenseTrackComponent } from './expense/expense-track/expense-track.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEditComponent,
    ExpenseDetailComponent,
    ExpenseRecordsComponent,
    ExpenseTrackComponent,
    ExpenseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
