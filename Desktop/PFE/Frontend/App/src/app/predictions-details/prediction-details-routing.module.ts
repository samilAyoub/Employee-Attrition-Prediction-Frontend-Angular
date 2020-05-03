import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BarComponent} from './shared/bar/bar.component';
import {PieComponent} from './shared/pie/pie.component';
import {PredictionsDetailsComponent} from './predictions-details.component';
import {PredictionDetailsGuard} from './prediction-details.guard';
import {ScatterComponent} from './shared/scatter/scatter.component';
import {LineComponent} from './shared/line/line.component';

const routes: Routes = [
  {
    path: 'pred',
    component: PredictionsDetailsComponent,
    canActivate: [PredictionDetailsGuard],
    children: [
      {path: 'bar', component: BarComponent},
      {path: 'pie', component: PieComponent},
      {path: 'scatter', component: ScatterComponent},
      {path: 'line', component: LineComponent}
    ]
  }];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PredictionDetailsRoutingModule { }
