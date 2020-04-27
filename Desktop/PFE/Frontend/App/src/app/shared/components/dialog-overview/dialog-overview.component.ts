import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ApiService} from '../../../Services/api.service';


@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiService: ApiService) {}

  ngOnInit() {
  }

  getPrediction(): void {
    this.apiService.getPrediction(this.data.json)
     .subscribe(predictions => console.log(predictions));
  }



}
