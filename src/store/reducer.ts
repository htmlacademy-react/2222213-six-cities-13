import { createReducer } from '@reduxjs/toolkit';
import {setCurrentCity, getNearOffers, getOffers, requireAuthorization, setError} from './action';
import {TCity, TOffer} from '../types/offer-type';
import { AuthorizationStatus, CITIES } from '../const';
import { nearOffers } from '../mocks/offers';


const initialState: {
  currentCity: TCity;
  offers: TOffer[];
  nearOffers: TOffer[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
} = {
  currentCity: CITIES[0],
  offers: [],
  nearOffers: nearOffers,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getNearOffers, (state) => {
      state.nearOffers = nearOffers;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
