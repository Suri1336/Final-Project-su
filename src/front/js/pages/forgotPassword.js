import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";

{/*authentication for login starts here */ }
export const ForgotPassword = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("")
  const navigate = useNavigate();
  const handleForgotPassword = (e) => {
    e.preventDefault();
    actions.ForgotPassword(email)
    navigate("/")
  };
  if (store.token && store.token !== "" && store.token !== undefined) {
    navigate("/")
  }
  {/*rendering/html for login starts here */ }
  return (
    <div className="text-white login">
      <div className="text-white rounded">
        {/* form starts here do css in login */}
        <form className="Application" method="POST">
          <h1 className="loginhead"> Forgot Password </h1>
          <div className="inputContainer">
            <input type="text" name="email" placeholder="email" className="input" onChange={e => setEmail(e.target.value)} value={email} />

            <label className="label"> Email </label>
          </div>
          <div className="Parentbtn">
            <input type="submit" name="submit" value="Forgot Password" className="btnlogin btn bg-white text-dark" onClick={(e) => handleForgotPassword(e)} />
          </div>

        </form>

      </div>
    </div>
  )
}