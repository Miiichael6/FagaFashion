import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CategoriesProps } from "./interfaces";

interface initialStateClothes {
  filters: CategoriesProps[];
}

const initialState: initialStateClothes = {
  filters: [],
};

export const categoriesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    setCategories: (state, { payload }: PayloadAction<CategoriesProps[]>) => {
      state.filters = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
