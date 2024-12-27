import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventhandling';
  selectedItem: any
  list = [{
    id: 1,
    name: 'a1'
  },
  {
    id: 2,
    name: 'a2'
  },
  {
    id: 1,
    name: 'a3'
  }

  ]

  //methods
  onClick() {
    console.log('click')
  }

  onSave(data: any) {
    console.log(data)
  }
  onSelect(item: any) {
    console.log(item)
    this.selectedItem = item
  }
}
