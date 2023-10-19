import React, { useState } from 'react'
import styled from 'styled-components';
import ScrollIcon from '../../assets/images/testImage.png';

const ScrollBar = () => {

    const [scrollPer, setScrollPer] = useState<number>(0);

    window.addEventListener("scroll", function() {
        // 현재 스크롤 위치를 얻어옵니다.
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 문서의 총 높이를 얻어옵니다.
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        // 스크롤 위치를 퍼센트로 계산합니다.
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        setScrollPer(scrollPercentage);
      
        // 스크롤 위치를 표시하거나 다른 작업을 수행합니다.
    });
    console.log("현재 스크롤 위치:", scrollPer);

  return (
    <ScrollBarContainer>
        <ScrollImage src={ScrollIcon}/>
        <ScrollBackground>
            <ScrollColorBar height={`${scrollPer}%`} width={`${scrollPer}%`}></ScrollColorBar>
        </ScrollBackground>
    </ScrollBarContainer>
  )
};

const ScrollBarContainer = styled.div`
    position: fixed;
    z-index: 200;
    top: 25%;
    right: 20px;
    display: grid;
    justify-content: center;
    gap: 24px;

    @media screen and (max-width: 958px) {
        top: 70px;
        left: 0;
        width: 100%;
        display: block;
    }
`;

const ScrollImage = styled.img`
    width: 32px;
    height: 32px;
    object-fit: contain;
    margin: 0 auto;
    opacity: 0.5;

    @media screen and (max-width: 958px) {
        display: none;
    }
`;

const ScrollBackground = styled.div`
    width: 5px;
    height: 450px;
    border-radius: 5px;
    background-color: #e9e9e950;
    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 958px) {
        width: 100%;
        height: 3px;
    }
`;

const ScrollColorBar = styled.div<{ height : string, width : string }>`
    width: 5px;
    height: ${(props) => props.height};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 201;
    background-color: #002efd60;
    border-radius: 5px;
    transition: all 0.08s ease-in-out;

    @media screen and (max-width: 958px) {
        width: ${(props) => props.width};
        height: 3px;
        background-color: #002efd;
    }
`;

export default ScrollBar;