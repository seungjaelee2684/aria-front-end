import React from 'react'
import './MainImage/MainImage.css';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { MainPageNumber } from '../../store/MainPageNumber';
import { mainPageText } from '../../languages/HomeTrans';
import { ImageBoxWrapper } from './FirstPageImage';

interface SecondPageImageProps {
    mainPageTextChange: Function;
};

const SecondPageImage : React.FC<SecondPageImageProps> = ({ mainPageTextChange }) => {

    return (
        <ImageBoxWrapper>
            SecondPageImage
        </ImageBoxWrapper>
    )
};



const Images = styled.img`
    width: 100%;
    object-fit: cover;
    /* background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; */
    /* position: relative; */
    @media screen and (max-width: 1500px) {
        height: 100vh;
    }
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

const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    gap: 100px;
    /* background-color: #e9e9e9; */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 97;
    user-select: none;

    @media screen and (max-width: 1320px) {
        width: 80%;
        top: 0;
        left: 10%;
    }

    @media screen and (max-width: 836px) {
        width: 90%;
        top: 0;
        left: 5%;
        gap: 60px;
    }
`;

const MainTextOutWrapper = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;

    @media screen and (max-width: 1320px) {
        width: 60%;
        gap: 40px;
    }
`;

const MainTitleImage = styled.img`
    width: 240px;
    height: auto;
    object-fit: cover;
    opacity: 0;
    user-select: none;

    @media screen and (max-width: 500px) {
        width: 200px;
    }
`;

const MainSubTitle = styled.div`
    width: 100%;
    font-family: 'Jeongnimsaji-R';
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    color: #4596ff;
    opacity: 0;
    display: flex;
    justify-content: center;
    letter-spacing: 20px;
`;

const MainContent = styled.div`
    width: 70%;
    font-family: 'Jeongnimsaji-R';
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    color: #FCFCFC;
    opacity: 0;
    display: flex;
    justify-content: center;
    /* text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5); */

    @media screen and (max-width: 1320px) {
        font-size: 14px;
        width: 100%;
    }
`;

const ButtonOutContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 1320px) {
        gap: 16px;
    }

    @media screen and (max-width: 836px) {
        flex-direction: column;
    }
`;

const ButtonBoxWapper = styled.div`
    width: 400px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #e9e9e9;
    /* border-radius: 10px; */
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    opacity: 0;

    @media screen and (max-width: 1320px) {
        width: 250px;
        height: 100px;
    }

    @media screen and (max-width: 836px) {
        width: 100%;
        height: 60px;
    }
`;

const ButtonBackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ButtonGradient = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #e9e9e9, transparent);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
`;

const ButtonHoverBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #22202090;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FCFCFC;
    font-family: "IAMAPLAYER";
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    opacity: 0;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 836px) {
        font-size: 18px;
    }
`;

export default SecondPageImage;