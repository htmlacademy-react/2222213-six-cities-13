import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offer-type';
import { NameSpace } from '../../const';
import { fetchOffer } from '../api-actions/offer-api';

type TOfferState = {
  offer: TOffer | null;
  isLoading: boolean;
  selectedOffer: TOffer['id'] | null;
}

const initialState: TOfferState = {
  offer: null,
  isLoading: false,
  selectedOffer: null
};

const offerSlices = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    addSelectedOffer(state, action: PayloadAction<TOffer['id'] | null>) {
      state.selectedOffer = action.payload;
    },
    dropOffer(state) {
      state.offer = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export default offerSlices.reducer;

export const { addSelectedOffer, dropOffer } = offerSlices.actions;
