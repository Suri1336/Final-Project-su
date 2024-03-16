import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Sheets = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
        <div> this is the sheets page </div>
    </div>
  )}