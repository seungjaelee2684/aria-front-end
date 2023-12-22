import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { ImageBoxWrapper } from './FirstPageImage';

interface FifthPageImageProps {
  mainPageTextChange: Function;
};

const FifthPageImage : React.FC<FifthPageImageProps> = ({ mainPageTextChange }) => {
    
  return (
    <ImageBoxWrapper color="yellow">
      FifthPageImage
    </ImageBoxWrapper>
  )
};

export default FifthPageImage;