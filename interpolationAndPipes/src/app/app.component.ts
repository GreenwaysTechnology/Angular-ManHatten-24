import { Component } from '@angular/core';
import { User } from './types/user.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //declare state/model
  user:User = {
    id: 1,
    firstName: 'Subramanian',
    lastName: 'Murugan',
    status: true,
    like:10
  }
}