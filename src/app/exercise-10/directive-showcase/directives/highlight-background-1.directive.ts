import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appHighlightBackground1]',
    host: {
        "(mouseenter)": "onMouseEnter()",
        "(mouseleave)": "onMouseLeave()"
    }
})
export class HighlightBackground1Directive implements OnInit {
    constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    }

    // default state
    defaultState() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'filter', 'blur(2px)');
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }

    ngOnInit(): void {
        this.defaultState();
    }

    onMouseEnter() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'filter', 'blur(0px)');
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    }

    onMouseLeave() {
        this.defaultState();
    }

}
