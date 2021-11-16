import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BesoinsComponent } from './besoins.component';

const routes: Routes = [
  {
    path: '',
    component: BesoinsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BesoinsRoutingModule {}
