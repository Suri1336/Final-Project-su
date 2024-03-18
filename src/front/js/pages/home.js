import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center ">
       {/* jumbotron for home page start here */}
      <div className=" p-5  jumbotron gradient text-white rounded">
        <h1 className="Welcome pt-5"> Welcome To Color Me</h1>
        <button className="purple btn mt-3 mb-5 text-light">Start Here</button>
      </div>
      {/* cards for home page start here */}
      <div className="row mt-5 d-flex justify-content-evenly">
{/*Card 1 */}
        <Link to={"/login"}
        className="card pink p-5" style={{ width: "18rem" }} >
          <div className="card-body p-5">
            <h2 className="card-title text-light" >Choose A Design</h2>
          </div>
        </Link>
{/*Card 2 */}
        <Link to={"/canvas"}className="card orange p-5" style={{ width: "18rem" }} >
          <div className="card-body p-5">
            <h2 className="card-title text-light">Start Coloring</h2>
          </div>
        </Link>
{/*Card 3 */}
        <Link to={"/signup"}className="card yellow p-5" style={{ width: "18rem" }} >
          <div className="card-body p-5">
            <h2 className="card-title text-light">SignUp To Save And Share</h2>
          </div>
        </Link>
      
</div>
    </div>
  );
};
