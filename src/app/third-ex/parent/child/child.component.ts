import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'third-ex-child',
    template: `
        <h5 class="text-muted">Child Component</h5>
        <button type="button" class="btn btn-info" (click)="allow()">Allow</button>`
})
export class ChildComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    @Output() allowed = new EventEmitter<boolean>();

    allow() {
        this.allowed.emit(true);
    }
}
