import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: 'custom-button.component.html',
})
export class CustomButtonComponent {
  handleClick() {
    alert('Button clicked!');
  }
}