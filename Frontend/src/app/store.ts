import { configureStore } from "@reduxjs/toolkit";
import clothesSlice from "./features/clothes/clothesSlice";
import categoriesSlice from './features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    products: clothesSlice,
    categories: categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
