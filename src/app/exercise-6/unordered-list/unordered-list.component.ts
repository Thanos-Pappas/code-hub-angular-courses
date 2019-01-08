import {Component, OnInit} from '@angular/core';
import {ArrayService} from '../service/array.service';

@Component({
    selector: 'app-unordered-list',
    templateUrl: './unordered-list.component.html',
    providers: [ArrayService]
})
export class UnorderedListComponent implements OnInit {
    myArray: string[] = [];

    constructor(private arrayService: ArrayService) {
    }

    ngOnInit() {
        this.myArray = this.arrayService.getArray();
    }


}
