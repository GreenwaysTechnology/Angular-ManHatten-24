import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HaiComponent } from './hai.component';
import { HelloComponent } from './hello.component';



@NgModule({
  declarations: [
    HaiComponent,
    HelloComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HaiComponent,
    HelloComponent
  ]
})
export class GreeterModule { }
