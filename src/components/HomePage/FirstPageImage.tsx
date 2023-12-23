import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import FirstBG from '../../assets/images/mainpage/1.webp';
import Logo from '../../assets/images/mainpage/Asset 95.webp';

interface FirstPageImageProps {
  mainPageTextChange: Function;
};

const FirstPageImage : React.FC<FirstPageImageProps> = ({ mainPageTextChange }) => {
    
  return (
    <ImageBoxWrapper>
      <BackgroundImage src={FirstBG} alt=''/>
      <LogoImage src={Logo} alt=''/>
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

const LogoImage = styled.img`
  width: 550px;
  height: auto;
  object-fit: cover;
`;

export default FirstPageImage;