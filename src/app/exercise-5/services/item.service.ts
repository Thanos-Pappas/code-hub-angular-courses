import {EventEmitter, Injectable, Output} from '@angular/core';

/**
 * This is a Global Service
 * It Is a singleton
 */
@Injectable({
    providedIn: 'root'
})
export class ItemService {
    items: string[] =["Add your items here"];
    @Output() itemsChanged = new EventEmitter<string[]>();

    constructor() {
    }

    getItems() {
        return this.items.slice(); // return a copy of the array
    }

    addItem(item: string) {
        this.items.push(item);
        this.itemsChanged.emit(this.items.slice()); // emit a copy of the array

    }
}
