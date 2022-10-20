import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value
    },
  },
})

export const { toggleDarkMode } = themeSlice.actions;

export default themeSlice.reducer;