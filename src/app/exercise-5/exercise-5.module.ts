import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesShowcaseComponent} from './services-showcase/services-showcase.component';
import {AppendService} from './services/append.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ServicesShowcaseComponent],
    exports: [ServicesShowcaseComponent]
})
export class Exercise5Module {
}
