import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterModule } from './greeter/greeter.module';
import { HelloModule } from './hello/hello.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,GreeterModule, HelloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
