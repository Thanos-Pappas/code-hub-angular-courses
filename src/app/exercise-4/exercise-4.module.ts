import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './lifecycle/notification/notification.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [LifecycleComponent, NotificationComponent],
  exports: [LifecycleComponent]
})
export class Exercise4Module { }
