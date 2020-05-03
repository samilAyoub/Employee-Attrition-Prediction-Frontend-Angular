import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartsTableModule} from './shared/charts-table.module';
import {MenuComponent} from './menu/menu.component';
import {PredictionsDetailsComponent} from './predictions-details.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {PredictionDetailsRoutingModule} from './prediction-details-routing.module';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    PredictionsDetailsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ChartsTableModule,
    PredictionDetailsRoutingModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    FlexModule
  ]
})
export class PredictionDetailsModule { }
