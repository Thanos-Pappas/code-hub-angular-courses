import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ParentAComponent } from './parent-a/parent-a.component';
import { ParentBComponent } from './parent-b/parent-b.component';
import {RouterModule} from '@angular/router';
import { ChildAComponent } from './parent-a/child-a/child-a.component';
import { ChildBComponent } from './parent-b/child-b/child-b.component';

@NgModule({
  imports: [
    CommonModule,
      RouterModule
  ],
  declarations: [NavigationBarComponent, ParentAComponent, ParentBComponent, ChildAComponent, ChildBComponent],
})
export class Exercise12Module { }
