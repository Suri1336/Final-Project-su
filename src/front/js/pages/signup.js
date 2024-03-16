import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup= () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-white signup">
        <div   className="text-white rounded">
          {/* form starts here do css in signup */}
        <h1 > Welcome To Color Me</h1>
        <button className="btn  text-light">Sign Up</button>
      </div>
        <div> this is the signup page </div>
    </div>
  )}