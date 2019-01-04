import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Directive({
    selector: '[appHighlightBackground2]'
})
export class HighlightBackground2Directive implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.filter') style;

    //  correct way to inject the DomSanitiser
    constructor(private sanitizer: DomSanitizer) {}

    // default state
    defaultState() {
        this.backgroundColor = 'transparent';
        this.style = this.sanitizer.bypassSecurityTrustStyle('blur(2px)');
    }

    ngOnInit(): void {
        this.defaultState();
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.backgroundColor = 'yellow';
        this.style = this.sanitizer.bypassSecurityTrustStyle('blur(0px)');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.defaultState();
    }
}
