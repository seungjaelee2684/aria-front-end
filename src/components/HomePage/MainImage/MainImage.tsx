import React from 'react'
import './MainImage.css';
import styled from 'styled-components';
import Character from '../../../assets/images/maincharacter.png';
import Cloud1 from '../../../assets/images/cloud1.png';
import Cloud2 from '../../../assets/images/cloud2.png';
import Cloud3 from '../../../assets/images/cloud3.png';
import Logo from '../../../assets/logos/logo.png';
import MainLogo from '../../../assets/logos/mainlogo.png';
import { useNavigate } from 'react-router-dom';

const MainImage = () => {

    const navigate = useNavigate();

  return (
    <MainImageWrapper className='MainImageWrapper'>
        {/* <MainImage /> */}
        <LogoImage src={MainLogo}/>
    </MainImageWrapper>
  )
};

const ImageLayout = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const CharacterImage = styled.img`
    width: 747px;
    height: 900px;
    object-fit: contain;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 80;
`;

const CloudsImage = styled.img`
    width: 800px;
    height: 350px;
    object-fit: contain;
    position: absolute;
    bottom: 100px;
    left: 0;
    z-index: 70;
    opacity: 0;
`;

const LogoContainer = styled.div`
    display: grid;
    position: absolute;
    top: 100px;
    left: 100px;
    z-index: 101;
`;

// const LogoImage = styled.img`
//     width: 600px;
//     height: 370px;
//     object-fit: cover;
//     opacity: 0;
// `;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 0px 60px;
    gap: 5px;
    opacity: 0;
`;

const PageMoveButton = styled.div`
    width: 100px;
    height: 50px;
    font-family: "Pretendard";
    font-size: 24px;
    font-weight: 700;
    border-radius: 5px;
    border: 2px solid #222020;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FCFCFC;
    background-color: #283269;
    cursor: pointer;

    &:hover {
        background-color: #3d4886;
        font-size: 23.6px;
    }
`;

const MainImageWrapper = styled.div`
    position: absolute;
    z-index: 100;
    top: 14%;
    left: 42%;
    opacity: 0;
`;

const LogoImage = styled.img`
    width: 320px;
    height: 190px;
    object-fit: cover;
`;

export default MainImage;