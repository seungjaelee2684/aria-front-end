import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Image from '../assets/images/mainimage.jpg';
import MainBackground from '../assets/images/mainimage2.jpg';
import MainBG from '../assets/images/maingif.gif';
import MainImage from '../components/HomePage/MainImage/MainImage';

const Home = () => {

  return (
    <MainLayout>
        <MainImageContainer>
            {/* <ImageWrapper> */}
                {/* <GradientContainer /> */}
                <Images src={MainBG}/>
                {/* <VideoFile>
                    <source type='video/mp4' />
                </VideoFile> */}
            {/* </ImageWrapper> */}
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
    height: 2900px;
    /* overflow-x: hidden; */
    /* margin-top: 80px; */
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

const GradientContainer = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #00000040, transparent);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
`;

const VideoFile = styled.video`
    width: 400px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
`;

const Images = styled.div<{ src : string }>`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    position: absolute;
    /* position: fixed; */
    top: 0;
    left: 0;
`;

const MainImageWrapper = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100vh;
`;

export default Home;