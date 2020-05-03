import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PredictionsDetailsService} from '../../predictions-details.service';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent implements OnInit {
  public dataset;
  public xLabel;
  public yLabel;
  public zLabel;
  public scatterChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public scatterChartType = 'scatter';
  public scatterChartLegend = true;
  constructor(private activatedRoute: ActivatedRoute,
              private predictionsDetailsService: PredictionsDetailsService ) {}

  ngOnInit() {
    this.predictionsDetailsService.subscribe(data => { // tracking data
      this.dataset = data;
    });
    this.activatedRoute.queryParams.subscribe(params => { // tracking url params
      this.xLabel = params.x;
      this.yLabel = params.y;
      this.zLabel = params.z;
    });
  }
}
