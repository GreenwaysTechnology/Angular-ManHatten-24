import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRepeatDirective } from './directives/appreapte.directive';
import { HighLightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent, AppRepeatDirective,HighLightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
