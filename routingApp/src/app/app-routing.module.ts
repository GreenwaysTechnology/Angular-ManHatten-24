import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaiComponent } from './greeter/hai.component';
import { HelloComponent } from './greeter/hello.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound.component';
import { ProductsComponent } from './products/products.component';
import { BooksComponent } from './products/books.component';
import { PhonesComponent } from './products/phones.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'hai', component: HaiComponent
  },
  {
    path: 'hello', component: HelloComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: '', redirectTo: '/products/books', pathMatch: 'full' },
      { path: 'books', component: BooksComponent },
      { path: 'electronics', component: PhonesComponent }
    ]
  },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
