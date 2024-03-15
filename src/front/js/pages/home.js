import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container- text-center ">
       {/* jumbotron for home page start here */}
      <div class=" p-5  jumbotron gradient text-white rounded">
        <h1 className="Welcome pt-5"> Welcome To Color Me</h1>
        <button className="purple btn mt-3 mb-5 text-light">Start Here</button>
      </div>
      {/* cards for home page start here */}
      <div className="row mt-5 d-flex justify-content-evenly">
        <div class="card pink p-5" style={{ width: "18rem" }} >
          <div class="card-body p-5">
            <h2 class="card-title text-light" >123</h2>
          </div>
        </div>
        <div class="card orange p-5" style={{ width: "18rem" }} >
          <div class="card-body p-5">
            <h2 class="card-title text-light">123</h2>
          </div>
        </div>
        <div class="card yellow p-5" style={{ width: "18rem" }} >
          <div class="card-body p-5">
            <h2 class="card-title text-light">123</h2>
          </div>
        </div>
      </div>

    </div>
  );
};
