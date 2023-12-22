import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { ScrollContainer } from '../common/ScrollContainer';
import FirstBG from '../../assets/images/mainpage/1.webp';

interface FirstPageImageProps {
  mainPageTextChange: Function;
};

const FirstPageImage : React.FC<FirstPageImageProps> = ({ mainPageTextChange }) => {
    
  return (
    <ImageBoxWrapper color="red">
      <BackgroundImage src={FirstBG} alt=''/>
      <ScrollContainer>
        First
      </ScrollContainer>
    </ImageBoxWrapper>
  )
};

export const ImageBoxWrapper = styled.div<{ color : string }>`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.color};
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export default FirstPageImage;