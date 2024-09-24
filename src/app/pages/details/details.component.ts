import { Component } from '@angular/core';
import { OfferCardComponent } from '../../components/offer-card/offer-card.component';
import { CharacteristicsComponent } from '../../components/characteristics/characteristics.component';
import { PriceComponent } from '../../components/price/price.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [OfferCardComponent, CharacteristicsComponent, OfferCardComponent, PriceComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

}
