import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { submitReview } from '../api-actions/review-api';

type TReviewsFormState = {
  comment: string;
  rating: number;
  isValid: boolean;
  isSends: boolean;
}

const initialState: TReviewsFormState = {
  comment: '',
  rating: 0,
  isValid: false,
  isSends: false
};

const reviewsFormSlices = createSlice({
  name: NameSpace.ReviewsForm,
  initialState,
  reducers: {
    updateComment(state, action: PayloadAction<string>) {
      state.comment = action.payload;
    },
    updateRating(state, action: PayloadAction<number>) {
      state.rating = action.payload;
    },
    setFormReviewValid(state, action: PayloadAction<boolean>) {
      state.isValid = action.payload;
    },
    clearFormReview(state) {
      state.comment = '';
      state.rating = 0;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(submitReview.pending, (state) => {
        state.isSends = true;
      })
      .addCase(submitReview.fulfilled, (state) => {
        state.isSends = false;
      })
      .addCase(submitReview.rejected, (state) => {
        state.isSends = false;
      });
  }
});

export default reviewsFormSlices.reducer;

export const {
  updateComment,
  updateRating,
  setFormReviewValid,
  clearFormReview
} = reviewsFormSlices.actions;

