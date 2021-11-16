import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@Shared/shared.module';
import { HomeComponent } from './home.component';
import { AddComponent } from './add/add.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [HomeComponent, AddComponent, NotificationsComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
