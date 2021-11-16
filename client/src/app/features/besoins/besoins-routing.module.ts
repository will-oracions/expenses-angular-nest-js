import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BesoinsDetailsComponent } from './besoins-details/besoins-details.component';
import { BesoinsComponent } from './besoins.component';

const routes: Routes = [
  {
    path: '',
    component: BesoinsComponent,
  },
  {
    path: ':id',
    component: BesoinsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BesoinsRoutingModule {}
