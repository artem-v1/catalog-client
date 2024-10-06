import { CompanyCharacteristicInterface } from "./company-characteristic.interface";
import { OfferInterface } from "./offer.interface";
import { PhotoInterface } from "./photo.interface";
import { PriceInterface } from "./price.interface";
import { ReviewInterface } from "./review.interface";
import { WorkTimeInterface } from "./work-time.interface";

export interface CompanyInterface {
    companyId: number;
    title: string;
    description: string;
    phone: string;
    email: string;
    street: string;
    house: string;
    city: string;
    land: string;
    postCode: string;
    latitude: number;
    longitude: number;
    location: any; 
    photos: PhotoInterface[];
    prices: PriceInterface[];
    workTimes: WorkTimeInterface[];
    companyCharacteristics: CompanyCharacteristicInterface[];
    offers: OfferInterface[];
    reviews: ReviewInterface[];
}
