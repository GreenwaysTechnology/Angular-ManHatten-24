import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesdetailsComponent } from './heroesdetails.component';
import { HeroeComponent } from './heroe.component';
import { HeroformComponent } from './heroform.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroesdetailsComponent,
    HeroeComponent,
    HeroformComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  exports: [HeroesComponent, HeroesdetailsComponent, HeroeComponent, HeroformComponent]
})
export class HeroesModule { }
