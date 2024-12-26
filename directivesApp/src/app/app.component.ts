import { Component } from '@angular/core';
import { PRODUCTS } from './mock-data/products';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    imageSrc = 'https://via.placeholder.com/150';
    products = PRODUCTS
    width = 100
    color = "yellow"
}