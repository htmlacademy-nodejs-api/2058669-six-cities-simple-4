import dayjs from 'dayjs';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems} from '../../core/helpers/random.js';
import { OfferType } from '../../types/offer-types.enum.js';
import { OfferFlag } from '../../types/offer-flag.enum.js';
import { UserType } from '../../types/user-types.enum.js';

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const MIN_RATING = 1;
const MAX_RATING = 5;

const MIN_ROOMS = 1;
const MAX_ROOMS = 8;

const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;


export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}
  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const createdDate = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    const city = getRandomItem<string>(this.mockData.citys);
    const previewPath = getRandomItem<string>(this.mockData.previewPaths);
    const photosPath = getRandomItems<string>(this.mockData.photosPaths);
    const flagOffer = getRandomItem([OfferFlag.Premium, OfferFlag.Usually]);
    const rating = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const type = getRandomItem([OfferType.apartment, OfferType.hotel, OfferType.house, OfferType.room]);
    const rooms = generateRandomValue(MIN_ROOMS, MAX_ROOMS).toString();
    const guests = generateRandomValue(MIN_GUESTS, MAX_GUESTS).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
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
