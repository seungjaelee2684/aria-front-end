import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';

interface FirstPageImageProps {
  mainPageTextChange: Function;
};

const FirstPageImage : React.FC<FirstPageImageProps> = ({ mainPageTextChange }) => {
    
  return (
    <ImageBoxWrapper color="red">
      FirstPageImage
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