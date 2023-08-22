import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { TAddReview, TReview } from '../../types/review-type';
import { ApiRoute } from '../../const';
import { getReview } from '../action';
import { TOffer } from '../../types/offer-type';


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

export const addReviews = createAsyncThunk<TReview, { id: TOffer['id']; reviewData: TAddReview }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/addReviews',
  async ({ id, reviewData }, { extra: api }) => {
    const { data } = await api.post<TReview>(`${ApiRoute.Comments}/${id}`, reviewData);

    return data;
  }
);
