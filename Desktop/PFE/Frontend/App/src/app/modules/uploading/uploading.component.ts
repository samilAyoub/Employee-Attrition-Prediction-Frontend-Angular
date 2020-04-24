import { Component, OnInit } from '@angular/core';
import {DatasetService} from '../../Services/dataset.service';

@Component({
  selector: 'app-uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.scss']
})
export class UploadingComponent implements OnInit {
  constructor(private datasetService: DatasetService) {
  }


  ngOnInit() {
  }

  uploadFile(event) {
    const filePath = event.target.files[0];
    this.datasetService.setData(filePath);
    }

}

