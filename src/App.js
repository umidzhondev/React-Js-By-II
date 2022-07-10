import React,{useState} from "react";
import "./App.css";
import Product from "./components/product";

const initialState = 1;
function App() {
  const [show,setShow] = useState(false);

  return (
    <div>
      {show && <Product/>}
      <button onClick={()=>setShow(prev=>!prev)}>Toggle</button>
    </div>
  );
}

export default App;
