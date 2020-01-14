import React, { useEffect } from "react";
import styled from "styled-components";

export default () => {
  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new window.kakao.maps.LatLng(
          37.54278046906682,
          126.84713323709738
        ), // 지도의 중심좌표
        level: 1 // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new window.kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new window.kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch("서울특별시 강서구 초록마을로 39", function(
      result,
      status
    ) {
      // 정상적으로 검색이 완료됐으면
      if (status === window.kakao.maps.services.Status.OK) {
        var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        console.log(coords);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new window.kakao.maps.Marker({
          map: map,
          position: coords
        });

        var content =
          '<div class="wrap" style="width: 300px;">' +
          '    <div class="info">' +
          '        <div class="title" style="background: #eee; padding: 10px"}>' +
          "            공터영어 화곡점" +
          "        </div>" +
          '        <div class="body">' +
          '            <div class="desc" style="padding : 10px">' +
          '                <div class="ellipsis">서울특별시 강서구 초록마을로 39 2층</div>' +
          "            </div>" +
          "        </div>" +
          "    </div>" +
          "</div>";

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new window.kakao.maps.InfoWindow({
          content
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, []);
  return (
    <Wrapper>
      <Title>강서구 초록마을로 39, 2층</Title>
      <Message>화곡초등학교에서 5분 거리!</Message>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
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
