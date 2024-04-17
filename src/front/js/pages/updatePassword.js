import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useSearchParams } from "react-router-dom";

{/*authentication for login starts here */ }
export const UpdatePassword = () => {
    const { store, actions } = useContext(Context);
    const [password, setPassword] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    let token = searchParams.get("token")
    const handleUpdatePassword = (e) => {
        e.preventDefault();
        actions.updatePassword(token, password)
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
                    <h1 className="loginhead">Update Password </h1>
                    <div className="inputContainer">
                        <input type="text" name="Password" placeholder="Password" className="input" onChange={e => setPassword(e.target.value)} value={password} />
                        <label className="label">Password</label>
                    </div>
                    <div className="Parentbtn">
                        <input type="submit" name="submit" value="login" className="btnlogin btn bg-white text-dark" onClick={() => handleUpdatePassword(e)} />
                        Update Password
                    </div>

                </form>

            </div>
        </div>
    )
}