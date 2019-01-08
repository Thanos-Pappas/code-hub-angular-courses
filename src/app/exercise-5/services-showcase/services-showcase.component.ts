import {Component, OnInit} from '@angular/core';
import {ItemService} from '../services/item.service';
import {AppendService} from '../services/append.service';

@Component({
    selector: 'app-services-showcase',
    templateUrl: './services-showcase.component.html',
    providers: [AppendService]

})
export class ServicesShowcaseComponent implements OnInit {
    items: string[] = [];
    appendedItems: string[] = [];

    // inject services. !! should be private
    constructor(private itemService: ItemService, private appendService: AppendService) {
    }

    ngOnInit() {
        // initialize array
        this.items = this.itemService.getItems();
        this.itemService.itemsChanged.subscribe(
            (newItems: string[]) => {
                this.items = newItems;
            }
        );

        // initialize array
        this.appendedItems = this.appendService.getArray();
        this.appendService.arrayChanged.subscribe(
            (newItems: string[]) => {
                this.appendedItems = newItems;
            }
        );
    }

    onAdd(newItem: string) {
        this.itemService.addItem(newItem);
    }

    onAppend() {
        this.appendService.appendArray(this.items);
    }
}
