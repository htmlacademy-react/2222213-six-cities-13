import { combineReducers } from '@reduxjs/toolkit';
import currentCitySlices from './slices/current-city-slices';
import offersSlices from './slices/offers-slices';
import offerSlices from './slices/offer-slices';
import favoritesOffersSlices from './slices/favorites-offers-slices';
import nearOffersSlices from './slices/near-offers-slices';
import reviewSlices from './slices/review-slices';
import reviewFormSlices from './slices/review-form.slices';
import authorizationUserSlices from './slices/authorization-user-slices';
import loginFormSlices from './slices/login-form-slices';


export const rootReducer = combineReducers({
  currentCity: currentCitySlices,
  offers: offersSlices,
  offer: offerSlices,
  favoritesOffers: favoritesOffersSlices,
  nearOffers: nearOffersSlices,
  reviews: reviewSlices,
  reviewForm: reviewFormSlices,
  user: authorizationUserSlices,
  loginForm: loginFormSlices
});
