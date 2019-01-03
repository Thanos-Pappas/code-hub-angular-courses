import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'third-ex-child',
    template: `
        <h5 class="text-muted">Child Component</h5>
        <button type="button" class="btn btn-info mr-3" (click)="allow(true)">Allow</button>
        <button type="button" class="btn btn-warning" (click)="allow(false)">Deny</button>`
})
export class ChildComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    @Output() allowed = new EventEmitter<boolean>();

    allow(access:boolean) {
        this.allowed.emit(access);
    }
}
