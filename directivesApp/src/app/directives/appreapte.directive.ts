import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
    selector: '[appRepeat]'

})
export class AppRepeatDirective {
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    //Directive Logic
    @Input() set appRepeat(times: number) {
        // Clear previous views - delete privous dom elements
        this.viewContainer.clear();
        // Create the specified number of views
        for (let i = 0; i < times; i++) {
            this.viewContainer.createEmbeddedView(this.templateRef, { index: i });
        }

    }
}
