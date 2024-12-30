import { Component, Input } from '@angular/core';
import { Hero } from './hero.type';

@Component({
  selector: 'app-heroesdetails',
  templateUrl: './heroesdetails.component.html',
  styleUrls: ['./heroesdetails.component.css']
})
export class HeroesdetailsComponent {
  @Input()
  heroes!: Array<Hero>
  @Input()
  title:string = ""
}
