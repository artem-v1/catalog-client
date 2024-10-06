import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from "./components/shared/footer/footer.component";
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,  RouterOutlet, HomeComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'catalog-angular-bootstrap';
  keycloakService: KeycloakService;
  httpClient: HttpClient;
  statusPanel: string = '';

  constructor(keycloakService: KeycloakService, httpClient: HttpClient) {
    this.keycloakService = keycloakService;
    this.httpClient = httpClient;

    keycloakService.keycloakEvents$.subscribe({
      next(event) {
        if (event.type == KeycloakEventType.OnTokenExpired) {
          keycloakService.updateToken(40);
        }
      }
    });
  }


  public async sendHttpRequest() {

    this.httpClient.get('/api/company/all')
      .subscribe(res => {
        console.log(res)
      })

    this.statusPanel = "HTTP Request Sent. Please check browser's network tab";

  }

  
  /*
  public async sendHttpRequest() {
    this.httpClient.get('/api/company/all')
      .subscribe({
        next: (res) => {
          console.log('Response:', res);
          this.statusPanel = res.valueOf.name;
        },
        error: (error) => {
          console.error('Error:', error);
          
        }
      });

    //this.statusPanel = "HTTP Request Sent. Please check browser's network tab";
}
    */


}
