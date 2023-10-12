import React from 'react'
import './MainImage.css';
import styled from 'styled-components';
import Character from '../../../assets/images/maincharacter.png';
import Cloud1 from '../../../assets/images/cloud1.png';
import Cloud2 from '../../../assets/images/cloud2.png';
import Cloud3 from '../../../assets/images/cloud3.png';
import Logo from '../../../assets/logos/logo.png';
import { useNavigate } from 'react-router-dom';

const MainImage = () => {

    const navigate = useNavigate();

  return (
    <ImageLayout>
        <CharacterImage className='CharacterImage' src={Character}/>
        <CloudsImage className='CloudsImage1' src={Cloud3}/>
        <CloudsImage
            className='CloudsImage2'
            src={Cloud2}
            style={{bottom: "250px", left: "600px"}}/>
        <CloudsImage
            className='CloudsImage3'
            src={Cloud1}
            style={{bottom: "700px", left: "700px"}}/>
        <LogoContainer>
            <LogoImage
                className='LogoImage'
                src={Logo}/>
            <ButtonWrapper className='PageMoveButton'>
                <PageMoveButton onClick={() => navigate('/mentor')}>
                    Mentor
                </PageMoveButton>
                <PageMoveButton onClick={() => navigate('/notice')}>
                    Notice
                </PageMoveButton>
            </ButtonWrapper>
        </LogoContainer>
    </ImageLayout>
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
    top: 0;
    left: 100px;
    z-index: 101;
`;

const LogoImage = styled.img`
    width: 600px;
    height: 500px;
    object-fit: cover;
    opacity: 0;
`;

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

export default MainImage;