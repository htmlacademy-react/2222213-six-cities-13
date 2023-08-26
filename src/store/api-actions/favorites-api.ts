import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { TOffer } from '../../types/offer-type';
import { ApiRoute } from '../../const';
import { getFavorites } from '../action';

export const fetchFavorites = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffer[]>(ApiRoute.Favorite);
    dispatch(getFavorites(data));
  },
);

export const favoritesChangeStatus = createAsyncThunk<void, { id: TOffer['id']; status: 0 | 1 }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/changeStatus',
  async ({ id, status }, { dispatch, extra: api }) => {
    await api.post<TOffer>(`${ApiRoute.Favorite}/${id}/${status}`);
    dispatch(fetchFavorites());
  },
);
