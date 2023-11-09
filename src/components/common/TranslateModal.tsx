import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';

interface TranslateModalProps {
    setLanguageModal: React.Dispatch<React.SetStateAction<boolean>>;
    setLanguageTrans: React.Dispatch<React.SetStateAction<string>>;
}

const TranslateModal : React.FC<TranslateModalProps> = ({ setLanguageModal, setLanguageTrans }) => {

    const language = useRecoilValue(translate);

  return (
    <div>
        <ModalBackgroundContainer />
        <ModalContainer>
            <ModalLineContainer
                onClick={() => {
                    setLanguageTrans("english");
                    setLanguageModal(false);
                }}>
                English
            </ModalLineContainer>
            <ModalLineContainer
                onClick={() => {
                    setLanguageTrans("chinese");
                    setLanguageModal(false);
                }}>
                中文
            </ModalLineContainer>
            <ModalLineContainer
                onClick={() => {
                    setLanguageTrans("japanese");
                    setLanguageModal(false);
                }}>
                日本語
            </ModalLineContainer>
            <ModalLineContainer
                onClick={() => {
                    setLanguageTrans("korean");
                    setLanguageModal(false);
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
        background-color: #00000080;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 97;
        display: block;
    }
`;

const ModalContainer = styled.div`
    width: 120px;
    display: flex;
    flex-direction: column;
    background-color: #222020;
    position: absolute;
    top: 50px;
    left: -80px;
    z-index: 98;

    @media screen and (max-width: 500px) {
        position: fixed;
        top: 30%;
        left: 25%;
        width: 50%;
        border-radius: 10px;
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
        height: 50px;
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