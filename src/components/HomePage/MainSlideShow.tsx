import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import SlideImg from '../../assets/images/mentorimage.webp';
import { MainBannertData } from '../../data/MainBannerData';

const MainSlideShow = () => {

    const mainSlideDivRef = useRef<HTMLDivElement>(null);
    const [mainSlideCurrent, setMainSlideCurrent] = useState<number>(0);
    const widthMove = mainSlideCurrent * 100

    useEffect(() => {
        if (mainSlideDivRef.current) {
            mainSlideDivRef.current.style.transition = "all 0.8s ease-in-out";
            mainSlideDivRef.current.style.transform = `translateX(-${widthMove}%)`;
        };
    }, [mainSlideCurrent]);

    const onClickMainPrevHandler = () => {
        if (mainSlideCurrent === 0) {
            setMainSlideCurrent(MainBannertData?.length - 1);
        } else {
            setMainSlideCurrent(mainSlideCurrent - 1);
        };
    };

    const onClickMainNextHandler = () => {
        if (mainSlideCurrent === MainBannertData?.length - 1) {
            setMainSlideCurrent(0);
        } else {
            setMainSlideCurrent(mainSlideCurrent + 1);
        };
    };

  return (
    <SlideShowOutContainer>
        <SlideWrapper ref={mainSlideDivRef}>
            {MainBannertData?.map((item) => {
                return (
                    <SlideImage key={item?.id} src={item?.image}>
                        MainSlideShow
                    </SlideImage>
                )
            })}
        </SlideWrapper>
        <NextPrevButtonWrapper>
            {MainBannertData?.map((item) => {
                return (
                    <SlideButton key={item?.id}>
                        {MainBannertData?.indexOf(item) + 1}
                    </SlideButton>
                )
            })}
            <SlideButton onClick={onClickMainPrevHandler}>
                P
            </SlideButton>
            <SlideButton onClick={onClickMainNextHandler}>
                N
            </SlideButton>
        </NextPrevButtonWrapper>
    </SlideShowOutContainer>
  )
};

const SlideShowOutContainer = styled.div`
    width: 100%;
    height: 600px;
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
    background-position: 100% 100%;
    background-repeat: no-repeat;
`;

const NextPrevButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    position: absolute;
    bottom: 10%;
    left: 10%;
`;

const SlideButton = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    color: #222020;
    cursor: pointer;

    &:hover {
        background-color: #d3d3d3;
    }
`;

export default MainSlideShow;