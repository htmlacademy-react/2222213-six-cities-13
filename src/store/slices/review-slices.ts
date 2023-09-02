import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TReview } from '../../types/review-type';
import { NameSpace } from '../../const';
import { fetchReviews } from '../api-actions/review-api';

type TReviewsState = {
  reviews: TReview[];
}

const initialState: TReviewsState = {
  reviews: []
};

const reviewsSlices = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<TReview>) {
      state.reviews.push(action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});

export default reviewsSlices.reducer;

export const { addReview } = reviewsSlices.actions;
