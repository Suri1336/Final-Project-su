import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Success = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div> this is the YAY! page </div>
    </div>
  )
}