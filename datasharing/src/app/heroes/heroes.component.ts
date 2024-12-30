import { Component } from '@angular/core';
import { HeroesService } from './heores.service';
import { Hero } from './hero.type';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes!: Array<Hero>
  hero!: Hero
  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.findAll().subscribe({
      next: (heroes) => {
        this.heroes = heroes
      }
    })
  }
  save(hero: Hero) {
    //http call to send to api
    this.hero = hero
    this.heroesService.save(hero).subscribe({
      next: res => {
        console.log(res)
      }
    })
  }

}
