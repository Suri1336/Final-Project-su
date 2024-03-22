
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/sheets.css";
import { Link } from "react-router-dom";
import KawaiiUrl from "../../img/kawaii1-img.jpeg"

export const Sheets = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="Sheets">
      <h1 className="row justify-content-center" style={{ textAlign: "center" }}>Choose A Canvas</h1>
      <div className="sheetCards row row-cols-4 row-cols-lg-5 g-2 g-lg-3 align-items-start">
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
        {/*line 2 */}
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
        {/*line 2 */}
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
        </div>
        <div className="card cardSheets col">
          <img src={KawaiiUrl} className="card-img-top" alt="hi" />
          <div className="card-body">
            <p className="card-text">text</p>
          </div>
        </div>
      </div>
    </div>
  )
}