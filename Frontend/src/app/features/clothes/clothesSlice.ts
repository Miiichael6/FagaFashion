import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "./interfaces";

interface initialStateClothes {
  clothes: ProductProps[];
  mixto: ProductProps[];
  men: ProductProps[];
  women: ProductProps[];
  filterClothes: ProductProps[];
}

const initialState: initialStateClothes = {
  clothes: [],
  mixto: [],
  men: [],
  women: [],
  filterClothes: [],
};

export const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    setClothes: (state, { payload }: PayloadAction<ProductProps[]>) => {
      state.clothes = payload;
      state.men = payload.filter((clothe) => clothe.gender === "varon");
      state.women = payload.filter((clothe) => clothe.gender === "mujer");
      state.mixto = payload.filter((clothe) => clothe.gender === "mixto");
    },

    setFilterMenClothes: (
      state,
      { payload }: PayloadAction<ProductProps[]>
    ) => {},

    setFilterWomenClothes: (
      state,
      { payload }: PayloadAction<ProductProps[]>
    ) => {},
  },
});

// Action creators are generated for each case reducer function
export const { setClothes, setFilterWomenClothes, setFilterMenClothes } =
  clothesSlice.actions;

export default clothesSlice.reducer;
