// product controller here
import { Response, Request } from "express";

const productList = [
  { id: 1, title: "iphone x", price: 1000 },
  { id: 2, title: "iphone 9", price: 900 },
  { id: 3, title: "iphone 8", price: 800 },
];

export const getProducts = async (request: Request, response: Response) => {
  response.status(200).json(productList);
};
