import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
// import useParams 
import "../../styles/home.css";

export const Canvas = () => {
  const {id} = useParams()
  const { store, actions } = useContext(Context);
  const [sheet, setSheet] = useState({})

  useEffect(() => {
    async function getSheet() {
      let response = await fetch(process.env.BACKEND_URL + "/sheets/" + id)
      let data = await response.json()
      // THIS DATA WILL BE YOUR INDIVIDUAL SHEET
    }
  }, [])

  return (
    <div>
        <div> {sheet.name} </div>
        <img src={sheet.pageLink} />
    </div>
  )}