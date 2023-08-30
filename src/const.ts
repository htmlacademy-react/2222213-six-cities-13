import {TOffer} from './types/offer-type';
import { TSorting } from './types/sorting';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum OfferType {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel'
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const SortDescription = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

function sortByRating(a: TOffer, b: TOffer) {
  return b.rating - a.rating;
}

function sortLowToHigh(a: TOffer, b: TOffer) {
  return a.price - b.price;
}

function sortHighToLow(a: TOffer, b: TOffer) {
  return b.price - a.price;
}

export const sorting: Record<TSorting, (offers: TOffer[]) => TOffer[]> = {
  Popular: (offers: TOffer[]) => [...offers],
  PriceHighToLow: (offers: TOffer[]) => [...offers].sort(sortHighToLow),
  PriceLowToHigh: (offers: TOffer[]) => [...offers].sort(sortLowToHigh),
  TopRatedFirst: (offers: TOffer[]) => [...offers].sort(sortByRating)
};

export enum ApiRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export const capitalize = (text: string): string => text[0].toUpperCase() + text.slice(1);

export const LoginFormEmpty = {
  Email: '',
  Password: '',
} as const;

const RatingConfig = {
  MaxRating: 5,
  MaxPercent: 100,
} as const;

export function transformRatingToPercent(rating: number): number {
  return Math.round(rating) / RatingConfig.MaxRating * RatingConfig.MaxPercent;
}

export enum NameSpace {
  Offers = 'offers',
  Offer = 'offer',
  NearOffers = 'nearOffers',
  FavoritesOffers = 'favoritesOffers',
  Reviews = 'reviews',
  ReviewsForm = 'reviewForm',
  CurrentSorting = 'currentSorting',
  CurrentCity = 'currentCity',
  LoginForm = 'loginForm',
  User = 'user',
  Data = 'data'
}

export enum FavoriteStatus {
  Delete,
  Add
}
