import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {DatasetService} from "../../../Services/dataset.service";

interface Serie {
  name: string;
  data: [];
}
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})



export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];
  serie: Serie = {name : 'Age', data: this.datasetService.dataSource.Age};
  //series: Serie[] = [];

  Highcharts = Highcharts;

  constructor(private datasetService: DatasetService) { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Age by gander'
      },
      xAxis: {
        categories: ['male', 'female']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{name : 'Age', data: this.datasetService.dataSource.Age}]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
