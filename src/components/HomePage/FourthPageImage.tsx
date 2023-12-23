import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components'
import { BackgroundImage, ImageBoxWrapper } from './FirstPageImage';
import FourthBG from '../../assets/images/mainpage/4.webp';

interface FourthPageImageProps {
  mainPageTextChange: Function;
};

const FourthPageImage : React.FC<FourthPageImageProps> = ({ mainPageTextChange }) => {
  
  return (
    <ImageBoxWrapper>
      <BackgroundImage src={FourthBG} alt=''/>
      Fourth
    </ImageBoxWrapper>
  )
};

export default FourthPageImage;