import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../../core/Employee';

@Pipe({
  name: 'label'
})
export class LabelPipe implements PipeTransform {

  transform(data: [Employee], feature: string): any[] {
    return data.map(employee => employee[feature]);
  }

}
