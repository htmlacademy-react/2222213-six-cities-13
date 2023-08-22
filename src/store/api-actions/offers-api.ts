import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { State, AppDispatch } from '../../types/state';
import { TOffer } from '../../types/offer-type';
import { ApiRoute } from '../../const';
import { getNearOffers, getOffer, getOffers } from '../action';


export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const {data} = await api.get<TOffer[]>(ApiRoute.Offers);
    dispatch(getOffers(data));
  },
);

export const fetchOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffer',
  async (id, { dispatch, extra: api }) => {
    const { data: offer } = await api.get<TOffer>(`${ApiRoute.Offers}/${id}`);
    dispatch(getOffer(offer));
  }
);

export const fetchNearOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffer',
  async (id, { dispatch, extra: api }) => {
    const { data: offer } = await api.get<TOffer[]>(`${ApiRoute.Offers}/${id}/nearby`);
    dispatch(getNearOffers(offer));
  }
);
