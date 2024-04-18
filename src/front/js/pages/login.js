import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";

{/*authentication for login starts here */ }
export const Login = () => {
  const { store, actions } = useContext(Context);
  const [UserName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    actions.login(UserName, password)
  };
  if (store.token && store.token !== "" && store.token !== undefined) {
    navigate("/profile")
  }
  {/*rendering/html for login starts here */ }
  return (
    <div className="text-white login">
      <div className="text-white rounded">
        {/* form starts here do css in login */}
        <form className="Application" method="POST">
          <h1 className="loginhead">Login </h1>
          <div className="inputContainer">
              <input type="text" name="Username" placeholder="Username" className="input" onChange={e => setUserName(e.target.value)} value={UserName} />
           
            <label className="label">Username </label>
          </div>
          <div className="inputContainer">
            <input type="text" name="Password" placeholder="Password" className="input" onChange={e => setPassword(e.target.value)} value={password} />
            <label className="label">Password</label>
          </div>
          <div className="Parentbtn">
            <input type="submit" name="submit" value="login" className="btnlogin btn bg-white text-dark" onClick={handleLogin} />
            <Link className="btn" to={"/forgotpassword"}>Forgot Password</Link>
          </div>

        </form>

      </div>
    </div>
  )
}