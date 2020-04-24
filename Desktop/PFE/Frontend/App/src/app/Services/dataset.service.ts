import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Papa} from 'ngx-papaparse';

// dictionary to index data by column
interface Idatasource {
  [index: string]: any;
}

@Injectable({
  providedIn: 'root'
})

export class DatasetService {
  dataSource: Idatasource = {};
    constructor(private router: Router, private papa: Papa) { }
    setData(filePath) {
      this.papa.parse(filePath, {
        complete: results => {
          if (this.getDataByColumn(results.data)) {
            this.router.navigate(['/dash']);
          }
        },
        header: false,
        skipEmptyLines: true,
        dynamicTyping: true
      });
  }
  getDataByColumn(data) {
    const header = data.shift();
    const rows = data.slice(1);
    const numberOfColumns = header.length;
    const DataColumn = [...Array(numberOfColumns)].map(item => []) ;
    for (const row of rows) {
      for (let i = 0; i < numberOfColumns; i++) {
        DataColumn[i].push(row[i]);
      }
    }
    // tslint:disable-next-line:forin
    for (const i in header) {
      this.dataSource[header[i]] = DataColumn[i];
    }
    return true;
  }
}



