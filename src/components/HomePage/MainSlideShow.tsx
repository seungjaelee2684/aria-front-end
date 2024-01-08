import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import SlideImg from '../../assets/images/mentorimage.webp';
import { MainBannertData } from '../../data/MainBannerData';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface MainSlideShowProps {
    mainSlideCurrent: number;
    setMainSlideCurrent: React.Dispatch<React.SetStateAction<number>>;
    isLoop: boolean;
    setIsLoop: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainSlideShow : React.FC<MainSlideShowProps> = ({ mainSlideCurrent, setMainSlideCurrent, isLoop, setIsLoop }) => {

    const mainSlideDivRef = useRef<HTMLDivElement>(null);
    const widthMove = mainSlideCurrent * 100

    useEffect(() => {
        const mainSlideInterval = setInterval(() => {
            if (mainSlideCurrent === 0) {
                setMainSlideCurrent(MainBannertData?.length);
            } else if (mainSlideCurrent === MainBannertData?.length + 1) {
                setMainSlideCurrent(1);
            };
        }, 1000);

        if (mainSlideDivRef.current) {
            if (((mainSlideCurrent === 1) && (isLoop === true)) || ((mainSlideCurrent === MainBannertData?.length) && (isLoop === true))) {
                mainSlideDivRef.current.style.transition = "";
            } else {
                mainSlideDivRef.current.style.transition = "all 1s ease-out";
            }; 
            mainSlideDivRef.current.style.transform = `translateX(-${widthMove}%)`;
        };

        return () => {
            clearInterval(mainSlideInterval);
        };
    }, [mainSlideCurrent]);

  return (
    <SlideShowOutContainer>
        <SlideWrapper ref={mainSlideDivRef}>
            <SlideImage src={MainBannertData[MainBannertData?.length - 1]?.image}/>
            {MainBannertData?.map((item : any, index : number) => {
                return (
                    <SlideImage key={item?.id} src={item?.image}/>
                )
            })}
            <SlideImage src={MainBannertData[0]?.image}/>
        </SlideWrapper>
    </SlideShowOutContainer>
  )
};

const SlideShowOutContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #e9e9e9;
    overflow: hidden;
`;

const SlideWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const SlideImage = styled.div<{ src : string }>`
    min-width: 100%;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const NextPrevButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    position: absolute;
    bottom: -5%;
    left: 15%;
    z-index: 100;
`;

const SlideButton = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid gold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    color: gold;
    cursor: pointer;

    &:hover {

    }
`;

export default MainSlideShow;