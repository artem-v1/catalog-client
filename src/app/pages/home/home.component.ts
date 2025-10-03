import { Component } from '@angular/core';
import { SearchFormComponent } from '../../components/forms/search-form/search-form.component';
import { OfferCardComponent } from "../../components/offer-card/offer-card.component";
import { CompanyCardComponent } from "../../components/company-card/company-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchFormComponent, CompanyCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
