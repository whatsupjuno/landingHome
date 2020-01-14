import React, { useState } from "react";
import styled from "styled-components";

import SwipeableViews from "react-swipeable-views";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

import CardImage1 from "../Images/Promotion1_rl.jpg";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "15px",
    backgroundColor: "gray"
  }
}));

export default () => {
  const [swipeIndex, setSwipeIndex] = useState(0);
  const classes = useStyles();

  const imageArray = [CardImage1, CardImage1, CardImage1, CardImage1];

  const hanldeSwipeIndex = swipeIndex => {
    setSwipeIndex(swipeIndex);
    console.log(swipeIndex);
  };

  return (
    <Wrapper>
      <Layout>
        <TextBoxBold>학부모 설명회</TextBoxBold>
        <TextBox>공터영어 화곡센터</TextBox>
        <SwipeableViews
          index={swipeIndex}
          onChangeIndex={hanldeSwipeIndex}
          enableMouseEvents
        >
          {imageArray.map(image => (
            <Box>
              <LocalImage src={image} />
            </Box>
          ))}
        </SwipeableViews>
        <LinearProgress
          className={classes.root}
          variant="determinate"
          color="primary"
          value={(swipeIndex + 1) * (100 / imageArray.length)}
        />
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
