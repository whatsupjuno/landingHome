import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

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

const Box = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

function App() {
  return (
    <div>
      <Header />
      <Box>
        <ReactPlayer
          width="100%"
          height="auto"
          url="https://idoeduvideo.s3.ap-northeast-2.amazonaws.com/movie.mp4"
          playing
          controls
          muted
          style={{ marginBottom: "10px", marginTop: "90px" }}
        />
      </Box>
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
