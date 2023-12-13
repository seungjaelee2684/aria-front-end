import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import '../style/font/font.css';
import MainBG from '../assets/images/sanpatimainbackground.webp';
import MainCharactor from '../assets/images/maincharactorimage.webp';
import '../components/HomePage/MainImage/MainImage.css';
import { useRecoilState } from 'recoil';
import { MainPageNumber } from '../store/MainPageNumber';
import SecondPageImage from '../components/HomePage/SecondPageImage';
import MainSlideShow from '../components/HomePage/MainSlideShow';
import { ScrollContainer } from '../components/common/ScrollContainer';
import { ScrollAnimation } from '../utils/ScrollAnimation';

const Home = () => {

//     useEffect(() => {
//         const wheelEventHandler = (e : any) => {
//             if (outerDivRef.current) {
//                 const { deltaY } = e;
//                 const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
//                 const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

//                 if (deltaY > 0) {
//                     // 스크롤 내릴 때
//                     if (scrollTop >= 0 && scrollTop < pageHeight) {
//                     //현재 1페이지
//                     console.log("현재 1페이지, down");
//                     outerDivRef.current.scrollTo({
//                         top: pageHeight + DIVIDER_HEIGHT,
//                         left: 0,
//                         behavior: "smooth",
//                     });
//                     setScrollIndex(2);
//                     };
//                 } else {
//                     // 스크롤 올릴 때
//                     if (scrollTop >= 0 && scrollTop < pageHeight) {
//                     //현재 1페이지
//                     console.log("현재 1페이지, up");
//                     outerDivRef.current.scrollTo({
//                         top: 0,
//                         left: 0,
//                         behavior: "smooth",
//                     });
//                     setScrollIndex(1);
//                     } else {
//                     //현재 2페이지
//                     console.log("현재 2페이지, up");
//                     outerDivRef.current.scrollTo({
//                         top: 0,
//                         left: 0,
//                         behavior: "smooth",
//                     });
//                     setScrollIndex(1);
//                     }
//                 }
//                 }
//             };
//     if (outerDivRef.current) {
//         const outerDivRefCurrent = outerDivRef.current;
//         outerDivRefCurrent.addEventListener("wheel", wheelEventHandler);
//         return () => {
//         outerDivRefCurrent.removeEventListener("wheel", wheelEventHandler);
//         };
//     };  
//   }, []);

  return (
    <MainLayout>
        {/* <MainSlideShow /> */}
        <Background />
        <ScrollContainer>
            안녕
        </ScrollContainer>
        <Background />
    </MainLayout>
  )
};

const MainLayout = styled.div`
    width: 100%;
    /* overflow-y: hidden; */
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    z-index: 97;
    @media (prefers-color-scheme: dark) {
    .scheme   { background:  #ffffff; color: #fff; }
    }
`;

export const MainImage = styled.div`
    width: 100%;
    height: 800px;
    /* background-color: #FFFFFF; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 48px;
    font-weight: 800;
    line-height: normal;
`;

const Background = styled.div`
    width: 100%;
    height: 2000px;
    background-color: #e9e9e9;
`;

export default Home;