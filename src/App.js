import "./App.css";
import React from "react";
import { MyNavbar } from "./components/Navbar";
import { Firstrow } from "./components/FirstRow";
import { Columns } from "./components/Columns";
import MapContainer from "./components/MapContainer";
import {Cards} from "./components/Cards";
import {Contacts} from "./components/Contacts";
import {Footer} from "./components/Footer";

export default function App() {
  return (
    <>
      <MyNavbar />
      <Firstrow />
      <div className="community-simulator"></div>
      <MapContainer />
      <Columns />
      <Cards />
      <Contacts />
      <Footer />
    </>
  );
}
