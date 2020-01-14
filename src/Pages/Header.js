import React from "react";
import styled from "styled-components";

import Logo from "../Images/Logo.png";
import Blog from "../Images/Blog_Icon.png";
import Kakao from "../Images/Kakao_Icon.png";
import Tel from "../Images/Tel_Icon.png";

export default () => {
  return (
    <Wrapper>
      <LocalImage src={Logo} />
      <FloatBox>
        <a href="https://pf.kakao.com/_rrBhxb">
          <SmallLocalImage src={Kakao} />
        </a>
        <a href="https://blog.naver.com/gongteo181">
          <SmallLocalImage src={Blog} />
        </a>
        <a href="tel:010-5720-1507">
          <SmallLocalImage src={Tel} />
        </a>
      </FloatBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  position: sticky;
  top: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LocalImage = styled.img`
  margin-left: 40px;
  width: 100px;
  @media only screen and (max-width: 720px) {
    margin-left: 20px;
    width: 60px;
  }
`;

const SmallLocalImage = styled.img`
  margin-left: 20px;
  width: 50px;
  @media only screen and (max-width: 720px) {
    width: 30px;
  }
`;

const FloatBox = styled.div`
  margin-right: 40px;
  float: right;
  @media only screen and (max-width: 720px) {
    margin-right: 20px;
  }
`;
