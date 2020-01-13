import React from "react";
import styled from "styled-components";

import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

import Location from "../Images/Location.png";

export default () => {
  // const clientId = "ryvpb5rc98";
  // const navermaps = window.naver.maps;

  // console.log(navermaps);

  return (
    <Wrapper>
      <Title>마곡엠밸리 12단지 상가</Title>
      <Message>마곡역 7번 출구에서 5분!</Message>
      <LocalImage src={Location} />
      {/* <RenderAfterNavermapsLoaded clientId={clientId}>
        <NaverMap
          mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
          style={{
            width: "100%",
            height: "900px"
          }}
          defaultCenter={{ lat: 37.55865, lng: 126.82305 }}
          defaultZoom={13}
        >
          <Marker
            position={new navermaps.LatLng({ lat: 37.55865, lng: 126.82305 })}
            animation={navermaps.Animation.BOUNCE}
            onClick={() => {
              alert("여기는 공터영어 화곡지점 입니다.");
            }}
          />
        </NaverMap>
      </RenderAfterNavermapsLoaded> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 30px;

  @media only screen and (max-width: 720px) {
    font-size: 22px;
  }
`;

const Message = styled.p`
  font-size: 20px;
  color: #4b4b4b;
  padding: 0px;
  margin-bottom: 50px;
  @media only screen and (max-width: 720px) {
    font-size: 18px;
  }
`;

const LocalImage = styled.img`
  width: 100%;
  height: auto;
`;
