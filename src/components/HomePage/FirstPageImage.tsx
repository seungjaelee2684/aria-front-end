import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { ScrollContainer } from '../common/ScrollContainer';

interface FirstPageImageProps {
  mainPageTextChange: Function;
};

const FirstPageImage : React.FC<FirstPageImageProps> = ({ mainPageTextChange }) => {
    
  return (
    <ImageBoxWrapper color="red">
      <ScrollContainer>
        First
      </ScrollContainer>
    </ImageBoxWrapper>
  )
};

export const ImageBoxWrapper = styled.div<{ color : string }>`
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: ${(props) => props.color};
`;

export default FirstPageImage;