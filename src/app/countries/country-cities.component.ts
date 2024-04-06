import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Countrycities } from './countrycities';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-country-cities',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './country-cities.component.html',
  styleUrl: './country-cities.component.css'
})
export class CountryCitiesComponent {

public Countrycities: Countrycities[] = [];
public displayedColumns : string[]= ["cityId", "name", "latitude", "longitude"];
  id: number;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute ) {
    this.id= -1;
  }
  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    let idparameter = this.activatedRoute.snapshot.paramMap.get("id");
    this.id = idparameter? + idparameter:0;
    this.http.get<Countrycities[]>(`${environment.baseUrl}api/Countries/Countrycities/${this.id}`).subscribe(
      {
        next: result=> this.Countrycities = result,
        error: error => console.error(error)
      }
      
    );
}  title = 'cityClient' ;
}
