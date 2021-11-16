import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@Shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@Features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'besoins',
    loadChildren: () =>
      import('@Features/besoins/besoins.module').then((m) => m.BesoinsModule),
  },
  {
    path: 'expenses',
    loadChildren: () =>
      import('@Features/expenses/expenses.module').then(
        (m) => m.ExpensesModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('@Features/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
