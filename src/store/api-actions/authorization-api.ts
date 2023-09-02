import { AppDispatch, State } from '../../types/state.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthData, TUser } from '../../types/review-type.ts';
import { ApiRoute, AppRoute } from '../../const.ts';
import { fetchFavoritesOffers } from './favorites-api.ts';
import { dropToken, saveToken } from '../../components/services/token.ts';
import { fetchOffers } from './offers-api.ts';
import { clearLoginForm } from '../slices/login-form-slices.ts';
import { redirectToRoute } from '../action.ts';

export const checkAuthAction = createAsyncThunk<TUser, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TUser>(ApiRoute.Login);
    dispatch(fetchFavoritesOffers());

    return data;
  }
);

export const loginAction = createAsyncThunk<TUser, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<TUser>(ApiRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(clearLoginForm());
    dispatch(redirectToRoute(AppRoute.Main));

    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dispatch(fetchOffers());
    dropToken();
  },
);
