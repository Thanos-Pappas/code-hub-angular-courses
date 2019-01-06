import {
    Component,
    Input,
    ViewEncapsulation,
    ViewChild,
    ElementRef,
    ContentChild
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent {
    @Input('srvElement') element: {type: string, name: string, content: string};
    @Input() name: string;
}
