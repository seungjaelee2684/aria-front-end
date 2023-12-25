import React, { useState } from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import FirstBG from '../../assets/images/mainpage/1.webp';
import Logo from '../../assets/images/mainpage/Asset 95.webp';
import { useRecoilValue } from 'recoil';
import { MainPageNumber } from '../../store/MainPageNumber';

interface FirstPageImageProps {
  mainPageTextChange: Function;
};

const FirstPageImage : React.FC<FirstPageImageProps> = ({ mainPageTextChange }) => {
    
  const scrollIndex = useRecoilValue(MainPageNumber);
  const [imageLoad, setImageLoad] = useState<boolean>(false);

  return (
    <ImageBoxWrapper>
      <BackgroundImage src={FirstBG} alt=''/>
      <MainImage>
        <LogoImage
          src={Logo}
          alt=''
          onLoad={() => setImageLoad(true)}
          className={
            (imageLoad)
              ? (scrollIndex === 1)
                ? "frame-in"
                : ""
              : ""
          }/>
      </MainImage>
    </ImageBoxWrapper>
  )
};

export const ImageBoxWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
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

const LogoImage = styled.img`
  width: 550px;
  height: auto;
  object-fit: cover;
`;

export default FirstPageImage;