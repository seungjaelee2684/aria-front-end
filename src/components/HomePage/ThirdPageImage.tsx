import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { BackgroundImage, ImageBoxWrapper } from './FirstPageImage';
import { ScrollContainer } from '../common/ScrollContainer';
import ThirdBG from '../../assets/images/mainpage/3.webp';

interface ThirdPageImageProps {
  mainPageTextChange: Function;
};

const ThirdPageImage : React.FC<ThirdPageImageProps> = ({ mainPageTextChange }) => {
  return (
    <ImageBoxWrapper color="blue">
      <BackgroundImage src={ThirdBG} alt=''/>
      <ScrollContainer>
        Third
      </ScrollContainer>
    </ImageBoxWrapper>
  )
};

export default ThirdPageImage;