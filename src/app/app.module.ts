import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {WeatherServiceService} from './weather-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCountriesComponent,
    WeatherReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    HttpClientModule
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
