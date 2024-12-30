import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesdetailsComponent } from './heroesdetails.component';
import { HeroeComponent } from './heroe.component'

@NgModule({
  declarations: [
    HeroesComponent,
    HeroesdetailsComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [HeroesComponent,HeroesdetailsComponent,HeroeComponent]
})
export class HeroesModule { }
