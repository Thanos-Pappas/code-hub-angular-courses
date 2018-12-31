import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FirstExModule} from './first-ex/first-ex.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstExModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
