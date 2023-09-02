import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City, NameSpace } from '../../const';

type TCurrentCityState = {
  currentCity: City;
}

const initialState: TCurrentCityState = {
  currentCity: City.Paris
};

const currentCitySlices = createSlice({
  name: NameSpace.CurrentCity,
  initialState,
  reducers: {
    setCurrentCity(state, action: PayloadAction<City>) {
      state.currentCity = action.payload;
    }
  }
});

export default currentCitySlices.reducer;

export const { setCurrentCity } = currentCitySlices.actions;
