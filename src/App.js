import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";

const initialState = 1;
function App() {
  const [state, setState] = useState(initialState);
  return (
    <div>
      <Form/>
      {/* <h1>Hello {state}</h1>
      <button onClick={()=>setState((prevState)=> prevState+1)}>Change Name</button> */}
    </div>
  );
}

export default App;
