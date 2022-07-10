import React, { useState } from "react";
import "./App.css";
import Product from "./components/product";
import Form from "./components/Form";

const initialState = 1;
function App() {
  const [state, setState] = useState(true);

  return (
    <div>
      <Form/>
      {state && <Product />}
      <button onClick={() => setState((prev) => !prev)}>Toggle</button>
    </div>
  );
}

export default App;
