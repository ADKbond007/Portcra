import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./scss/app.scss";
import Details from "./components/Details";
import ContactDetails from "./components/ContactDetails";
import { AgeCalc, WorkexCalc } from "./utils/UtilFunctions";
import NavbarComponent from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Reachout from "./components/Reachout";
import GotoTop from "./components/GotoTop";
const LetsKeep = React.lazy(() => import("./components/LetsKeep"));
export const GlobalContext = createContext();
function App() {
  const [topBtn, setTopBtn] = useState("none");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setTopBtn("block");
      } else {
        setTopBtn("none");
      }
    });
  });
  const [info, setInfo] = useState({
    "Current Address":
      "904 Maruti Housing colony, Saraswati Vihar, Swami Vivekanand block, Sector-28, Gurugram-122002, Haryana",
    "Permanent Address":
      "Flat no.203, Deva Apartment, Sheikhpura, Bailey Road, Patna-800014, Bihar",
    DOB: "14th July 1998",
    Age: AgeCalc(),
    Experience: WorkexCalc() + " years ",
    Gender: "Male (He/Him)",
  });
  return (
    <GlobalContext.Provider value={{ info: [info, setInfo] }}>
      <div className="App">
        <NavbarComponent />
        <Details />
        <Aboutme />
        <Skills />
        <ContactDetails />
        {/* <Reachout /> */}
        <LetsKeep />
        <GotoTop topBtn={topBtn} />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
