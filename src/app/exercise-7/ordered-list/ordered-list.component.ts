import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ordered-list',
    templateUrl: './ordered-list.component.html'
})
export class OrderedListComponent implements OnInit {
    myArray = [
        {"name": "Douglas Pace", "age": 35, "country": 'MARS'},
        {"name": "Peter Jonson", "age": 35, "country": 'UK'},
        {"name": "Bill Gates", "age": 35, "country": 'USA'},
        {"name": "Nasousiro Tokasoni", "age": 35, "country": 'HK'},

    ];

    constructor() {
    }

    ngOnInit() {
    }

}
