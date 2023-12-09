import React, { useRef } from 'react'
import styled from 'styled-components';
import SlideImg from '../../assets/images/mentorimage.webp';

const MainSlideShow = () => {

    const mainSlideDivRef = useRef<HTMLDivElement>(null);

  return (
    <SlideShowOutContainer>
        <SlideImage src={SlideImg}>
            MainSlideShow
        </SlideImage>
    </SlideShowOutContainer>
  )
};

const SlideShowOutContainer = styled.div`
    width: 100%;
    height: 600px;
    position: relative;
    background-color: #e9e9e9;
`;

const SlideImage = styled.div<{ src : string }>`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: 100% 100%;
    background-repeat: no-repeat;
`;

export default MainSlideShow;