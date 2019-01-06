import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

    // serverContentInput is the selector of the element
    @ViewChild('serverContentInput') serverContentInput: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    onAddServer(nameInput: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: nameInput.value, //from template
            serverContent: this.serverContentInput.nativeElement.value // from @ViewChild
        });
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName: nameInput.value, //from template
            serverContent: this.serverContentInput.nativeElement.value // from @ViewChild
        });
    }

}
