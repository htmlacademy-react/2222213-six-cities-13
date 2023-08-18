import { createReducer } from '@reduxjs/toolkit';
import {setCurrentCity, getNearOffers, getOffers, requireAuthorization} from './action';
import {TCity, TOffer} from '../types/offer-type';
// import { offers, nearOffers } from '../mocks/offers';
import { AuthorizationStatus, CITIES } from '../const';
import { nearOffers } from '../mocks/offers';

// type TReducer = {
//   currentCity: TCity;
//   offers: TOffer[];
//   nearOffers: TOffer[];
//   authorizationStatus: string;
// }

const initialState: {
  currentCity: TCity;
  offers: TOffer[];
  nearOffers: TOffer[];
  authorizationStatus: string;
} = {
  currentCity: CITIES[0],
  offers: [],
  nearOffers: nearOffers,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    // .addCase(getOffers, (state) => {
    //   state.offers = offers;
    // })
    .addCase(getNearOffers, (state) => {
      state.nearOffers = nearOffers;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
