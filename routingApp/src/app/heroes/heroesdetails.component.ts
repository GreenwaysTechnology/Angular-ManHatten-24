import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroesdetails',
  templateUrl: './heroesdetails.component.html',
  styleUrls: ['./heroesdetails.component.css']
})
export class HeroesdetailsComponent {
  hero!: any
  constructor(private activateRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activateRoute.params.subscribe({
      next: data => {
        console.log(data)
        this.hero = data
      }
    })
  }
}
