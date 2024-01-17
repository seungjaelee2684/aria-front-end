import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import SlideImg from '../../assets/images/mentorimage.webp';
import { MainBannertData } from '../../data/MainBannerData';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
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

    useEffect(() => {
        const mainSlideInterval = setInterval(() => {
            if (mainSlideCurrent === 0) {
                setMainSlideCurrent(mentorListData?.length);
            } else if (mainSlideCurrent === mentorListData?.length + 1) {
                setMainSlideCurrent(1);
            };
        }, 1000);

        if (mainSlideDivRef.current) {
            if (((mainSlideCurrent === 1) && (isLoop === true)) || ((mainSlideCurrent === mentorListData?.length) && (isLoop === true))) {
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
            <SlideImage src={mentorListData[mentorListData?.length - 1]?.slideimage.background}>
                {(mentorListData[mentorListData?.length - 1]?.slideimage.bigger)
                    ? <SmallNickname src={mentorListData[mentorListData?.length - 1]?.slideimage.nickname}/>
                    : <BigNickname src={mentorListData[mentorListData?.length - 1]?.slideimage.nickname}/>}
            </SlideImage>
            {mentorListData?.map((item : any, index : number) => {
                return (
                    <SlideImage key={item?.id} src={item?.slideimage.background}>
                        {(item?.slideimage.bigger)
                            ? <SmallNickname src={item?.slideimage.nickname}/>
                            : <BigNickname src={item?.slideimage.nickname}/>}
                    </SlideImage>
                )
            })}
            <SlideImage src={mentorListData[0]?.slideimage.background}>
                {(mentorListData[0]?.slideimage.bigger)
                    ? <SmallNickname src={mentorListData[0]?.slideimage.nickname}/>
                    : <BigNickname src={mentorListData[0]?.slideimage.nickname}/>}
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

const SmallNickname = styled.img`
    width: 42%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 35%;
    left: 10%;
    user-select: none;
`;

const BigNickname = styled.img`
    width: 70%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 35%;
    left: 10%;
    user-select: none;
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