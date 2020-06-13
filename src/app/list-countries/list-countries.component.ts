import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from '../weather-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  countryList: any;

  constructor(private route: ActivatedRoute,private weatherService:WeatherServiceService) { }

  ngOnInit(): void {
    this.weatherService.getCountriesList()
      .subscribe(data => {
        this.countryList = data;
        console.log(this.countryList);
      });
      
  }

}
