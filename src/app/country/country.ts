import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';
import { CountryData } from './country-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { RouterLink } from "@angular/router";
import { Observable } from 'rxjs';
import { A } from '@angular/cdk/keycodes';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-country',
  imports: [RouterLink, 
    AsyncPipe
  ],
  templateUrl: './country.html',
  styleUrl: './country.scss'
})
export class Country {
Countries$: Observable<CountryData[]>;
constructor(private http: HttpClient) {
   this.Countries$ = http.get<CountryData[]>(environment.apiUrl + 'api/countries');
  }
}
