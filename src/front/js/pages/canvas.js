import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import {ColoringPage1} from "../component/coloringPage1.js";

export const Canvas = () => {
  const { id } = useParams()
  const { store, actions } = useContext(Context);
  const [sheet, setSheet] = useState({})

  useEffect(() => {
    async function getSheet() {
      let response = await fetch(process.env.BACKEND_URL + "/pages/" + id)
      let data = await response.json()
      setSheet(data)
      page = data.pageLink.toDataURL()
    }
    getSheet()
  }, [])

  return (
    <div>
      <ColoringPage1 img={sheet.pageLink}/>
      <div> {sheet.name} </div>
    </div>
  )
}