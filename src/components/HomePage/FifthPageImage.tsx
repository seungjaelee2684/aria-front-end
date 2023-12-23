import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { BackgroundImage, ImageBoxWrapper, MainImage } from './FirstPageImage';
import FifthBG from '../../assets/images/mainpage/5.webp';

interface FifthPageImageProps {
  mainPageTextChange: Function;
};

const FifthPageImage : React.FC<FifthPageImageProps> = ({ mainPageTextChange }) => {
    
  return (
    <ImageBoxWrapper>
      <BackgroundImage src={FifthBG} alt=''/>
      <MainImage>
        Fifth
      </MainImage>
    </ImageBoxWrapper>
  )
};

export default FifthPageImage;