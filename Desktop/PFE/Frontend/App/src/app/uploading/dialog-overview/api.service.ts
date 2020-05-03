import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Employee} from "../../core/Employee";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  isDataSet = false;
  endPoint = 'http://127.0.0.1:5000/predict';
  constructor(private http: HttpClient) {  }

  getPrediction(jsonData) {
    return this.http.post<[Employee]>(this.endPoint, jsonData).toPromise();
   }
  }




