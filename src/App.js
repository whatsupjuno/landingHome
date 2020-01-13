import React from "react";

import "./App.css";

import Header from "./Pages/Header";
import BrandImage from "./Pages/BrandImage";
import SubImage from "./Pages/SubImage";
import Introduction from "./Pages/Introduction";
import Introduction2 from "./Pages/Introduction2";
import CardImages from "./Pages/CardImages";
import PrePhoto from "./Pages/PrePhoto";
import Photos from "./Pages/Photos";
import Details from "./Pages/Details";
import Promotions from "./Pages/Promotions";
import LinkToOut from "./Pages/LinkToOut";
import Contact from "./Pages/Contact";
import Information from "./Pages/Information";
import Location from "./Pages/Location";

function App() {
  return (
    <div>
      <Header />
      <BrandImage />
      <SubImage />
      <Introduction />
      <Introduction2 />
      <CardImages />
      <PrePhoto />
      <Photos />
      <Details />
      <Promotions />
      {/* <LinkToOut /> */}
      <br />
      <Contact />
      <br />
      {/* <Information /> */}
      <br />
      <Location />
    </div>
  );
}

export default App;
