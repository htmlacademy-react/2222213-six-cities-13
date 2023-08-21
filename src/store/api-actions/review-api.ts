import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { TReview } from '../../types/review-type';
import { ApiRoute } from '../../const';
import { getReview } from '../action';


export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchReviews',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<TReview[]>(`${ApiRoute.Comments}/${id}`);

    dispatch(getReview(data));
  }
);
