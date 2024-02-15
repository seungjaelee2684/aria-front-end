import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { mentorListData } from '../../data/MentorData';

interface MainSlideShowProps {
    mainSlideCurrent: number;
    setMainSlideCurrent: React.Dispatch<React.SetStateAction<number>>;
    isLoop: boolean;
    setIsLoop: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainSlideShow : React.FC<MainSlideShowProps> = ({ mainSlideCurrent, setMainSlideCurrent, isLoop, setIsLoop }) => {

    const mainSlideDivRef = useRef<HTMLDivElement>(null);
    const widthMove = mainSlideCurrent * 100

    const newSlideDataList = mentorListData?.filter((data) => data?.isready);

    console.log("필터된 멘토 데이터", newSlideDataList);

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
            <SlideImage src={newSlideDataList[newSlideDataList?.length - 1]?.slideimage.background}>
                <Nickname src={newSlideDataList[newSlideDataList?.length - 1]?.slideimage.nickname}/>
            </SlideImage>
            {newSlideDataList?.map((item : any, index : number) => {
                return (
                    <SlideImage key={item?.id} src={item?.slideimage.background}>
                        <Nickname src={item?.slideimage.nickname}/>
                    </SlideImage>
                )
            })}
            <SlideImage src={newSlideDataList[0]?.slideimage.background}>
                <Nickname src={newSlideDataList[0]?.slideimage.nickname}/>
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

const SmallNicknameRight = styled.img`
    width: 42%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 40%;
    left: 10%;
    user-select: none;
`;

const BigNicknameRight = styled.img`
    width: 70%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 40%;
    left: 10%;
    user-select: none;
`;

export default MainSlideShow;