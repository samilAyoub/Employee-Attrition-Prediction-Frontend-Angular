import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ApiService} from '../uploading/dialog-overview/api.service';

@Injectable({
  providedIn: 'root'
})
export class PredictionDetailsGuard implements CanActivate {
  constructor(private apiService: ApiService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.apiService.isDataSet === true) { return true; }
    this.router.navigate(['']);
  }

}
