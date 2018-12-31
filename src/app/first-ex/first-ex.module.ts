import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './wrapper/header/header.component';
import { NavComponent } from './wrapper/nav/nav.component';
import { ContentComponent } from './wrapper/content/content.component';
import { FooterComponent } from './wrapper/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WrapperComponent, HeaderComponent, NavComponent, ContentComponent, FooterComponent],
  exports : [WrapperComponent]
})
export class FirstExModule { }
