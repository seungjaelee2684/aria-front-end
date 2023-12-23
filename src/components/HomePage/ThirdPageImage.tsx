import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { BackgroundImage, ImageBoxWrapper, MainImage } from './FirstPageImage';
import ThirdBG from '../../assets/images/mainpage/3.webp';
import { useRecoilValue } from 'recoil';
import { MainPageNumber } from '../../store/MainPageNumber';

interface ThirdPageImageProps {
  mainPageTextChange: Function;
};

const ThirdPageImage : React.FC<ThirdPageImageProps> = ({ mainPageTextChange }) => {
  
  const scrollIndex = useRecoilValue(MainPageNumber);

  return (
    <ImageBoxWrapper>
      <BackgroundImage src={ThirdBG} alt=''/>
      <MainImage>
        Third
      </MainImage>
    </ImageBoxWrapper>
  )
};

export default ThirdPageImage;