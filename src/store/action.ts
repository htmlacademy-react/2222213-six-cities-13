import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer-type';
import { AuthorizationStatus, City } from '../const';
import { TReview, TUser } from '../types/review-type';

export const setCurrentCity = createAction<City>('offers/setCurrentCity');

export const getNearOffers = createAction<TOffer[]>('nearOffers/get');

export const getOffers = createAction<TOffer[]>('offers/get');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('error/setError');

export const isNotOffer = createAction('offer/not');

export const getReview = createAction<TReview[]>('review/get');

export const getOffer = createAction<TOffer>('offer/get');

export const getFavorites = createAction<TOffer[]>('addFavoritesOffers');

export const setOffersLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setUser = createAction<TUser>('user/set');
