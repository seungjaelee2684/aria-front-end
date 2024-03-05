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
import { useQuery } from 'react-query';
import { getNewMentorBannerApi } from '../api/banner';
import { useNavigate } from 'react-router-dom';
import TransModal from '../components/HomePage/TransModal';

const Home = () => {

    const { isLoading, isError, error, data } = useQuery("getMentorBanner", () => getNewMentorBannerApi(), {
        refetchOnWindowFocus: false,
        refetchOnMount: false
    });
    console.log("메인페이지 배너", data);
    const newSlideDataList = data?.data.bannerData;

    const navigate = useNavigate();
    const language = localStorage.getItem("language");
    const [scrollIndex, setScrollIndex] = useRecoilState(MainPageNumber);
    const [transModalOpen, setTransModalOpen] = useState<boolean>(false);
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
        if (!language) {
            setTransModalOpen(true);
        }; 


  }, [scrollIndex]);

  return (
    <MainLayout ref={outerDivRef}>
        <FirstPageImage mainPageTextChange={mainPageTextChange}/>
        {(transModalOpen) && <TransModal transModalOpen={transModalOpen} setTransModalOpen={setTransModalOpen}/>}
    </MainLayout>
  )
};

const MainLayout = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    /* position: relative; */
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