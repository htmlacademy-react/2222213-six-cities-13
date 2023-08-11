import { createAction } from '@reduxjs/toolkit';
import { TCity } from '../types/offer-type';

export const setCurrentCity = createAction<TCity>('offers/setCurrentCity');

export const getOffers = createAction('offers/get');

export const getNearOffers = createAction('nearOffers/get');
