// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import "../../styles/sheets.css";
// import { Link } from "react-router-dom";


// export const Sheets = () => {
//   const { store, actions } = useContext(Context);
//   return (
//     <div className="Sheets">
// <div className="card cardSheets" style={{ width: "18rem" }}>
//   <img src={KawaiiUrl} className="card-img-top" alt="hi"/>
//   <div className="card-body">
//     <p className="card-text">text</p>
//   </div>
// </div>
//     </div>
//   )}

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/sheets.css";
import { Link } from "react-router-dom";
import KawaiiUrl from "../../img/kawaii1-img.jpeg"

export const Sheets = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="Sheets row align-items-start">
      <div className="card cardSheets col">
        <img src={KawaiiUrl} className="card-img-top" alt="hi" />
        <div className="card-body">
          <p className="card-text">text</p>
        </div>
      </div>
      <div className="card cardSheets col">
        <img src={KawaiiUrl} className="card-img-top" alt="hi" />
        <div className="card-body">
          <p className="card-text">text</p>
        </div>
      </div>
    </div>
  )
}