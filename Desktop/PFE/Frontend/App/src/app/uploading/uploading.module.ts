import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UploadingComponent} from './uploading.component';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {ApiService} from './dialog-overview/api.service';
import {DataHandlerService} from './data-handler.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {PredictionsDetailsService} from "../predictions-details/predictions-details.service";

@NgModule({
  declarations: [
    UploadingComponent,
    DialogOverviewComponent
  ],
  entryComponents: [
    DialogOverviewComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatDialogModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    DataHandlerService,
    PredictionsDetailsService
  ]
})
export class UploadingModule { }
