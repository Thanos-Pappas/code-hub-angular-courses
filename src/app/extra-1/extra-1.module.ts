import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CockpitComponent } from './wrapper/cockpit/cockpit.component';
import { ServerElementComponent } from './wrapper/server-element/server-element.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WrapperComponent, CockpitComponent, ServerElementComponent],
    exports:[WrapperComponent]
})
export class Extra1Module { }
