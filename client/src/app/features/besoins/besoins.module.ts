import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BesoinsRoutingModule } from './besoins-routing.module';
import { BesoinsComponent } from './besoins.component';
import { BesoinsDetailsComponent } from './besoins-details/besoins-details.component';
import { SharedModule } from '@Shared/shared.module';

@NgModule({
  declarations: [BesoinsComponent, BesoinsDetailsComponent],
  imports: [CommonModule, SharedModule, BesoinsRoutingModule],
})
export class BesoinsModule {}
