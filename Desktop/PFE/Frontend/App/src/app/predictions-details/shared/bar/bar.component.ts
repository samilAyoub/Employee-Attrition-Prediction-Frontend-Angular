import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PredictionsDetailsService} from '../../predictions-details.service';

@Component({
  selector: 'app-widget-area',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})



export class BarComponent implements OnInit {
  public dataset;
  public xLabel;
  public yLabel;
  public zLabel;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  constructor(private activatedRoute: ActivatedRoute,
              private predictionsDetailsService: PredictionsDetailsService) {}

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
