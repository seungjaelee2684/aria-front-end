import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

interface MainSlideShowProps {
    mainSlideCurrent: number;
    setMainSlideCurrent: React.Dispatch<React.SetStateAction<number>>;
    isLoop: boolean;
    setIsLoop: React.Dispatch<React.SetStateAction<boolean>>;
    newSlideDataList: any;
};

const MainSlideShow : React.FC<MainSlideShowProps> = ({ mainSlideCurrent, setMainSlideCurrent, isLoop, setIsLoop, newSlideDataList }) => {

    const mainSlideDivRef = useRef<HTMLDivElement>(null);
    const widthMove = mainSlideCurrent * 100

    useEffect(() => {
        const mainSlideInterval = setInterval(() => {
            if (mainSlideCurrent === 0) {
                setMainSlideCurrent(newSlideDataList?.length);
            } else if (mainSlideCurrent === newSlideDataList?.length + 1) {
                setMainSlideCurrent(1);
            };
        }, 1000);

        if (mainSlideDivRef.current) {
            if (((mainSlideCurrent === 1) && (isLoop === true)) || ((mainSlideCurrent === newSlideDataList?.length) && (isLoop === true))) {
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
            <SlideImage src={(newSlideDataList) ? newSlideDataList[newSlideDataList?.length - 1]?.bannerImageUrl : ""}>
                <Nickname src={(newSlideDataList) ? newSlideDataList[newSlideDataList?.length - 1]?.nicknameImageUrl : ""}/>
            </SlideImage>
            {newSlideDataList?.map((item : any, index : number) => {
                return (
                    <SlideImage key={item?.mentorsId} src={item?.bannerImageUrl}>
                        <Nickname src={item?.nicknameImageUrl}/>
                    </SlideImage>
                )
            })}
            <SlideImage src={(newSlideDataList) ? newSlideDataList[0]?.bannerImageUrl : ""}>
                <Nickname src={(newSlideDataList) ? newSlideDataList[0]?.nicknameImageUrl : ""}/>
            </SlideImage>
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
    position: relative;
    user-select: none;
`;

const Nickname = styled.img`
    width: 50%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 20%;
    left: 10%;
    user-select: none;

    @media screen and (max-width: 1920px) {
        width: 80%;
        top: 35%;
    }
`;

export default MainSlideShow;