import React, { useRef, useEffect } from 'react';
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
    const [scrollIndex, setScrollIndex] = useRecoilState(MainPageNumber);

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
        <MainSlideShow />
    </MainLayout>
  )
};

const MainLayout = styled.div`
    width: 100%;
    overflow-y: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 97;
    padding: 80px 0px 0px 0px;
`;

const MainImageContainer = styled.div`
    width: 100%;
    height: 100vh;
    /* margin-top: 80px; */
    ::-webkit-scrollbar {
        display: none;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    overflow-y: auto;
    background-color: #222020;
    /* position: absolute;
    top: 0;
    left: 0; */
`;

const GradientContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000ac;
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

    @media screen and (max-width: 1500px) {
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

const ArrowIcon = styled.div`
    width: 100px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 100px;
    color: #222020;
    position: absolute;
    left: 48%;
    z-index: 97;
    opacity: 0;

    @media screen and (max-width: 836px) {
        display: none;
    }
`;

const PageBarOutContainer = styled.div`
    position: fixed;
    top: 49%;
    right: 3%;
    z-index: 98;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const PageBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    position: relative;
`;

const PageNumberWrapper = styled.div`
    width: 22px;
    height: 22px;
    border: 2px solid #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transition: all 0.5s ease-in-out;
    transform: rotate(45deg);
    /* top: -5px; */
    /* bottom: -5px; */

    @media screen and (max-width: 1320px) {
        width: 18px;
        height: 18px;
    }
`;

const PageNumber = styled.div`
    width: 14px;
    height: 14px;
    transition: all 0.5s ease-in-out;
    /* border-radius: 100%; */
    transform: rotate(45deg);

    @media screen and (max-width: 1320px) {
        width: 10px;
        height: 10px;
    }
`;

export default Home;