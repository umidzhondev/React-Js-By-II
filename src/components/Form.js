import React, { useRef } from "react";
import { useState } from "react";
import { useForm } from "../customHooks/useForm";

const initialState = {
  ism: "",
  parol: "",
};
const Form = () => {
  const [value, handleChange] = useForm(initialState);

  const inputRef = useRef(() => console.log("Hello World"));

  const SubmitHandler = (e) => {
    e.preventDefault();
    inputRef.current();
    // if(!value.parol){
    //   console.log(inputRef.current.focus());
    // }else{
    //   console.log(value);
    // }
  };

  return (
    <form onSubmit={SubmitHandler}>
      <input
        // ref={inputRef}
        type="text"
        onChange={handleChange}
        placeholder="ism"
        value={value.ism}
        name="ism"
      />
      <input
        // ref={inputRef}
        type="password"
        placeholder="password"
        value={value.parol}
        name="parol"
        onChange={handleChange}
      />
      <button>Yuborish</button>
    </form>
  );
};

export default Form;
