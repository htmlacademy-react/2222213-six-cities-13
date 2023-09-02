import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { TAddReview, TReview } from '../../types/review-type.ts';
import { TOffer } from '../../types/offer-type.ts';
import { ApiRoute } from '../../const.ts';
import { addReview } from '../slices/review-slices.ts';
import { clearFormReview } from '../slices/review-form.slices.ts';

export const fetchReviews = createAsyncThunk<TReview[], Pick<TOffer, 'id'>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchReviews',
  async ({ id }, { extra: api }) => {
    const { data } = await api.get<TReview[]>(`${ApiRoute.Comments}/${id}`);

    return data;
  }
);

export const submitReview = createAsyncThunk<void, { id: TOffer['id']; reviewData: TAddReview }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/submitReview',
  async ({ id, reviewData }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<TReview>(`${ApiRoute.Comments}/${id}`, reviewData);
      dispatch(addReview(data));
      dispatch(clearFormReview());
    } catch {
      throw new Error('error');
    }
  }
);
