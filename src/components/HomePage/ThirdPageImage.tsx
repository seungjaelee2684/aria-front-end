import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { BackgroundImage, ImageBoxWrapper } from './FirstPageImage';
import ThirdBG from '../../assets/images/mainpage/3.webp';

interface ThirdPageImageProps {
  mainPageTextChange: Function;
};

const ThirdPageImage : React.FC<ThirdPageImageProps> = ({ mainPageTextChange }) => {
  return (
    <ImageBoxWrapper>
      <BackgroundImage src={ThirdBG} alt=''/>
      Third
    </ImageBoxWrapper>
  )
};

export default ThirdPageImage;