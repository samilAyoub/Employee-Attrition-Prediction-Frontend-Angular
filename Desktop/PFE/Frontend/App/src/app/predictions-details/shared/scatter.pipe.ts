import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../../core/Employee';

export interface DataFormat {
  x: number;
  y: number;
}

export interface SerieFormat {
  data: DataFormat[];
  label: string;
}

@Pipe({
  name: 'scatter'
})
export class ScatterPipe implements PipeTransform {

  transform(dataset: [Employee], xLabel: string, yLabel: string, zLabel: string): any {
    const response: SerieFormat[] = [];
    let scatterData: DataFormat[];
    if (zLabel !== 'none') {
      const zUniques = this.getUniques(dataset, zLabel);
      for (const zUnique of zUniques) {
        scatterData = [];
        const zUniqueData = dataset.filter(employee => employee[zLabel] === zUnique);
        zUniqueData.map(employee => {
          scatterData.push({x: employee[xLabel], y: employee[yLabel]});
        });
        response.push({data: scatterData, label: zUnique});
      }
    } else {
      scatterData = [];
      dataset.map(employee => {
        scatterData.push({x: employee[xLabel], y: employee[yLabel]});
      });
      response.push({data: scatterData, label: yLabel});
    }
    return response;
  }
  getUniques(data: Employee[], label): any[] {
    const mapped = data.map(employee => employee[label]);
    return [...new Set(mapped)];
  }

}
