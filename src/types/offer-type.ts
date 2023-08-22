import { City } from '../const';
import { TUser } from './review-type';

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  name: City;
  location: TLocation;
};

type TOfferHost = Omit<TUser, 'email' | 'token'>;

export type TOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  images: string[];
  maxAdults: number;
  host: TOfferHost;
};

export type TOffers = TOffer[];

