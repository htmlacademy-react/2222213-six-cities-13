import { createReducer } from '@reduxjs/toolkit';
import {setCurrentCity, getNearOffers} from './action';
import {TCity, TOffer} from '../types/offer-type';
import { offers, offersNear } from '../mocks/offers';
import { CITIES } from '../const';

type TReducer = {
  currentCity: TCity;
  offers: TOffer[];
  nearOffers: TOffer[];
}

const initialState: TReducer = {
  currentCity: CITIES[0],
  offers: offers,
  nearOffers: offersNear
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(getNearOffers, (state) => {
      state.nearOffers = offersNear;
    });
});

export {reducer};
