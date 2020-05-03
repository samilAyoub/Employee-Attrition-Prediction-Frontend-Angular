import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BarComponent} from './bar/bar.component';
import {PieComponent} from './pie/pie.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ChartsModule} from 'ng2-charts';

import { LabelPipe } from './label.pipe';
import { UniquePipe } from './unique.pipe';
import { HistogramPipe } from './histogram.pipe';
import { ScatterComponent } from './scatter/scatter.component';
import {ScatterPipe} from './scatter.pipe';
import {LineComponent} from './line/line.component';

@NgModule({
  declarations: [
    BarComponent,
    PieComponent,
    LabelPipe,
    UniquePipe,
    HistogramPipe,
    ScatterComponent,
    ScatterPipe,
    LineComponent
  ],
  exports: [
    BarComponent,
    PieComponent,
    ScatterComponent,
    LineComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    ChartsModule
  ]
})
export class ChartsTableModule { }
