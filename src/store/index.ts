import { configureStore } from '@reduxjs/toolkit';

import dialogSlice from './slices/dialogSlice';

export const store = configureStore({
    reducer: {
        dialog: dialogSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch