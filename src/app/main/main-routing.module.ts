import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { ViewExpenseComponent } from './expense/view-expense/view-expense.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'addExpense', component: AddExpenseComponent },
  { path: 'viewExpense', component: ViewExpenseComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
