import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ApiService} from './api.service';
import {PredictionsDetailsService} from '../../predictions-details/predictions-details.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiService: ApiService,
    private predictionsDetailsService: PredictionsDetailsService,
    private router: Router) {}

  ngOnInit() {
  }

  getPrediction() {
    this.apiService.getPrediction(this.data.json)
      .then(response => {
        this.predictionsDetailsService.predictionsDetailsSubject.next(response);
        this.router.navigate(['/pred'] );
        this.apiService.isDataSet = true;
      })
      .catch(err => console.log(err));
  }



}
