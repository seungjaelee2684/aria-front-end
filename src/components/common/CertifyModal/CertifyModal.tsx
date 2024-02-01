import React, { useState } from 'react'
import './CertifyModal.css';
import styled from 'styled-components';

interface CertifyModalProps {
    setting: boolean;
    setSetting: React.Dispatch<React.SetStateAction<boolean>>;
};

const CertifyModal : React.FC<CertifyModalProps> = ({ setting, setSetting }) => {
  
    const [certifyKey, setCertifyKey] = useState<{ password: string }>({
        password: ""
    });

    const onChangePasswordHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    };
  
    return (
    <BackgroundContainer onClick={() => setSetting(false)}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
            <TopLaneContainer>
                KEY 인증
            </TopLaneContainer>
            <ContentContainer>
                <InputBar>
                </InputBar>
            </ContentContainer> 
        </ModalContainer>
    </BackgroundContainer>
  )
};

const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00000080;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 105;
`;

const ModalContainer = styled.div`
    width: 500px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #FFFFFF;
    overflow: hidden;
    position: relative;
    font-family: "Pretendard";
    line-height: normal;
    color: #FFFFFF;
`;

const TopLaneContainer = styled.div`
    width: 100%;
    min-height: 70px;
    background-color: #5C9DFF;
    display: flex;
    align-items: center;
    text-indent: 30px;
    font-size: 20px;
    font-weight: 600;
`;

const ContentContainer = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputBar = styled.input`
    width: 408px;
    height: 50px;
    background-color: #FCFCFC;
    border: 1px solid #ADADAD;
    padding: 0px 16px;
    border-radius: 3px;
    outline: none;

    &:focus {
        border: 1px solid #5C9DFF;
    }
`;

export default CertifyModal;