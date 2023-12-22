import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { ImageBoxWrapper } from './FirstPageImage';
import { ScrollContainer } from '../common/ScrollContainer';

interface ThirdPageImageProps {
  mainPageTextChange: Function;
};

const ThirdPageImage : React.FC<ThirdPageImageProps> = ({ mainPageTextChange }) => {
  return (
    <ImageBoxWrapper color="blue">
      <ScrollContainer>
        Third
      </ScrollContainer>
    </ImageBoxWrapper>
  )
};

export default ThirdPageImage;