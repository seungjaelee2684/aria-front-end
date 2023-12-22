import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components'
import { ImageBoxWrapper } from './FirstPageImage';
import { ScrollContainer } from '../common/ScrollContainer';

interface FourthPageImageProps {
  mainPageTextChange: Function;
};

const FourthPageImage : React.FC<FourthPageImageProps> = ({ mainPageTextChange }) => {
  
  return (
    <ImageBoxWrapper color="green">
      <ScrollContainer>
        Fourth
      </ScrollContainer>
    </ImageBoxWrapper>
  )
};

export default FourthPageImage;