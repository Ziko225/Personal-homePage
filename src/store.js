import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './features/Header/ThemeButton/themeSlice';

export const store = configureStore({
    reducer: {
        theme: themeSlice,
      },
})