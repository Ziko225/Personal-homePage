import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './common/ThemeButton/themeSlice';

export const store = configureStore({
    reducer: {
        theme: themeSlice,
      },
})