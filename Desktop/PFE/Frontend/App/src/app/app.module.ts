import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {UploadingModule} from './uploading/uploading.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {PredictionDetailsModule} from './predictions-details/prediction-details.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    CommonModule,
    SharedModule,
    UploadingModule,
    PredictionDetailsModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
