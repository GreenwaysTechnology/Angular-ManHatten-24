import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: any[] = [
    { id: 1, name: 'RubberMan' },
    { id: 2, name: 'JamesBond' },
    { id: 3, name: 'SpiderMan' },
    { id: 4, name: 'SuperMan' },
    { id: 5, name: 'WonderWoman' },

  ]
}
