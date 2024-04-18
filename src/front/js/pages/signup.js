import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";


export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [UserName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [DateOfBirth, setDateOfBirth] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  function submitRequest() {
    actions.SignUp(email, UserName, DateOfBirth, password)
    actions = navigate("/login")
  }

  return (
    <div className="text-white signup">
      <div className="text-white rounded">
        {/* form starts here do css in signup */}
        <form className="Application pb-5">
          <h1 className="signuphead">Sign Up </h1>
          <div className="inputContainer">
            <input type="text" name="Username" placeholder="Username" className="input" onChange={(e) => setUserName(e.target.value)} value={UserName} />
            <label className="label">Username</label>
          </div>
          <div className="inputContainer">
            <input type="email" name="Email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="label">Email</label>
          </div>
          <div className="inputContainer">
            <input type="text" name="Date Of Birth" placeholder="Date Of Birth" className="input" value={DateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            <label className="label">Date Of Birth</label>
          </div>
          <div className="inputContainer">
            <input type="password" name="Password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label className="label">Password</label>
          </div>
          <div className="Parentbtn">
            <input name="submit" value="SignUp" className="btnsignup btn bg-white text-dark" onClick={submitRequest} />
          </div>

        </form>

      </div>
    </div>

  )
}