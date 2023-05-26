import { OfferCity } from './offer-city.enum';
import { OfferConveniences } from './offer-conveniences.enum';
import { OfferType } from './offer-types.enum';
import { Photo } from './photo.type';
import { User } from './user.type';
import { OfferFlag } from './offer-flag.enum';
import { OfferCoordinates } from './offer-coordinates.enum';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: OfferCity;
  previewPath: string;
  photosPath: Photo[];
  flagOffer: OfferFlag;
  rating: number;
  type: OfferType;
  rooms: number;
  guests: number;
  price: number;
  conveniences: OfferConveniences[];
  user: User;
  comments: number;
  location: OfferCoordinates;
}
