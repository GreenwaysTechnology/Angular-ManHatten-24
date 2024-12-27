import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    message: string = ""

    name: string = ""
    onSave(element: any) {
        console.log(element.target.value)
        this.message = element.target.value
    }
}
