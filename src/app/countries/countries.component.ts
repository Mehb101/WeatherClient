import { Component } from '@angular/core';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  public Countries: Country[] = [];
  
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.http.get<Country[]>(environment.baseUrl+'api/Countries').subscribe(
      {
        next: result=> this.Countries = result,
        error: error => console.error(error)
      }
      
    );
}
}
