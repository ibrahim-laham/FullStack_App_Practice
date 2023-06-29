import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: number;
  title: string;
  price: number;
};

type ProductsState = {
  products: Product[];
};

const productsState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: productsState,
  reducers: {
    getProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
