import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PredictionsDetailsService} from '../../predictions-details.service';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  public dataset;
  public xLabel;
  public pieChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public pieChartType = 'pie';
  public pieChartLegend = true;
  constructor(private activatedRoute: ActivatedRoute,
              private predictionsDetailsService: PredictionsDetailsService) {}

  ngOnInit() {
    this.predictionsDetailsService.subscribe(data => { // tracking data
      this.dataset = data;
    });
    this.activatedRoute.queryParams.subscribe(params => { // tracking url params
      this.xLabel = params.x;
    });
  }

}
