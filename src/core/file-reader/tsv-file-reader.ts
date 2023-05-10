import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../types/offer.type.js';
import { OfferType } from '../../types/offer-types.enum.js';
import { OfferCity } from '../../types/offer-city.enum.js';
import { UserType } from '../../types/user-types.enum.js';


export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, createdDate, city, previewPath, photosPath, flag, rating, type, rooms, guests, price, conveniences, name, email, avatarPath, password, typeUser, comments, location]) => ({
        title,
        description,
        postDate: new Date(createdDate),
        city: OfferCity[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
        previewPath,
        photosPath: photosPath.split(';')
          .map((namePhoto) => ({namePhoto})),
        flag,
        rating: Number.parseInt(rating, 10),
        type: OfferType[type as 'apartment' | 'house' | 'room' | 'hotel'],
        rooms: Number.parseInt(rooms, 10),
        guests: Number.parseInt(guests, 10),
        price: Number.parseInt(price, 10),
        conveniences: conveniences.split(';')
          .map((nameConveniences) => ({nameConveniences})),
        user: {name, email, avatarPath, password, typeUser: UserType[typeUser as 'pro' | 'usually']},
        comments: Number.parseInt(comments, 10),
        location,
      }));
  }
}
