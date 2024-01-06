import "./App.css";
import "../src/Style/fontawesome-free-6.4.2-web/css/all.css";
import Login from "../src/Components/Ḷogin";
import CompanyLogin from "./Components/CompanyLogin";
import SignUp from "./Components/SignUp";
import CompanyHome from "./Components/CompanyHome";
import CompanySignup from "./Components/CompanySignup";
import UserHome from "./Components/UserHome";
import "../src/Style/fontawesome-free-6.4.2-web/css/all.css";
import { useState } from "react";
import Whoisloged from "./Components/Whoisloged";
import Loader from "./Components/Loader";
import CompanyFromsearch from "./Components/CompanyFromSearch";
function App() {
  const userID = localStorage.getItem("user_id");
  const defaultScreen = userID ? "Homepage" : "Login";
  const cid = localStorage.getItem("c_id");
  const who = localStorage.getItem("whologed");
  const compnayscreen = cid ? "CompanyHomepage" : "CompanyLogin";
  let isdefault = "";
  if (who == "company") {
    isdefault = compnayscreen;
  } else if (who == "user") {
    isdefault = defaultScreen;
  }
  const [screen, setScreen] = useState(isdefault);
  // const [isset , setIsSet] = useState("");
  const renderScreen = () => {
    switch (screen) {
      case "who":
        return <Whoisloged setScreen={setScreen} screen={screen} />;
      // break;
      case "CompanyLogin":
        return <CompanyLogin setScreen={setScreen} screen={screen} />;
      // break;
      case "userLogin":
        return <Login setScreen={setScreen} screen={screen} />;
      // break;
      case "SignUp":
        return <SignUp setScreen={setScreen} screen={screen} />;
      // break;
      case "CompanySignup":
        return <CompanySignup setScreen={setScreen} screen={screen} />;
      // break;
      case "Homepage":
        return <UserHome setScreen={setScreen} />;
      // break;
      case "CompanyHomepage":
        return <CompanyHome setScreen={setScreen} />;
      // break;
      case "loader":
        return <Loader setScreen={setScreen} />;
      // break;
      case "searchedcompany":
        return <CompanyFromsearch setScreen={setScreen} />;
      // break;
      default:
        return <Whoisloged setScreen={setScreen} screen={screen} />;
    }
  };

  return <>{
    renderScreen()

  }</>;
}

export default App;
