import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnorderedListComponent} from './unordered-list/unordered-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [UnorderedListComponent],
    exports: [UnorderedListComponent]
})
export class Exercise6Module {
}
