import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getCountriesList() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getCountriesWeather(countryCapital, alphaCode) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+countryCapital+','+alphaCode+'&APPID=794ee95e63c5a32aaf88cd813fa2e425');
  }
}
