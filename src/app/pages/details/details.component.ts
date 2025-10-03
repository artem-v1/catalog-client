import { Component, OnInit } from '@angular/core';
import { OfferCardComponent } from '../../components/offer-card/offer-card.component';
import { CharacteristicsComponent } from '../../components/characteristics/characteristics.component';
import { PriceComponent } from '../../components/price/price.component';
import { CompanyInterface } from '../../interfaces/company/company.interface';
import { Observable, of, Subscription, switchMap } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, CommonModule, OfferCardComponent, CharacteristicsComponent, PriceComponent, HttpClientModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  //providers: [CompanyService]
})
export class DetailsComponent {
/*
  company!: CompanyInterface; // Определите переменную для хранения данных компании
  private route!: ActivatedRoute;
  //private companyService!: CompanyService;
  statusPanel: string = "";

  constructor(private httpClient: HttpClient, route: ActivatedRoute, 
    private companyService: CompanyService
  ) { 
    this.route = route;
    //this.companyService = companyService;
    console.log('HttpClient:', httpClient); // Это должно выводить объект HttpClient

  }

  ngOnInit(): void {
    console.log('DetailsComponent initialized'); // Это сообщение должно появляться в консоли

  }

*/
}
