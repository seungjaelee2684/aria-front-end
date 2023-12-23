import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components'
import { BackgroundImage, ImageBoxWrapper, MainImage } from './FirstPageImage';
import FourthBG from '../../assets/images/mainpage/4.webp';
import { useRecoilValue } from 'recoil';
import { MainPageNumber } from '../../store/MainPageNumber';

interface FourthPageImageProps {
  mainPageTextChange: Function;
};

const FourthPageImage : React.FC<FourthPageImageProps> = ({ mainPageTextChange }) => {
  
  const scrollIndex = useRecoilValue(MainPageNumber);
  
  return (
    <ImageBoxWrapper>
      <BackgroundImage src={FourthBG} alt=''/>
      <MainImage>
        Fourth
      </MainImage>
    </ImageBoxWrapper>
  )
};

export default FourthPageImage;