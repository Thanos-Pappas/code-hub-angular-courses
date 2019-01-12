import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-child-a',
    templateUrl: './child-a.component.html'
})
export class ChildAComponent implements OnInit {
    id: string;

    constructor() {
    }

    ngOnInit() {
    }

}
