import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';


@NgModule({
  declarations: [AddExpenseComponent, ViewExpenseComponent],
  imports: [
    CommonModule,
    ExpenseRoutingModule
  ]
})
export class ExpenseModule { }
