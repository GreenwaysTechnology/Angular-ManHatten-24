import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { CommonModule } from "@angular/common";
import { UsersService } from "./users.service";

@NgModule({
    imports: [CommonModule],
    declarations: [UserComponent],
    providers: [UsersService],
    exports: [UserComponent]
})
export default class UsersModule {

}