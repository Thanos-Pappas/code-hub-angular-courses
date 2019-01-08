import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveShowcaseComponent } from './directive-showcase/directive-showcase.component';
import { HighlightBackground1Directive } from './directive-showcase/directives/highlight-background-1.directive';
import { HighlightBackground2Directive } from './directive-showcase/directives/highlight-background-2.directive';
import { HighlightBackground3Directive } from './directive-showcase/directives/highlight-background-3.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DirectiveShowcaseComponent, HighlightBackground1Directive, HighlightBackground2Directive, HighlightBackground3Directive],
  exports: [DirectiveShowcaseComponent]
})
export class Exercise8Module { }
