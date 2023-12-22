import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';

interface FirstPageImageProps {
  mainPageTextChange: Function;
};

const FirstPageImage : React.FC<FirstPageImageProps> = ({ mainPageTextChange }) => {
    
  return (
    <ImageBoxWrapper>
      FirstPageImage
    </ImageBoxWrapper>
  )
};

export const ImageBoxWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #ADADAD;
`;

export default FirstPageImage;