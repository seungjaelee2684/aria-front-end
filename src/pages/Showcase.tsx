import React from 'react'
import styled from 'styled-components';
import Banner from '../assets/images/mainimage.jpg';
import { translate } from '../store/Translation';
import { useRecoilValue } from 'recoil';

const Showcase = () => {

  const language = useRecoilValue(translate);

  const titleText = () => {
    switch (language) {
      case "english" :
        return "SHOWCASE";
      case "japanese" :
        return "名誉の殿堂";
      default :
        return "명예의 전당";
    }
  };

  return (
    <LayoutContainer>
      <BannerContainer>
        <BannerImageContainer src={Banner}>
          {titleText()}
        </BannerImageContainer>
      </BannerContainer>
      <LayoutWrapper>
        Showcase
      </LayoutWrapper>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 230px;
  background-color: #FCFCFC;
  margin: 80px 0px 0px 0px;
  user-select: none;
`;

const BannerImageContainer = styled.div<{ src : string }>`
  width: 100%;
  height: 230px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center 5%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FCFCFC;
  font-family: "Pretendard";
  font-size: 36px;
  font-weight: 700;
  line-height: 150%;
`;

const LayoutWrapper = styled.div`
  width: 1320px;
  margin: 0px auto;
`;

export default Showcase;