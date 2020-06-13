import { Routes } from '@angular/router';
import {ListCountriesComponent} from './list-countries/list-countries.component';
import {WeatherReportComponent} from './weather-report/weather-report.component';

export const allAppRoutes: Routes = [
    { path: '', component: ListCountriesComponent },
    { path : 'weatherReport', component: WeatherReportComponent}
  ];