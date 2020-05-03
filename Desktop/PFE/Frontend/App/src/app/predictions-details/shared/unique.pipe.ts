import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(feature: []): any {
    const uniques = [...new Set(feature)];
    return uniques;
  }

}
