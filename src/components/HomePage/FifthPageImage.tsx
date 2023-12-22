import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { ImageBoxWrapper } from './FirstPageImage';
import { ScrollContainer } from '../common/ScrollContainer';

interface FifthPageImageProps {
  mainPageTextChange: Function;
};

const FifthPageImage : React.FC<FifthPageImageProps> = ({ mainPageTextChange }) => {
    
  return (
    <ImageBoxWrapper color="pink">
      <ScrollContainer>
        Fifth
      </ScrollContainer>
    </ImageBoxWrapper>
  )
};

export default FifthPageImage;