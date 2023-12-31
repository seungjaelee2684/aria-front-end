import React, { useState } from 'react'
import './MainImage/MainImage.css';
import styled, { keyframes } from 'styled-components';
import FirstBG from '../../assets/images/mainpage/1.webp';
import Logo from '../../assets/images/mainpage/Asset 95.webp';
import { useRecoilValue } from 'recoil';
import { MainPageNumber } from '../../store/MainPageNumber';
import Logo_A from '../../assets/images/mainpage/Asset-95_01.webp';
import Logo_R from '../../assets/images/mainpage/Asset-95_02.webp';
import Logo_I from '../../assets/images/mainpage/Asset-95_03.webp';
import Logo_A2 from '../../assets/images/mainpage/Asset-95_04.webp';

interface FirstPageImageProps {
  mainPageTextChange: Function;
};

const FirstPageImage : React.FC<FirstPageImageProps> = ({ mainPageTextChange }) => {
    
  const scrollIndex = useRecoilValue(MainPageNumber);
  const [imageLoad, setImageLoad] = useState<boolean>(false);

  return (
    <ImageBoxWrapper>
      <BackgroundContainer
        className={
          (imageLoad)
            ? "background-close"
            // ? (scrollIndex === 1)
            //   ? "background-close"
            //   : ""
            : ""}
        />
      <BackgroundImage src={FirstBG} alt='' onLoad={() => setImageLoad(true)}/>
      <MainImage>
        <LogoImageContainer>
          <LogoImage
            src={Logo_A}
            alt=''
            className={
              (imageLoad)
                ? (scrollIndex === 1)
                  ? "first-frame-in"
                  : ""
                : ""
            }/>
          <LogoImage
            src={Logo_R}
            alt=''
            className={
              (imageLoad)
                ? (scrollIndex === 1)
                  ? "second-frame-in"
                  : ""
                : ""
            }/>
          <LogoImage
            src={Logo_I}
            alt=''
            className={
              (imageLoad)
                ? (scrollIndex === 1)
                  ? "third-frame-in"
                  : ""
                : ""
            }/>
          <LogoImage
            src={Logo_A2}
            alt=''
            className={
              (imageLoad)
                ? (scrollIndex === 1)
                  ? "fourth-frame-in"
                  : ""
                : ""
            }/>
        </LogoImageContainer>
      </MainImage>
    </ImageBoxWrapper>
  )
};

export const ImageBoxWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #090e28;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MainImage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "ZingRustDemo";
  font-size: 48px;
  font-weight: 800;
  line-height: normal;
  color: #FFFFFF;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #090e2899;
  z-index: 99;
`;

const LogoImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const LogoImage = styled.img`
  width: auto;
  height: 260px;
  object-fit: cover;
  opacity: 0;

  @media screen and (max-width: 1320px) {
    height: 220px;
  }

  @media screen and (max-width: 836px) {
    height: 180px;
  }
`;

export default FirstPageImage;