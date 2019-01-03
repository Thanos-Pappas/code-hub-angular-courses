import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'second-ex-child',
    template: `
        <li *ngFor="let item of items">
            <small class="text-muted">child component: </small>{{ item }}
        </li>`
})
export class ChildComponent implements OnInit {

    @Input() items: string[];

    constructor() {
    }

    ngOnInit() {
    }

}
