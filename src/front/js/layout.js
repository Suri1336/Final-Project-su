import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Link } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { ForgotPassword } from "./pages/forgotPassword";
import { UpdatePassword } from "./pages/updatePassword";
import { Signup } from "./pages/signup";
import { Profile } from "./pages/profile";
import { Sheets } from "./pages/sheets";
import { Canvas } from "./pages/canvas";
import { Success } from "./pages/success";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>

                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<ForgotPassword />} path="/forgotpassword" />
                        <Route element={<UpdatePassword />} path="/updatePassword?token=:token" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Sheets />} path="/sheets" />
                        <Route element={<Canvas />} path="/canvas/:id" />
                        <Route element={<Success />} path="/success" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
