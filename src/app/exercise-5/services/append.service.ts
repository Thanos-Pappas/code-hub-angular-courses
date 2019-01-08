import {EventEmitter, Injectable, Output} from '@angular/core';

/**
 * This is NOT a Global Service
 * It Is a prototype (one instance per injection)
 */

@Injectable() // this is needed in order to inject an other service in this service

export class AppendService {
    array: string[] = ["This array will be appended"];
    @Output() arrayChanged = new EventEmitter<string[]>();

    constructor() {
    }

    getArray(){
        return this.array.slice();
    }

    appendArray(newItems: string[]) {
        this.array.push(...newItems); // we use the spread operator to append the array
        this.arrayChanged.emit(this.array.slice()); // emit a copy of the array

    }
}

