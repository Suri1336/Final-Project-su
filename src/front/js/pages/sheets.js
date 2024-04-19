import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/sheets.css";
import { Link } from "react-router-dom";
import KawaiiUrl from "../../img/kawaii1-img.jpeg"

export const Sheets = () => {
  const { store, actions } = useContext(Context);
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    async function getSheets() {
      let response = await fetch(process.env.BACKEND_URL + "/pages")
      let data = await response.json()
      setSheets(data)
    }
    getSheets()
  }, [])

  const handleFav = (pageLink) => {
    if (store.fav.includes(pageLink)) {
      actions.deleteFav(pageLink)
    }
    else { actions.addFav(pageLink) }
  }

  return (
    <div className="Sheets">
      <h1 className="row justify-content-center" style={{ textAlign: "center" }}>Choose A Canvas</h1>
      <div className="sheetCards row row-cols-4 row-cols-lg-5 g-2 g-lg-3 align-items-start">
        {sheets?.map((sheet, index) => (
          <div key={index} className="card cardSheets col">
            <img src={sheet.pageLink} className="card-img-top" height=" 200px" width="150px" alt="hi" />
            <div className="card-body">
              <Link to={"/canvas/" + sheet.id}>lets color</Link>
              <button onClick={() => {
                if (store.fav.includes(sheet.pageLink)) {
                  actions.deleteFav(sheet.pageLink); // Remove from favorites
                } else {
                  actions.addFav(sheet.pageLink); // Add to favorites
                }
              }}>
                {store.fav.includes(sheet.pageLink) ? "🤍" : "♡"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}