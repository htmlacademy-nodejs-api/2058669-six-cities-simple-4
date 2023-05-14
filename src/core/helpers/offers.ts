import { OfferCity } from '../../types/offer-city.enum.js';
import { OfferFlag } from '../../types/offer-flag.enum.js';
import { OfferType } from '../../types/offer-types.enum.js';
import { Offer } from '../../types/offer.type.js';
import { UserType } from '../../types/user-types.enum.js';


export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    createDate,
    city,
    previewPath,
    photosPath,
    flagOffer,
    rating,
    type,
    rooms,
    guests,
    price,
    conveniences,
    name,
    email,
    avatarPath,
    password,
    typeUser,
    comments,
    latitude,
    longitude
  ] = offerData.replace('\n', '').split('\t');

  const user = {
    name,
    email,
    avatarPath,
    password,
    typeUser: UserType[typeUser as 'pro' | 'usually'],
  };

  return {
    title,
    description,
    postDate: new Date(createDate),
    city: OfferCity[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
    previewPath,
    photosPath: photosPath.split(';')
      .map((namePhoto) => ({namePhoto})),
    flagOffer: OfferFlag[flagOffer as 'Premium' | 'Usually'],
    rating: Number.parseInt(rating, 10),
    type: OfferType[type as 'apartment' | 'house' | 'room' | 'hotel'],
    rooms: Number.parseInt(rooms, 10),
    guests: Number.parseInt(guests, 10),
    price: Number.parseInt(price, 10),
    conveniences: conveniences.split(';')
      .map((nameConveniences) => ({nameConveniences})),
    user,
    comments: Number.parseInt(comments, 10),
    location: {latitude, longitude},
  } as Offer;
}


