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

  return (
    <div className="Sheets">
      <h1 className="row justify-content-center" style={{ textAlign: "center" }}>Choose A Canvas</h1>
      <div className="sheetCards row row-cols-4 row-cols-lg-5 g-2 g-lg-3 align-items-start">
        {sheets?.map((sheet, index) => (
          <div key={index} className="card cardSheets col">
            <img src={sheet.pageLink} className="card-img-top" height=" 200px" width="150px"alt="hi" />
            <div className="card-body">
              <Link to={"/canvas/" + sheet.id}>lets color</Link>
            </div>
          </div>
        ))}



        {/* <div className="card cardSheets col">
          <img src={KawaiiUrl} className="card-img-top" alt="hi" />
          <div className="card-body">
            <p className="card-text">text</p>
            <Link to={"./canvas"}>lets color</Link>
          </div>
        </div> */}
        {/*  <div className="card cardSheets col">
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
        <div className="card cardSheets col">
          <img src={KawaiiUrl} className="card-img-top" alt="hi" />
          <div className="card-body">
            <p className="card-text">text</p>
          </div>
        </div> */}
        {/*line 2 */}
        {/* <div className="card cardSheets col">
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
        <div className="card cardSheets col">
          <img src={KawaiiUrl} className="card-img-top" alt="hi" />
          <div className="card-body">
            <p className="card-text">text</p>
          </div>
        </div> */}
        {/*line 2 */}
        {/* <div className="card cardSheets col">
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
        <div className="card cardSheets col">
          <img src={KawaiiUrl} className="card-img-top" alt="hi" />
          <div className="card-body">
            <p className="card-text">text</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}