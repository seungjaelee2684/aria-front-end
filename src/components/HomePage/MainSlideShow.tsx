import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import SlideImg from '../../assets/images/mentorimage.webp';
import { MainBannertData } from '../../data/MainBannerData';

const MainSlideShow = () => {

    const mainSlideDivRef = useRef<HTMLDivElement>(null);
    const [mainSlideCurrent, setMainSlideCurrent] = useState<number>(0);

    useEffect(() => {
        if (mainSlideDivRef.current) {
            mainSlideDivRef.current.style.transform = ``;
        };
    }, [mainSlideCurrent]);

    const onClickMainPrevHandler = () => {
        if (mainSlideCurrent === 0) {
            setMainSlideCurrent(MainBannertData?.length - 1);
        };
        setMainSlideCurrent(mainSlideCurrent + 1);
    };

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

const SlideWrapper = styled.div`
    height: 100%;
    transition: all 0.3 ease-out;
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