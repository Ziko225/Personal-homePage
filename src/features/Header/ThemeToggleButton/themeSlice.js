import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: JSON.parse(localStorage.getItem("darkTheme") || false),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = !state.value;
      localStorage.setItem("darkTheme", state.value);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.value

export default themeSlice.reducer;