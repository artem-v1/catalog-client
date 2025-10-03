import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyInterface } from '../interfaces/company/company.interface';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  //private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Пример API

  constructor(private http: HttpClient) {}

  // Метод для получения данных
  getTestData(): Observable<CompanyInterface> {
    return this.http.get<any>(`/api/company/details/1`); // Выполняем GET-запрос
  }
}
