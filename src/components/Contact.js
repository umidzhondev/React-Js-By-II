import React,{useEffect} from "react";
import { useForm } from "../customHooks/useForm";

const initialState = {
  firstName: "",
  email: "",
  text: "",
};

const Contact = () => {
  const [value, changeHandler] = useForm(initialState);

  useEffect(()=>{
    console.log("DudMount");
    return()=>{
        console.log("WillunMount");
    }
  },[])

  useEffect(()=>{
    console.log('render');
  },[value.firstName])

  useEffect(()=>{
    console.log('email render');
  },[value.email])


  return (
    <form>
      <h1>Contact</h1>
      <input
        type="text"
        name="firstName"
        value={value.firstName}
        onChange={changeHandler}
      />
      <input
        type="email"
        name="email"
        value={value.email}
        onChange={changeHandler}
      />
      <textarea name="text" value={value.text} onChange={changeHandler}></textarea>
    </form>
  );
};

export default Contact;
