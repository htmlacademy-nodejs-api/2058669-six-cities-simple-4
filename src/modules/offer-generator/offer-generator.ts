import dayjs from 'dayjs';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems} from '../../core/helpers/random.js';
import { OfferType } from '../../types/offer-types.enum.js';
import { OfferFlag } from '../../types/offer-flag.enum.js';
import { UserType } from '../../types/user-types.enum.js';
import { OfferPrice } from '../../types/offer-price.enum.js';
import { OfferRating } from '../../types/offer-rating.enum.js';
import { OfferRooms } from '../../types/offer-rooms.enum.js';
import { OfferDay } from '../../types/offer-day.enum.js';
import { OfferGuests } from '../../types/offer-guests.enum.js';
export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}
  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const createdDate = dayjs().subtract(generateRandomValue(OfferDay.FIRST_WEEK_DAY, OfferDay.LAST_WEEK_DAY), 'day').toISOString();
    const city = getRandomItem<string>(this.mockData.citys);
    const previewPath = getRandomItem<string>(this.mockData.previewPaths);
    const photosPath = getRandomItems<string>(this.mockData.photosPaths);
    const flagOffer = getRandomItem([OfferFlag.Premium, OfferFlag.Usually]);
    const rating = generateRandomValue(OfferRating.MIN_RATING, OfferRating.MAX_RATING).toString();
    const type = getRandomItem([OfferType.apartment, OfferType.hotel, OfferType.house, OfferType.room]);
    const rooms = generateRandomValue(OfferRooms.MIN_ROOMS, OfferRooms.MAX_ROOMS).toString();
    const guests = generateRandomValue(OfferGuests.MIN_GUESTS, OfferGuests.MAX_GUESTS).toString();
    const price = generateRandomValue(OfferPrice.MIN_PRICE, OfferPrice.MAX_PRICE).toString();
    const conveniences = getRandomItems<string>(this.mockData.conveniences);
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarPath = getRandomItem<string>(this.mockData.avatarPaths);
    const password = getRandomItem<string>(this.mockData.passwords);
    const typeUser = getRandomItem([UserType.pro, UserType.usually]);
    const comments = getRandomItem<number>(this.mockData.comments);
    const latitude = getRandomItem<string>(this.mockData.latitude);
    const longitude = getRandomItem<string>(this.mockData.longitude);


    return [
      title,
      description,
      createdDate,
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
    ].join('\t');
  }
}
