import { Component } from '@angular/core';
import { Post } from './post.model';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    post: any;
    model = { name: '', email: '' };  // Define the model

    constructor() {
        this.post = new Post(Math.random(), 'Learn Angular', 'Misko')
    }

    // onSubmit(){
    //     console.log(this.post)
    // }

    onSubmit(form: any) {
        console.log('Form Submitted!', form);
        console.log(this.model);
    }
}
