import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataTableComponent } from './components/shared-data-table/shared-data-table.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedSubstringPipe } from './pipes/shared-substring.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  SharedDataTableComponent,
  HeaderComponent,
  FooterComponent,
  NotFoundComponent,
  SharedSubstringPipe,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [components],
})
export class SharedModule {}
