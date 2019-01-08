import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Directive({
    selector: '[appHighlightBackground3]'
})
export class HighlightBackground3Directive {
    @Input('blur') blurLevel: string;
    @Input('highlight') highlightColor: string;
    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.filter') style;

    //  correct way to inject the DomSanitiser
    constructor(private sanitizer: DomSanitizer) {
        this.blurLevel = '2';
        this.highlightColor = 'yellow';
    }

    // default state
    defaultState() {
        this.backgroundColor = 'transparent';
        this.style = this.sanitizer.bypassSecurityTrustStyle('blur(' + this.blurLevel + 'px)');
    }

    ngOnInit(): void {
        this.defaultState();
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.backgroundColor = this.highlightColor;
        this.style = this.sanitizer.bypassSecurityTrustStyle('blur(0px)');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.defaultState();
    }

}
