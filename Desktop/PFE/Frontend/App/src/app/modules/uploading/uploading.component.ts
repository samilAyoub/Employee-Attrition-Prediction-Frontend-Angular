import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../Services/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogOverviewComponent} from '../../shared/components/dialog-overview/dialog-overview.component';
import {DataHandlerService} from '../../Services/data-handler.service';

@Component({
  selector: 'app-uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.scss']
})
export class UploadingComponent implements OnInit {
  models = ['Logistic Regression', 'Naive Bayes', 'Random Forest', 'XGBoost'];
  selectedModel = 'Logistic Regression';

  constructor(private dataHandlerService: DataHandlerService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }


  async openDialog(event) {
    const filePath = event.target.files[0];
    const jsonData = await this.dataHandlerService.csvToJson(filePath); // transform csv file to json
    const dialogRef = this.dialog.open(DialogOverviewComponent, { // open dialog, send data and conserve the instance
        data: {json: jsonData, models: this.models, selectedModel: this.selectedModel}
      });
    dialogRef.afterClosed().subscribe(result => { // subscribe and get data from dialog
        this.selectedModel = result;
      });
    }
}
