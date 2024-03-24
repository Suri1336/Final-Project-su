import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

export const Canvas = () => {
  const {id} = useParams()
  const { store, actions } = useContext(Context);
  const [sheet, setSheet] = useState({})

  useEffect(() => {
    async function getSheet() {
      let response = await fetch(process.env.BACKEND_URL + "/sheets/" + id)
      let data = await response.json()
      setSheet(data)
      console.log(sheet)
    }
    getSheet()
  }, [])

  return (
    <div>
        <div> {sheet.name} </div>
        <img src={sheet.pageLink} />
    </div>
  )}