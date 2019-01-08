import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RoutingComponent],
    exports: [RoutingComponent]
})
export class ExtrasModule { }
