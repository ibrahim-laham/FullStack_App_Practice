// server here
import Express from "express";
import cors from "cors";

import productsRouter from "./routes/products";
import usersRouter from "./routes/users";

const app = Express();

app.use(Express.json());

app.use(cors());

app.use("/products", productsRouter);
app.use("/users", usersRouter);

const port = 8000;

app.listen(port, () => {
  console.log(`the server is running at port ${port}`);
});
