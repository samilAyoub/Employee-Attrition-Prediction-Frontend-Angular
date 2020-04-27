import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Papa} from 'ngx-papaparse';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DatasetService {
  dataSource = {};
  predictions = {};

  constructor(private router: Router,
              private papa: Papa,
              private http: HttpClient) { }

   setData(filePath) {
      this.papa.parse(filePath, {
        complete: results => {
          this.dataSource = results.data;
        },
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true
      });
  }

  getPredictions() {

  }
  }




