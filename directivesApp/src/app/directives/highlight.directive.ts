

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighLightDirective {

    //logic
    constructor(private element: ElementRef) {
        this.highlight('pink')
    }

    //listeners: native listners
    @HostListener('mouseenter')
    public onMouseMove() {
        this.highlight('green')

    }
    @HostListener('mouseleave')
    public onMouseOut() {
        this.highlight('pink')

    }

    private highlight(color: string) {
        this.element.nativeElement.style.backgroundColor = color;
    }
}