import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import {ExpenseModule} from './expense/expense.module'

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, RouterModule,ExpenseModule],
})
export class MainModule {}
