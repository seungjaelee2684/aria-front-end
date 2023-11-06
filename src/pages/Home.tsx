import React, { useState, useRef, useEffect, ReactEventHandler } from 'react';
import styled from 'styled-components';
import Image from '../assets/images/mainimage.jpg';
import MainBackground from '../assets/images/mainimage2.jpg';
import MainBG from '../assets/images/mainimage2.jpg';
import MainImage from '../components/HomePage/MainImage/MainImage';
// import MyVideo from '../assets/videos/video.mp4';

const DIVIDER_HEIGHT = 5;

const Home = () => {

    const outerDivRef = useRef<HTMLDivElement>(null);
    const [scrollIndex, setScrollIndex] = useState<number>(1);

    useEffect(() => {
        const wheelEventHandler = (e : any) => {
            if (outerDivRef.current) {
                const { deltaY } = e;
                const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
                const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

                if (deltaY > 0) {
                    // 스크롤 내릴 때
                    if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log("현재 1페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(2);
                    } else {
                    //현재 2페이지
                    console.log("현재 2페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(3);
                    }
                } else {
                    // 스크롤 올릴 때
                    if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log("현재 1페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                    } else {
                    //현재 2페이지
                    console.log("현재 2페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                    }
                }
                }
            };
    if (outerDivRef.current) {
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelEventHandler);
        return () => {
        outerDivRefCurrent.removeEventListener("wheel", wheelEventHandler);
        };
    };
    
  }, []);
  return (
    <MainLayout>
        <MainImageContainer>
            <ImageWrapper ref={outerDivRef}>
            {/* <GradientContainer /> */}
                <Images src={MainBG}/>
                <Images src={MainBG}/>
                {/* <Images src={MainBG}/> */}
            </ImageWrapper>
        </MainImageContainer>
    </MainLayout>
  )
};

const MainLayout = styled.div`
    width: 100%;
    /* padding: 0px 0px; */
    overflow-y: hidden;
    position: relative;
    display: grid;
    justify-content: center;
    z-index: 97;
`;

const MainImageContainer = styled.div`
    width: 100%;
    height: 100vh;
    /* overflow: hidden; */
    /* margin-top: 80px; */
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    overflow-y: auto;
    /* position: absolute;
    top: 0;
    left: 0; */

    ::-webkit-scrollbar {
        display: none;
    }
`;

const GradientContainer = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #00000040, transparent);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
`;

const VideoFile = styled.video`
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
`;

const Images = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    /* background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: 0% 0%;
    background-repeat: no-repeat; */
`;

const UnderBar = styled.div`
    width: 100%;
    height: 5px;
    background-color: #000000;
`;

export default Home;