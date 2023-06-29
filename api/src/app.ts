// server here
import Express from "express";
import cors from "cors";

import productsRouter from "./routes/products"

const app = Express();

app.use(Express.json());

app.use(cors());

app.use("/products", productsRouter)

const port = 8000;

app.listen(port, ()=>{
  console.log(`the server is running at port ${port}`)
})