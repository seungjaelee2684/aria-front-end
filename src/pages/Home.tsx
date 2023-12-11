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

const DIVIDER_HEIGHT = 5;

const Home = () => {

    const outerDivRef = useRef<HTMLDivElement>(null);
    const [isInViewport, setIsInViewport] = useState<boolean>(false);

    useEffect(() => {
        if (!outerDivRef.current) { return; }; //요소가 아직 준비되지 않은 경우

        const callbackFunction = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  // 요소가 뷰포트에 나타났을 경우
                  setIsInViewport(true);
                } else {
                  // 요소가 뷰포트를 벗어난 경우
                  setIsInViewport(false);
                }
            });
        };

        const options = { root: null, rootMargin: "0px", threshold: 0 };
        const observer = new IntersectionObserver(callbackFunction, options);
        observer.observe(outerDivRef.current) // 요소 관찰 시작

        return () => {
            observer.disconnect(); //컴포넌트 언마운트 시 관찰 중단
        };
    }, []);
    console.log(isInViewport);

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
        <MainImage 
            src={MainCharactor}
            ref={outerDivRef}
            className={isInViewport ? "frame-in" : ""} />
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
    padding: 80px 0px 0px 0px;
`;

const MainImage = styled.div<{ src : string }>`
    width: 500px;
    height: 400px;
    background-image: url(${(props) => props.src});
    background-size: cover;
`;

const Background = styled.div`
    width: 100%;
    height: 2000px;
    background-color: #e9e9e9;
`;

export default Home;