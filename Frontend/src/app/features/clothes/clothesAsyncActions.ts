import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { setClothes } from "./clothesSlice";
import { ProductProps } from "./interfaces";

export const getAllClothes = () => {
  return async (dispatch: Dispatch) => {
    try {
      const petition = await axios.get(`http://localhost:4000/api/products`);
      const result: ProductProps[] = petition.data;

      return dispatch(setClothes(result));
    } catch (error: any) {
      console.error(error.message);
    }
  };
};
