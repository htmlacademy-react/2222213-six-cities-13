import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offer-type';
import { NameSpace } from '../../const';
import { addFavorite, deleteFavorite, fetchFavoritesOffers } from '../api-actions/favorites-api';

type TFavoritesOffersState = {
  favoritesOffers: TOffer[];
  isLoading: boolean;
}

const initialState: TFavoritesOffersState = {
  favoritesOffers: [],
  isLoading: false
};

const favoritesOffersSlices = createSlice({
  name: NameSpace.FavoritesOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoritesOffers.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.isLoading = false;
      })
      .addCase(addFavorite.fulfilled, (state, action: PayloadAction<TOffer>) => {
        state.favoritesOffers.push(action.payload);
      })
      .addCase(deleteFavorite.fulfilled, (state, action: PayloadAction<TOffer>) => {
        state.favoritesOffers = state.favoritesOffers.filter((offer) => offer.id !== action.payload.id);
      });
  }
});

export default favoritesOffersSlices.reducer;
