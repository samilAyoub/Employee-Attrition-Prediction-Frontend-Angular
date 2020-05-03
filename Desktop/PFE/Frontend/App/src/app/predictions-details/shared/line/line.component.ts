import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PredictionsDetailsService} from '../../predictions-details.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  public dataset;
  public xLabel;
  public yLabel;
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartType = 'line';
  public lineChartLegend = true;
  constructor(private activatedRoute: ActivatedRoute,
              private predictionsDetailsService: PredictionsDetailsService) {}

  ngOnInit() {
    this.predictionsDetailsService.subscribe(data => { // tracking data
      this.dataset = data;
    });
    this.activatedRoute.queryParams.subscribe(params => { // tracking url params
      this.xLabel = params.x;
      this.yLabel = params.y;
    });
  }

}
