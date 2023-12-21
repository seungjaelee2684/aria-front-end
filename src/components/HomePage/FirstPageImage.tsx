import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';

const FirstPageImage = () => {
    
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
`;

export default FirstPageImage;