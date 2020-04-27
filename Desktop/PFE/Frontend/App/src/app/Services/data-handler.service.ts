import { Injectable } from '@angular/core';
import {Papa} from "ngx-papaparse";
import {ApiService} from "./api.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  dataDistributor = new Subject();
  constructor(private papa: Papa) { }

  csvToJson(filePath) { // function to transform csv files to json
    return new Promise((resolve, reject) => {
      this.papa.parse(filePath, {
        complete: results => {
          resolve(results.data);
        },
        error: err => {
          reject(err);
        },
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true
      });
    });
  }

}
