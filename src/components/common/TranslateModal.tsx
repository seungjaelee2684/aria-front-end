import React from 'react'
import styled from 'styled-components';

interface TranslateModalProps {
    setLanguageModal: React.Dispatch<React.SetStateAction<boolean>>;
    setLanguageTrans: React.Dispatch<React.SetStateAction<string>>;
}

const TranslateModal : React.FC<TranslateModalProps> = ({ setLanguageModal, setLanguageTrans }) => {
  return (
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
  )
};

const ModalContainer = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    background-color: #222020;
    position: absolute;
    top: 25px;
    left: 0;
`;

const ModalLineContainer = styled.div`
    width: 100%;
    height: 30px;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: #FCFCFC;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    cursor: pointer;

    &:hover {
        color: #ff4444;
        transform: translateY(-1px);
    }

    @media screen and (max-width: 1320px) {
        font-size: 12px;
    }
`;

export default TranslateModal;