import React, { useState } from "react";
import styled from "styled-components";

import CardImage1 from "../Images/Promotion1_rl.jpg";

export default () => {
  return (
    <Wrapper>
      <Layout>
        <TextBoxBold>학부모 설명회</TextBoxBold>
        <TextBox>공터영어 화곡센터</TextBox>
        <Box>
          <LocalImage src={CardImage1} />
        </Box>
        <LineBox>
          <GreenBox />
          <GrayBox />
        </LineBox>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Layout = styled.div`
  width: 700px;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Box = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const LocalImage = styled.img`
  width: 100%;
`;

const LineBox = styled.div`
  display: flex;
  width: 100%;
  height: 5px;
  margin: 20px 0;
`;
const GreenBox = styled.div`
  width: 30%;
  height: 100%;
  background: #5eb310;
`;
const GrayBox = styled.div`
  width: 70%;
  height: 100%;
  background: #ededed;
`;

const TextBox = styled.span`
  color: #2a2a2a;
  font-size: 20px;
  padding-right: 10px;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const TextBoxBold = styled(TextBox)`
  font-weight: bold;
  font-size: 30px;
`;

const TextBoxGreen = styled.p`
  color: #5eb411;
  font-weight: bold;
`;

const Button = styled.button`
  border: none;
  width: 15px;
  height: 15px;
`;

const RightButton = styled(Button)`
  background-color: blue;
  right: 50px;
`;

const LeftButton = styled(Button)`
  background-color: red;
  left: 50px;
`;
