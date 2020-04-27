import { Component, OnInit } from '@angular/core';
import {DatasetService} from '../../Services/dataset.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogOverviewComponent} from '../../shared/components/dialog-overview/dialog-overview.component';

export interface DialogData {
  features: [];
  models: [];
}

@Component({
  selector: 'app-uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.scss']
})
export class UploadingComponent implements OnInit {
  features: [];
  models = ['Logistic Regression', 'Naive Bayes', 'Random Forest', 'XGBoost'];
  selectedModel = 'Logistic Regression';
  constructor(private datasetService: DatasetService, public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      data: {features: this.features, models: this.models, selectedModel: this.selectedModel}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedModel = result;
    });
  }


  ngOnInit() {
  }

  uploadFile(event) {
    const filePath = event.target.files[0];
    this.datasetService.setData(filePath);
    this.openDialog();
    }

}

