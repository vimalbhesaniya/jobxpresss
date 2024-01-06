import React from "react";
import Admin from "./Components/Admin";
import  Adminlogin from "./Components/Adminlogin";
import ReactDOM from "react-dom/client";
import { BrowserRouter , Routes , Route, redirect } from "react-router-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
  const isloged = sessionStorage.getItem("admin");
  if (isloged) {
    redirect("admin");
  }
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Componentgit={App} /> 
      <Route path="/admin" Component={Admin} /> 
      <Route path="/login" Component={Adminlogin} /> 
    </Routes>
  </BrowserRouter>
);
