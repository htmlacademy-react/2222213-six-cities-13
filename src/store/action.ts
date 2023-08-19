import { createAction } from '@reduxjs/toolkit';
import { TCity, TOffer } from '../types/offer-type';
import { AuthorizationStatus } from '../const';

export const setCurrentCity = createAction<TCity>('offers/setCurrentCity');

export const getNearOffers = createAction('nearOffers/get');

export const getOffers = createAction<TOffer[]>('offers/get');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
