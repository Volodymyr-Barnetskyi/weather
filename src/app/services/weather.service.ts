import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
// tslint:disable-next-line: no-inferrable-types
  URL: string = '';
  constructor(private http: HttpClient) {
    this.http = http;
    this.URL = `https://api.openweathermap.org/data/2.5/weather?appid=06204559fada6fa5d62386b801a2f69f&units=metric&q=`;
  }
  getWeather(cityname: string, countrycode: string ): Observable<any> {
    return this.http.get(`${this.URL}${cityname},${countrycode}`);
  }
}
