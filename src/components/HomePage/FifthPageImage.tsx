import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { BackgroundImage, ImageBoxWrapper } from './FirstPageImage';
import { ScrollContainer } from '../common/ScrollContainer';
import FifthBG from '../../assets/images/mainpage/5.webp';

interface FifthPageImageProps {
  mainPageTextChange: Function;
};

const FifthPageImage : React.FC<FifthPageImageProps> = ({ mainPageTextChange }) => {
    
  return (
    <ImageBoxWrapper>
      <BackgroundImage src={FifthBG} alt=''/>
      <ScrollContainer>
        Fifth
      </ScrollContainer>
    </ImageBoxWrapper>
  )
};

export default FifthPageImage;