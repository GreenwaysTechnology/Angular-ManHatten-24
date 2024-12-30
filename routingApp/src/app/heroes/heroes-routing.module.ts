import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroesdetailsComponent } from './heroesdetails.component';

const routes: Routes = [
  {
    path: '', component: HeroesComponent
  },
  {
    path: 'details/:id', component: HeroesdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
