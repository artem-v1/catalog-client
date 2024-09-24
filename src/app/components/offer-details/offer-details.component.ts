import { Component } from '@angular/core';
import { CharacteristicsComponent } from '../characteristics/characteristics.component';

@Component({
  selector: 'app-offer-details',
  standalone: true,
  imports: [CharacteristicsComponent],
  templateUrl: './offer-details.component.html',
  styleUrl: './offer-details.component.scss'
})
export class OfferDetailsComponent {

}
