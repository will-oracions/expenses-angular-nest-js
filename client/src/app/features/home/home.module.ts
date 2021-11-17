import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@Shared/shared.module';
import { HomeComponent } from './home.component';
import { AddComponent } from './add/add.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, AddComponent, NotificationsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class HomeModule {}
