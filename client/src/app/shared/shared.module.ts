import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataTableComponent } from './components/shared-data-table/shared-data-table.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const components = [
  SharedDataTableComponent,
  HeaderComponent,
  FooterComponent,
  NotFoundComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class SharedModule {}
