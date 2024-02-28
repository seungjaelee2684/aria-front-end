import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { IoCloseOutline } from "react-icons/io5";
import { RiEnglishInput } from "react-icons/ri";
import { GiEarthAmerica } from "react-icons/gi";
import { GiJapan } from "react-icons/gi";
import { GiSouthKorea } from "react-icons/gi";

interface TransModalProps {
    transModalOpen: boolean;
    setTransModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TransModal : React.FC<TransModalProps> = ({ transModalOpen, setTransModalOpen }) => {
  return (
    <ModalBackground>
        <ModalContainer className='main_modal_container'>
            <TitleLaneContainer>
                Selection Language
                <Icon
                    onClick={() => {
                        localStorage.setItem("language", "english");
                        setTransModalOpen(false);
                    }}>
                    <IoCloseOutline />
                </Icon>
            </TitleLaneContainer>
            <ButtonContainer
                style={{marginTop: "20px"}}
                onClick={() => {
                    localStorage.setItem("language", "english");
                    setTransModalOpen(false);
                }}>
                English
                <RightIcon>
                    <GiEarthAmerica />
                </RightIcon>
            </ButtonContainer>
            <ButtonContainer
                onClick={() => {
                    localStorage.setItem("language", "japanese");
                    window.location.reload();
                }}>
                日本語
                <RightIcon>
                    <GiJapan />
                </RightIcon>
            </ButtonContainer>
            <ButtonContainer
                onClick={() => {
                    localStorage.setItem("language", "korean");
                    window.location.reload();
                }}>
                한국어
                <RightIcon>
                    <GiSouthKorea />
                </RightIcon>
            </ButtonContainer>
            <Text>
                * Please choose the language you want.
            </Text>
        </ModalContainer>
    </ModalBackground>
  )
};

const ModalBackground = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000050;
    backdrop-filter: blur(3px);
    top: 0;
    left: 0;
    z-index: 115;
`;

const ModalContainer = styled.div`
    width: 300px;
    height: 380px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
    box-shadow: #00000090 0px 0px 5px 2px;
    opacity: 0;
`;

const TitleLaneContainer = styled.div`
    width: 100%;
    font-family: "Pretendard";
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    font-weight: 600;
    line-height: 100%;

`;

const Icon = styled.div`
    font-size: 26px;
    cursor: pointer;

    &:hover {
        color: #5f5f5f;
    }
`;

const RightIcon = styled.div`
    font-size: 34px;
    color: #67a8e6;
`;

const ButtonContainer = styled.div`
    width: calc(100% - 40px);
    height: 80px;
    border-radius: 15px;
    background-color: aliceblue;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 600;
    line-height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    user-select: none;
    cursor: pointer;

    &:hover {
        background-color: #8294a3;
        color: #FFFFFF;
    }

    &:hover ${RightIcon} {
        color: #FFFFFF;
    }
`;

const Text = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-align: start;
    color: #ADADAD;
`;

export default TransModal;