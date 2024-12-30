import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from './hero.type';

@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.css']
})
export class HeroformComponent {

  //declare custom event
  @Output() //We send event outside(to the immediate parent)
  onHeroSendRequest = new EventEmitter<Hero>()
  heroModel = { id: Math.random(), name: '' }

  //listener
  sendHero() {
    //how to send it
    this.onHeroSendRequest.emit(this.heroModel)
    this.heroModel = { id: Math.random(), name: '' }
  }

}
