import { NgModule } from "@angular/core";
import { GreeterComponent } from "./greeter.component";


@NgModule({
    declarations: [GreeterComponent],
    imports: [],
    exports: [GreeterComponent] //you tell GreeterComponent is available outside this module
})
export class GreeterModule {

}