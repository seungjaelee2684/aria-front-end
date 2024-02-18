import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';

interface TranslateModalProps {
    setLanguageModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TranslateModal : React.FC<TranslateModalProps> = ({ setLanguageModal }) => {

  return (
    <div>
        <ModalBackgroundContainer onClick={() => setLanguageModal(false)} />
        <ModalContainer>
            <ModalLineContainer
                onClick={() => {
                    setLanguageModal(false);
                    localStorage.setItem("language", "english");
                    window.location.reload();
                }}>
                English
            </ModalLineContainer>
            <ModalLineContainer
                onClick={() => {
                    setLanguageModal(false);
                    localStorage.setItem("language", "japanese");
                    window.location.reload();
                }}>
                日本語
            </ModalLineContainer>
            <ModalLineContainer
                onClick={() => {
                    setLanguageModal(false);
                    localStorage.setItem("language", "korean");
                    window.location.reload();
                }}>
                한국어
            </ModalLineContainer>
        </ModalContainer>
    </div>
  )
};

const ModalBackgroundContainer = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 102;
        background-color: #00000080;
        backdrop-filter: blur(5px);
        display: block;
    }
`;

const ModalLayoutContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const ModalContainer = styled.div`
    width: 120px;
    display: flex;
    flex-direction: column;
    background-color: #222020ea;
    position: absolute;
    top: 26px;
    right: -5px;
    z-index: 102;

    @media screen and (max-width: 500px) {
        position: fixed;
        top: 30%;
        left: 25%;
        width: 50%;
        border-radius: 5px;
        background-color: #222020d5;
    }
`;

const ModalLineContainer = styled.div`
    width: 100px;
    height: 30px;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: #FCFCFC;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px 0px 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #ff4444;
        transform: translateY(-1px);
    }

    @media screen and (max-width: 1320px) {
        font-size: 12px;
    }

    @media screen and (max-width: 500px) {
        font-size: 18px;
        height: 40px;
        margin: 10px auto;
    }
`;

const TransLineContainer = styled.div`
    width: 100%;
    height: 30px;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: #FCFCFC;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px 0px 0px;
    border-bottom: 1px solid;

    @media screen and (max-width: 1320px) {
        font-size: 12px;
    }
`;

export default TranslateModal;