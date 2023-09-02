import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

type TLoginFormState = {
  email: string | null;
  password: string | null;
}

const initialState: TLoginFormState = {
  email: null,
  password: null
};

const loginFormSlices = createSlice({
  name: NameSpace.LoginForm,
  initialState,
  reducers: {
    clearLoginForm(state) {
      state.email = null;
      state.password = null;
    }
  }
});

export default loginFormSlices.reducer;

export const { clearLoginForm } = loginFormSlices.actions;
