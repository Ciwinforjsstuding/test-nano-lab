import { configureStore } from "@reduxjs/toolkit";

import dialogSlice from "./slices/dialogSlice";
import { saveToLocalStorage } from "./utils";

export const store = configureStore({
    reducer: {
        dialog: dialogSlice,
    },
});

store.subscribe(() => {
    saveToLocalStorage(store);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
