import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataTableComponent } from './components/shared-data-table/shared-data-table.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    SharedDataTableComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [SharedModule],
})
export class SharedModule {}
