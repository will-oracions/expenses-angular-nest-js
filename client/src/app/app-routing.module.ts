import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: TestComponent },
  // {
  //   path: 'besoins',
  //   loadChildren: () =>
  //     import('@Features/besoins/besoins.module').then((m) => m.BesoinsModule),
  // },
  // {
  //   path: 'expenses',
  //   loadChildren: () =>
  //     import('@Features/expenses/expenses.module').then(
  //       (m) => m.ExpensesModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
