import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../../core/Employee';

export interface GroupByDict {
  [key: string]: any[];
}

export interface SerieFormat {
  data: number[];
  label: string;
}
@Pipe({
  name: 'hist'
})
export class HistogramPipe implements PipeTransform {

   transform(dataset: Employee[], xLabel: string, zLabel: string ): any {
     const response: SerieFormat[] = [];
     const xUniques = this.getUniques(dataset, xLabel);
     let serieData;
     if (zLabel !== 'none') {
       const zUniques = this.getUniques(dataset, zLabel);
       serieData = [];
       for (const zUnique of zUniques) {
         const zUniqueData = dataset.filter(employee => employee[zLabel] === zUnique);
         for (const xUnique of xUniques) {
           const countUniqueZX = zUniqueData.filter(employee => employee[xLabel] === xUnique).length;
           serieData.push(countUniqueZX);
         }
         response.push({data: serieData, label: zUnique});
       }
     } else {
       serieData = [];
       for (const xUnique of xUniques) {
         const xCount = dataset.filter(employee => employee[xLabel] === xUnique).length;
         serieData.push(xCount);
       }
       response.push({data: serieData, label: xLabel});
     }
     console.log(response);
     return response;
  }

  getUniques(data: Employee[], label): any[] {
     const mapped = data.map(employee => employee[label]);
     return [...new Set(mapped)];
  }
}
