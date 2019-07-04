import { Component, OnInit } from '@angular/core';
import {WeatherService} from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  location = { cityname: 'London', countrycode: 'uk' };
  weather = undefined;
  constructor(private weatherservice: WeatherService) {
      this.weatherservice = weatherservice;
    }
    ngOnInit() {
      this.getWeather(this.location.cityname, this.location.countrycode);
}
  public getWeather(cityname, countrycode) {
    this.weatherservice.getWeather(cityname, countrycode).subscribe(
      res => {
        console.log(res);
        this.weather = res;
      }
    );
  }
 public Submit(cityname: HTMLInputElement, countrycode: HTMLInputElement) {
    this.getWeather(cityname.value, countrycode.value);
    cityname.value = '';
    countrycode.value = '';
    cityname.focus();
    return false;
  }
}
