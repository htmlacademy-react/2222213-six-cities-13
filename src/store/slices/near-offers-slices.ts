import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offer-type';
import { NameSpace } from '../../const';
import { fetchNearOffer } from '../api-actions/near-offers';

type TNearOffersState = {
  nearOffers: TOffer[];
}

const initialState: TNearOffersState = {
  nearOffers: []
};

const nearOfferSlices = createSlice({
  name: NameSpace.NearOffers,
  initialState,
  reducers: {
    dropNearOffers(state) {
      state.nearOffers = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNearOffer.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  }
});

export default nearOfferSlices.reducer;
export const { dropNearOffers } = nearOfferSlices.actions;
