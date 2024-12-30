import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreeterModule } from './greeter/greeter.module';
import { HeroesModule } from './heroes/heroes.module';
import { HomeModule } from './home/home.module';
import { NotfoundComponent } from './notfound.component';
import { ProductsModule } from './products/products.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GreeterModule,
    HeroesModule,
    HomeModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NotfoundComponent,
    DashboardComponent
  ]
})
export class AppModule { }
