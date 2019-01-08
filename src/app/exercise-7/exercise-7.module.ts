import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderedListComponent } from './ordered-list/ordered-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderedListComponent],
    exports: [OrderedListComponent]
})
export class Exercise7Module { }
