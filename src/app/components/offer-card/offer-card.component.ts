import { Component } from '@angular/core';
import { OfferDetailsComponent } from "../offer-details/offer-details.component";

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [OfferDetailsComponent, OfferDetailsComponent],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.scss'
})
export class OfferCardComponent {

}
