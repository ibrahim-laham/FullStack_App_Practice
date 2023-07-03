import axios from "axios";

import { productsActions } from "../slices/products";
import { AppDispatch } from "../store";

export function getProducts() {
  const url = "http://localhost:8000/products";
  return (dispatch: AppDispatch) => {
    axios
      .get(url)
      .then((data) => dispatch(productsActions.getProducts(data.data)))
      .catch((error) => console.log(error));
  };
}
