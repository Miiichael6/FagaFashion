import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { setCategories } from "./categoriesSlice";
import { CategoriesProps } from "./interfaces";

export const getClothesCategories = () => {
  return async (dispatch: Dispatch) => {
    try {
      const petition = await axios.get(`http://localhost:4000/api/categories`);

      const data: CategoriesProps[] = await petition.data;

      return dispatch(setCategories(data));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
