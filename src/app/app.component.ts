import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from "./components/shared/footer/footer.component";
// import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CompanyInterface } from './interfaces/company/company.interface';
import { CompanyService } from './services/company.service';
import { TestComponentComponent } from "./pages/test-component/test-component.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    RouterOutlet, 
    HttpClientModule,
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, 
    TestComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'catalog-angular-bootstrap';
//  keycloakService: KeycloakService;
  httpClient: HttpClient;
  statusPanel: string = '';

  company!: CompanyInterface;
 // companyData!: CompanyInterface;

 //включить вместо строки ниже чтоб работал кейклоак
//  constructor(keycloakService: KeycloakService, httpClient: HttpClient, 
  constructor( httpClient: HttpClient, 
    //private companyService: CompanyService
  ) {
    //включить для кейклоак
  //  this.keycloakService = keycloakService;
    this.httpClient = httpClient;

    //включаить для кейклоак
/*
    keycloakService.keycloakEvents$.subscribe({
      next(event) {
        if (event.type == KeycloakEventType.OnTokenExpired) {
          keycloakService.updateToken(40);
        }
      }
    });
    */
  }

/*
  public async sendHttpRequest() {

    this.httpClient.get('/api/company/details/1')
      .subscribe(res => {
        console.log(res)

      })

    this.statusPanel = "HTTP Request Sent. Please check browser's network tab";

  }

  
  
  public getCompanyById(id: string): void {
    this.httpClient.get<CompanyInterface>(`/api/company/details/${id}`).subscribe({
        next: (res) => {
            console.log('Response:', res);
            this.company = res; // Присваиваем полученные данные
            this.statusPanel = this.company.title;
        },
        error: (error) => {
            console.error('Error:', error); // Обработка ошибок
        }
    });
  }
*/
    
}
    



