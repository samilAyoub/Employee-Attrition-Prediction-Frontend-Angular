import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UploadingComponent} from './uploading/uploading.component';
import {PredictionsDetailsComponent} from './predictions-details/predictions-details.component';
import {PredictionDetailsGuard} from './predictions-details/prediction-details.guard';

const routes: Routes = [{
    path: '',
    component: UploadingComponent
  }, {
    path: 'pred',
    canActivate: [PredictionDetailsGuard],
    component: PredictionsDetailsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
