import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PredictionsDetailsService {
  predictionsDetailsSubject = new BehaviorSubject([]);
  constructor() { }

  subscribe(observer) { // subscribe a given observer to the Subject
    this.predictionsDetailsSubject.subscribe(observer);
  }
}

