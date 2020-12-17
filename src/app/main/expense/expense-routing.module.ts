import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';
const routes: Routes = [
  /* { path: 'addExpense', component: AddExpenseComponent },
  { path: 'viewExpense', component: ViewExpenseComponent }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseRoutingModule {}
