import React, { useState, useRef, useEffect, ReactEventHandler } from 'react';
import styled from 'styled-components';
import Image from '../assets/images/mainimage.jpg';
import MainBackground from '../assets/images/mainimage2.jpg';
import MainBG from '../assets/images/sanpatimainbackground.png';
import MainImage from '../components/HomePage/MainImage/MainImage';
import MainCharactor from '../assets/images/maincharactorimage.png';
import '../components/HomePage/MainImage/MainImage.css';
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
                    };
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
                <ImageBoxWrapper>
                    <GradientContainer className={(scrollIndex === 1) ? "GradientContainer" : "NoneGradientContainer"}/>
                    {/* <ObjectImage src={MainCharactor}/> */}
                    <Images src={MainBG}/>
                </ImageBoxWrapper>
                <ImageBoxWrapper>
                    <GradientContainer />
                    <ObjectImage
                        className={(scrollIndex === 2) ? "CharactorImage" : "NoneCharactorImage"}
                        src={MainCharactor}/>
                    <Images src={MainBG}/>   
                </ImageBoxWrapper>
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
    /* margin-top: 80px; */
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    overflow-y: auto;
    background-color: black;
    /* position: absolute;
    top: 0;
    left: 0; */

    ::-webkit-scrollbar {
        display: none;
    }
`;

const GradientContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0000008f;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 96;
    opacity: 0;
`;

const ImageBoxWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

const Images = styled.img`
    width: 100%;
    object-fit: cover;
    /* background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; */
    /* position: relative; */
    @media screen and (max-width: 1000px) {
        height: 100vh;
    }
`;

const ObjectImage = styled.div<{ src : string }>`
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
`;

export default Home;