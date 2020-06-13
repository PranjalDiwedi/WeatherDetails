import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {WeatherServiceService} from '../weather-service.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  name: string = this.route.snapshot.paramMap.get('name');
  aplphaCode : string = this.route.snapshot.paramMap.get('countryCode')
  weatherDetail :any;
  constructor(private route: ActivatedRoute, private weatherService:WeatherServiceService) { 
    this.weatherService.getCountriesWeather(this.name, this.aplphaCode)
      .subscribe(data => {
        this.weatherDetail = data
        console.log(data);
      });
  }

  ngOnInit(): void {
  }

}
