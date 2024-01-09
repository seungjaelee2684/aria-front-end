import React from 'react'
import styled from 'styled-components';
import '../../style/Banner.css';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';
import BannerBackground from '../../assets/images/rapla2.png';
import Banner1 from '../../assets/images/mainimage2.jpg';
import Banner2 from '../../assets/images/rapla2.png';
import { textInformation } from '../../languages/BannerTrans';

interface BannerProps {
  page: number;
}

const Banner : React.FC<BannerProps> = ({ page }) => {

    const language = localStorage.getItem("language");

    const textChange = () => {
      switch (language) {
        case "english" :
          return textInformation[page]?.englishtitle;
        case "chinese" :
          return textInformation[page]?.chinesetitle;
        case "japanese" :
          return textInformation[page]?.japanesetitle;
        case "korean" :
          return textInformation[page]?.title;
        default :
          return textInformation[page]?.englishtitle;
      };
    };

  return (
    <BannerLayoutContainer>
      <TitleContainer>
        <BannerBackgroundImg src={textInformation[page]?.image} alt=''/>
        <TextWrapper>
            <TextBox className='TextBox'>
              {textChange()}
            </TextBox>
            <AnimationBar className='AnimationBar'/>
          </TextWrapper>
      </TitleContainer>
    </BannerLayoutContainer>
  )
};

const BannerLayoutContainer = styled.div`
  width: 100%;
  padding: 80px 0px 0px 0px;

  @media screen and (max-width: 500px) {
    padding: 50px 0px 0px 0px;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e9e9e9;
  user-select: none;
  position: relative;
  margin: 0px auto;

  @media screen and (max-width: 836px) {
    height: 200px;
  }

  @media screen and (max-width: 500px) {
    width: 96%;
    height: 150px;
    border-radius: 10px;
  }
`;

const BannerBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 10%;
  position: absolute;
  top: 0;
  left: 0;
`;

const TextWrapper = styled.div`
  width: 1320px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const TextBox = styled.div`
  color: #FCFCFC;
  font-family: "Pretendard";
  font-size: 46px;
  font-weight: 700;
  line-height: 150%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }
`;

const AnimationBar = styled.div`
  width: 80px;
  height: 3px;
  background-color: #FCFCFC;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0;

  @media screen and (max-width: 500px) {
    width: 60px;
    height: 2px;
  }
`;

export default Banner;