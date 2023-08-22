import { createReducer } from '@reduxjs/toolkit';
import {setCurrentCity, getNearOffers, getOffers, requireAuthorization, setError, getOffer, getReview, isNotOffer, getFavorites} from './action';
import {TOffer} from '../types/offer-type';
import { AuthorizationStatus, City } from '../const';
import { TReview } from '../types/review-type';

const initialState: {
  currentCity: City;
  offers: TOffer[];
  nearOffers: TOffer[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  offer: TOffer | null;
  reviews: TReview[];
  favorites: TOffer[];
} = {
  currentCity: City.Paris,
  offers: [],
  nearOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  offer: null,
  reviews: [],
  favorites: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(getReview, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(isNotOffer, (state) => {
      state.offer = null;
    })
    .addCase(getFavorites, (state, action) => {
      state.favorites = action.payload;
    });
});

export {reducer};
