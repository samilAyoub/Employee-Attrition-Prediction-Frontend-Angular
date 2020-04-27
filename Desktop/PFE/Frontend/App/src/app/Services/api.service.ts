import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Papa} from 'ngx-papaparse';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {retry} from 'rxjs/operators';
import {DataHandlerService} from "./data-handler.service";



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endPoint = 'http://127.0.0.1:5000/predict';
  constructor(private http: HttpClient) {  }

  getPrediction(jsonData) {
      return this.http.post(this.endPoint, jsonData);
   }
  }




