import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import Image from '../assets/images/mainimage.jpg';
import Image2 from '../assets/images/testImage.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
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
                <Images src={Image2}/>
            </ImageWrapper>
        </MainImageContainer>
        <ButtonWrapper>
        <button onClick={() => navigate('/mentor')}>Mentor</button>
        <button onClick={() => navigate('/notice')}>Notice</button>
        </ButtonWrapper>
    </MainLayout>
  )
};

const MainLayout = styled.div`
    width: 100%;
    height: 2000px;
    padding: 0px 0px;
    overflow: hidden;
    position: relative;
    display: grid;
    justify-content: center;
    z-index: 100;
`;

const MainImageContainer = styled.div`
    width: 1920px;
    height: 980px;
    overflow-x: hidden;
`;

const ImageWrapper = styled.div`
    width: 3840px;
    height: 100%;
    display: flex;
    align-items: center;
`;

const Images = styled.div<{ src : string }>`
    width: 1920px;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-size: 1920px 100%;
    background-position: center center;
    background-repeat: no-repeat;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
`;

export default Home;