import { Component, Input } from '@angular/core';
import { Hero } from './hero.type';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  @Input()
  hero!: Hero
}
