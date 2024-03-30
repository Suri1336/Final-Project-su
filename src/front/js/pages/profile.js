import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const firstname = store.randomUser[0]?.name.first
  useEffect(() => {
    actions.fetchRandomUser()
  }, [])
  console.log(store.randomUser[0])
console.log(firstname)
  return (
    <div className="profileMain">
      <div className="container pt-5">
        <div className="row mt-5 align-item-center justify-content-between">

          <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="rounded-circle col-4 m-3 p-2" alt="pic" />
          
          <div className="profile col-6 m-5 p-3">what you have colord
          </div>
        </div>
        <div className="row mt-5 align-item-center justify-content-between">
          <div className="profile col-4 m-5 p-3">
            <div>Name:</div>
            <div>{store.randomUser[0]?.name.first}</div>
            <div>Date Of Birth</div>
            <div>Color streak</div></div>
          <div className="profile col-6 m-5 p-3">wish to do later</div>
        </div>
      </div>
    </div>
  )
}