import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroesdetailsComponent } from './heroesdetails.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroesdetailsComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  exports: [
    HeroesComponent,
    HeroesdetailsComponent
  ]
})
export class HeroesModule { }
