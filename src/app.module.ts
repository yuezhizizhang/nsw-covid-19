import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DailyComponent } from './daily/daily.component';
import { SuburbComponent } from './suburb/suburb.component';
import { PostcodeComponent } from './postcode/postcode.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DailySeriesComponent } from './daily/daily-series/daily-series.component';
import { DailyAreasComponent } from './daily/daily-areas/daily-areas.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyComponent,
    DailySeriesComponent,
    DailyAreasComponent,
    SuburbComponent,
    PostcodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
