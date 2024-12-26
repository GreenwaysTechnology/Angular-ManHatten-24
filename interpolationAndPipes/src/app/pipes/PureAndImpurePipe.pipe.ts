import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterArray',
    pure:true
})
export class PureAndImpurePipe implements PipeTransform {

    transform(value: any[], searchTerm: string): any[] {
        console.log('pipe is called')
        return value.filter(item => item.includes(searchTerm));
    }
}