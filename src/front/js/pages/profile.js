import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { Link } from "react-router-dom";
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
          <div className="profile col-6 m-4 p-3">What you have colored
          </div>
        </div>
        <div className="row mt-5 align-item-center justify-content-between">
          <div className="profile col-4 m-4 p-3">
            <div>Name:</div>
            <div>{store.randomUser[0]?.name.first}</div>
            <div>Date Of Birth</div>
            <div>02/12</div>
            <div>Color streak</div>
            <div>5 days</div>
            </div>
          <div className="profile col-6 m-4 p-3">Wish to do later
            <div>
            {store.fav?.map((x,index)=>(
						<li key={index} onClick={()=>{actions.deleteFav(x)}}><a className="dropdown-item" href="#">{x}</a>x</li>
            ))}
              
            </div>
            </div>
          <Link to="/sheets" className="purple btn text-light profilebtn">Lets Color</Link>
        </div>
      </div>
    </div>
  )
}