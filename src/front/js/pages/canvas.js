import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Canvas = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
        <div> this is the canvas page </div>
    </div>
  )}