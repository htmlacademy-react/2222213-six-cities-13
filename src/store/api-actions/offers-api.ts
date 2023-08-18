import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { State, AppDispatch } from '../../types/state';
import { TOffer } from '../../types/offer-type';
import { ApiRoute } from '../../const';
import { getOffers } from '../action';


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

