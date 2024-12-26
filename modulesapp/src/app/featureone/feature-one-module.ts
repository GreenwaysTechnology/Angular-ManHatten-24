import { NgModule } from '@angular/core';
import { FeatureOneComponent } from './feature-one-component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [FeatureOneComponent],
    imports: [
        SharedModule,
    ],
    exports: [
        FeatureOneComponent
    ]
})
export class FeatureOneModule { }