import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from "./post.component";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports: [CommonModule, HttpClientModule, FormsModule],
    declarations: [PostComponent],
    exports: [PostComponent]
})
export class PostModule {

}