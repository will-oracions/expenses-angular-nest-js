import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { SharedModule } from '@Shared/shared.module';
import { ExpensesDetailsComponent } from './expenses-details/expenses-details.component';

@NgModule({
  declarations: [ExpensesComponent, ExpensesDetailsComponent],
  imports: [CommonModule, SharedModule, ExpensesRoutingModule],
})
export class ExpensesModule {}
