import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyInterface } from '../interfaces/company/company.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = '/api/company/details'; // Убедитесь, что это правильный URL

  constructor(private http: HttpClient) {}

  // Метод для получения данных компании по ID

  getCompanyById(companyId: string): Observable<CompanyInterface> {
    return this.http.get<CompanyInterface>(`${this.apiUrl}/${companyId}`);
  }
    /*
  public getCompanyById(id: string): CompanyInterface {
    this.http.get<CompanyInterface>(`/api/company/details/${id}`).subscribe({
        next: (res) => {
          return res;
            //console.log('Response:', res);
            //this.company = res; // Присваиваем полученные данные
            //this.statusPanel = this.company.title;
        },
        error: (error) => {
            console.error('Error:', error); // Обработка ошибок
        }
    });
  }

  
  */
}

    /*
    constructor(
      private http: HttpClient, 
      ) {}
  
      getCompanyById(id: string): Observable<CompanyInterface> {

      return this.http.get<CompanyInterface>(`/api/company/details/${id}`);
    }
      */

