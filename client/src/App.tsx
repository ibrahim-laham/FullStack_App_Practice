import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "./redux/thunk/products";
import { RootState, AppDispatch } from "./redux/store";
import Form from "./components/Form/Form";

function App() {
  const appDisptach = useDispatch<AppDispatch>();
  useEffect(() => {
    appDisptach(getProducts());
  }, [appDisptach]);

  const productList = useSelector(
    (state: RootState) => state.products.products
  );

  return (
    <div className="App">
      <h1>Connect to Front-end</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>{product.title} </li>
        ))}
      </ul>
      <Form/>
    </div>
  );
}

export default App;
