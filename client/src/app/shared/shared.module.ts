import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataTableComponent } from './components/shared-data-table/shared-data-table.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    SharedDataTableComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule],
  exports: [SharedModule],
})
export class SharedModule {}
