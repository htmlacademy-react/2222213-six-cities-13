import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offer-type';
import { NameSpace } from '../../const';
import { fetchOffers } from '../api-actions/offers-api';

type TOffersState = {
  offers: TOffer[];
  isLoading: boolean;
}

const initialState: TOffersState = {
  offers: [],
  isLoading: false,
};

const offersSlices = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      });
  }
});

export default offersSlices.reducer;
