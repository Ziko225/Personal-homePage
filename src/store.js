import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './features/Header/ThemeToggleButton/themeSlice';

export const store = configureStore({
    reducer: {
        theme: themeSlice,
      },
})