import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components'
import { ImageBoxWrapper } from './FirstPageImage';

interface FourthPageImageProps {
  mainPageTextChange: Function;
};

const FourthPageImage : React.FC<FourthPageImageProps> = ({ mainPageTextChange }) => {
  
  return (
    <ImageBoxWrapper>
      FourthPageImage
    </ImageBoxWrapper>
  )
};

export default FourthPageImage;