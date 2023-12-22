import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import '../style/font/font.css';
import MainBG from '../assets/images/sanpatimainbackground.webp';
import MainCharactor from '../assets/images/maincharactorimage.webp';
import '../components/HomePage/MainImage/MainImage.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MainPageNumber } from '../store/MainPageNumber';
import SecondPageImage from '../components/HomePage/SecondPageImage';
import MainSlideShow from '../components/HomePage/MainSlideShow';
import { ScrollContainer } from '../components/common/ScrollContainer';
import { ScrollAnimation } from '../utils/ScrollAnimation';
import MainBackground from '../assets/images/mainpagebg.png';
import { mainPageText } from '../languages/HomeTrans';
import FirstPageImage from '../components/HomePage/FirstPageImage';
import ThirdPageImage from '../components/HomePage/ThirdPageImage';
import FourthPageImage from '../components/HomePage/FourthPageImage';
import FifthPageImage from '../components/HomePage/FifthPageImage';

const Home = () => {

    const language = localStorage.getItem("language");
    const [scrollIndex, setScrollIndex] = useRecoilState(MainPageNumber);
    const outerDivRef = useRef<HTMLDivElement>(null);
    const DIVIDER_HEIGHT = 5;

    const mainPageTextChange = (Num : number) => {
        switch (language) {
            case "chinese" :
                return mainPageText[Num]?.chinesetext;
            case "japanese" :
                return mainPageText[Num]?.japanesetext;
            case "korean" :
                return mainPageText[Num]?.text;
            default :
                return mainPageText[Num]?.englishtext;
        }
    };

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
                    } else if (scrollTop >= 0 && scrollTop < pageHeight * 2) {
                        //현재 2페이지
                        console.log("현재 2페이지, up");
                        outerDivRef.current.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                        setScrollIndex(1);
                    } else {
                        // 현재 3페이지
                        console.log("현재 3페이지, up");
                        outerDivRef.current.scrollTo({
                          top: pageHeight + DIVIDER_HEIGHT,
                          left: 0,
                          behavior: "smooth",
                        });
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
    <MainLayout ref={outerDivRef}>
        <FirstPageImage mainPageTextChange={mainPageTextChange}/>
        <SecondPageImage mainPageTextChange={mainPageTextChange}/>
        <ThirdPageImage mainPageTextChange={mainPageTextChange}/>
        <FourthPageImage mainPageTextChange={mainPageTextChange}/>
        <FifthPageImage mainPageTextChange={mainPageTextChange}/>
    </MainLayout>
  )
};

const MainLayout = styled.div`
    width: 100%;
    overflow-y: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 97;
`;

export const MainImage = styled.div`
    width: 100%;
    height: 800px;
    /* background-color: #FFFFFF; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "ZingRustDemo";
    font-size: 48px;
    font-weight: 800;
    line-height: normal;
    color: #FFFFFF;
`;

const Background = styled.div`
    width: 100%;
    height: 2000px;
    background-color: #e9e9e9;
`;

const BackgroundImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`; 

export default Home;