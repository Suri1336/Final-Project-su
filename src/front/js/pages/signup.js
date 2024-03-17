import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-white signup">
      <div className="text-white rounded">
        {/* form starts here do css in signup */}
        <form className="Application" method="POST">
          <div className="inputContainer">
            <input type="text" name="Username" placeholder="Username" className="input" />
            <label className="label">Username</label>
          </div>
          <div className="inputContainer">
            <input type="text" name="Password" placeholder="Password" className="input" />
            <label className="label">Password</label>
          </div>
          <input type="submit" name="submit" value="login" className="button btn-light text-dark"/>
          
          
        </form>

      </div>
    </div>
  )
}