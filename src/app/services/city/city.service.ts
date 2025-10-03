import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityInterface } from '../../interfaces/city/city.interface';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) {}

  searchCities(query: string): Observable<CityInterface[]> {
    // Предположим, что API поддерживает поиск по имени города
    return this.http.get<CityInterface[]>(`cd?query=${query}`);
  }
}
