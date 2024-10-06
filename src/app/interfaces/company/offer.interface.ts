import { OfferCharacteristicInterface } from "./offer-characteristic.interface";
import { PhotoInterface } from "./photo.interface";

export interface OfferInterface {
    offerId: number;
    companyId: number;
    categoryOffer: string;
    type: string;
    title: string;
    description: string;
    photoOffers: PhotoInterface[];
    offerCharacteristics: OfferCharacteristicInterface[];
}
