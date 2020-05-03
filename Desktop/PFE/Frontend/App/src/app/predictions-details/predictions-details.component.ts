import { Component, OnInit } from '@angular/core';
import {PredictionsDetailsService} from './predictions-details.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-predictions-details',
  templateUrl: './predictions-details.component.html',
  styleUrls: ['./predictions-details.component.scss']
})
export class PredictionsDetailsComponent implements OnInit {
  constructor(private predictionsDetailsService: PredictionsDetailsService) {
  }
  ngOnInit(): void {
  }
}
