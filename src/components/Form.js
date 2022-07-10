import React from "react";
import { useState } from "react";
import { useForm } from "../customHooks/useForm";

const initialState = {
  ism: "",
  parol: "",
};
export const Form = () => {
  const [value, handleChange] = useForm(initialState);

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(value);
  };

  
  return (
    <form onSubmit={SubmitHandler}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="ism"
        value={value.ism}
        name="ism"
      />
      <input
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
