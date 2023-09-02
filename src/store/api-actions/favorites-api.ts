import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { TOffer } from '../../types/offer-type.ts';
import { ApiRoute, FavoriteStatus } from '../../const.ts';


export const fetchFavoritesOffers = createAsyncThunk<TOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchFavoritesOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TOffer[]>(ApiRoute.Favorite);

    return data;
  },
);

export const addFavorite = createAsyncThunk<TOffer, { id: TOffer['id'] }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/addFavoritesOffers',
  async ({ id }, { extra: api }) => {
    const { data } = await api.post<TOffer>(`${ApiRoute.Favorite}/${id}/${FavoriteStatus.Add}`);

    return data;
  }
);

export const deleteFavorite = createAsyncThunk<TOffer, { id: TOffer['id'] }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/deleteFavoritesOffers',
  async ({ id }, { extra: api }) => {
    const { data } = await api.post<TOffer>(`${ApiRoute.Favorite}/${id}/${FavoriteStatus.Delete}`);

    return data;
  }
);
