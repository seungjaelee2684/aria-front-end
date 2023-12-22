import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { ImageBoxWrapper } from './FirstPageImage';

interface ThirdPageImageProps {
  mainPageTextChange: Function;
};

const ThirdPageImage : React.FC<ThirdPageImageProps> = ({ mainPageTextChange }) => {
  return (
    <ImageBoxWrapper>
      ThirdPageImage
    </ImageBoxWrapper>
  )
};

export default ThirdPageImage;