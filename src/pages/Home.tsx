import React, { useRef, useEffect, useState } from 'react';
import '../components/HomePage/MainImage/MainImage.css';
import styled from 'styled-components';
import '../style/font/font.css';
import MainBG from '../assets/images/sanpatimainbackground.webp';
import MainCharactor from '../assets/images/maincharactorimage.webp';
import '../components/HomePage/MainImage/MainImage.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MainPageNumber } from '../store/MainPageNumber';
import SecondPageImage from '../components/HomePage/SecondPageImage';
import MainSlideShow from '../components/HomePage/MainSlideShow';
import MainBackground from '../assets/images/mainpagebg.png';
import { homeTrans } from '../languages/HomeTrans';
import FirstPageImage from '../components/HomePage/FirstPageImage';
import ThirdPageImage from '../components/HomePage/ThirdPageImage';
import FourthPageImage from '../components/HomePage/FourthPageImage';
import FifthPageImage from '../components/HomePage/FifthPageImage';
import PageNumber from '../components/HomePage/PageNumber';
import MobileMain from '../components/HomePage/MobileMain';

const Home = () => {

    const language = localStorage.getItem("language");
    const [scrollIndex, setScrollIndex] = useRecoilState(MainPageNumber);
    const outerDivRef = useRef<HTMLDivElement>(null);
    const DIVIDER_HEIGHT = 5;

    const mainPageTextChange = (Num : number) => {
        switch (language) {
            case "japanese" :
                return homeTrans[Num]?.japanesetext;
            case "korean" :
                return homeTrans[Num]?.text;
            default :
                return homeTrans[Num]?.englishtext;
        }
    };

    useEffect(() => {
        if (outerDivRef.current) {
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
            if (scrollIndex === 1) {
                outerDivRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollIndex === 2) {
                outerDivRef.current.scrollTo({
                    top: pageHeight + DIVIDER_HEIGHT,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollIndex === 3) {
                outerDivRef.current.scrollTo({
                    top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollIndex === 4) {
                outerDivRef.current.scrollTo({
                    top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                    left: 0,
                    behavior: "smooth",
                });
            };
        };
        const wheelEventHandler = (e : any) => {
            if (outerDivRef.current) {
                // e.preventDefault();
                const { deltaY } = e;
                const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
                const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

                if (deltaY >= 0) {
                    // 스크롤 내릴 때
                    if (scrollTop >= 0 && scrollTop < pageHeight) {
                        //현재 1페이지
                        outerDivRef.current.scrollTo({
                            top: pageHeight + DIVIDER_HEIGHT,
                            left: 0,
                            behavior: "smooth",
                        });
                        setScrollIndex(2);
                    } else if (scrollTop >= 0 && scrollTop < pageHeight * 2) {
                        //현재 2페이지
                        outerDivRef.current.scrollTo({
                            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                            left: 0,
                            behavior: "smooth",
                        });
                        setScrollIndex(3);
                    } else if (scrollTop >= 0 && scrollTop < pageHeight * 3) {
                        //현재 3페이지
                        outerDivRef.current.scrollTo({
                            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                            left: 0,
                            behavior: "smooth",
                        });
                        setScrollIndex(4);
                    } else {
                        e.preventDefault();
                    }
                    // else if (scrollTop >= 0 && scrollTop < pageHeight * 4) {
                    //     //현재 4페이지
                    //     ("현재 4페이지, down");
                    //     outerDivRef.current.scrollTo({
                    //         top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
                    //         left: 0,
                    //         behavior: "smooth",
                    //     });
                    //     setScrollIndex(5);
                    // }
                    // else {
                    //     //현재 5페이지
                    //     e.preventDefault();
                    // };
                } else {
                    // 스크롤 올릴 때
                    if (scrollTop >= 0 && scrollTop < pageHeight) {
                        //현재 1페이지
                        outerDivRef.current.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                        setScrollIndex(1);
                    } else if (scrollTop >= 0 && scrollTop < pageHeight * 2) {
                        //현재 2페이지
                        outerDivRef.current.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                        setScrollIndex(1);
                    } else if (scrollTop >= 0 && scrollTop < pageHeight * 3) {
                        //현재 3페이지
                        outerDivRef.current.scrollTo({
                            top: pageHeight * 1  + DIVIDER_HEIGHT * 1,
                            left: 0,
                            behavior: "smooth",
                        });
                        setScrollIndex(2);
                    } else {
                        //현재 4페이지
                        outerDivRef.current.scrollTo({
                            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                            left: 0,
                            behavior: "smooth",
                        });
                        setScrollIndex(3);
                    }
                    // else {
                    //     // 현재 5페이지
                    //     outerDivRef.current.scrollTo({
                    //       top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                    //       left: 0,
                    //       behavior: "smooth",
                    //     });
                    //     setScrollIndex(4);
                    // };
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
  }, [scrollIndex]);

  return (
    <MainLayout ref={outerDivRef}>
        <FirstPageImage mainPageTextChange={mainPageTextChange}/>
        <SpaceBetweenContainer />
        <SecondPageImage mainPageTextChange={mainPageTextChange}/>
        <SpaceBetweenContainer />
        <ThirdPageImage mainPageTextChange={mainPageTextChange}/>
        <SpaceBetweenContainer />
        {/* <FourthPageImage mainPageTextChange={mainPageTextChange}/>
        <SpaceBetweenContainer /> */}
        <FifthPageImage mainPageTextChange={mainPageTextChange}/>
        <SpaceBetweenContainer />
        <MobileMain mainPageTextChange={mainPageTextChange}/>
        <PageNumber />
    </MainLayout>
  )
};

const MainLayout = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 97;

    @media screen and (max-width: 500px) {
        overflow-y: visible;
        height: 100vh;
        /* padding: 0px 0px 80px 0px; */
    }
`;

const SpaceBetweenContainer = styled.div`
    width: 100%;
    min-height: 5px;
    background-color: #090e28;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export default Home;