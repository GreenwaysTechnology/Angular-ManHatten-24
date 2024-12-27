import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import UsersModule from './users/users.module';
import { PostModule } from './posts/post.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,UsersModule,PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
