import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Image from '../assets/images/mainimage.jpg';
import MainBackground from '../assets/images/mainimage2.jpg';
import MainImage from '../components/HomePage/MainImage/MainImage';

const Home = () => {

    // const imageRef = useRef<HTMLDivElement>(null);
    // const [slideCurrent, setSlideCurrent] = useState<number>(0);
    // const slideWidth : number = 1920;
    // const transX : number = slideWidth * slideCurrent;

    // useEffect(() => {
    //     if (imageRef.current) {
    //         imageRef.current.style.transition = "all 0.5s ease-in-out";
    //         imageRef.current.style.transform = `translateX(-${transX}px)`;
    //     };
    // }, [slideCurrent]);

    // const prevButton = () => {
    //     if (slideCurrent === 0) {
    //         return;
    //     } else {
    //         setSlideCurrent(slideCurrent - 1);
    //     };
    // };

    // const nextButton = () => {
    //     if (slideCurrent === 1) {
    //         return;
    //     } else {
    //         setSlideCurrent(slideCurrent + 1);
    //     };
    // };

  return (
    <MainLayout>
        <MainImageContainer>
            <ImageWrapper>
                <Images src={MainBackground}/>
            </ImageWrapper>
        </MainImageContainer>
        <MainImageWrapper>
            {/* <MainImage /> */}
        </MainImageWrapper>
    </MainLayout>
  )
};

const MainLayout = styled.div`
    width: 100%;
    padding: 0px 0px;
    overflow: hidden;
    position: relative;
    display: grid;
    justify-content: center;
    z-index: 97;
`;

const MainImageContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`;

const Images = styled.div<{ src : string }>`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

const MainImageWrapper = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100vh;
`;

export default Home;