import React from 'react'
import styled from 'styled-components';
import './CopyAlertModal.css';
import { useRecoilState } from 'recoil';
import { CopyAlert } from '../../../store/CopyAlert';

const CopyAlertModal = () => {

    const [copyHandler, setCopyHandler] = useRecoilState(CopyAlert);

  return (
    <BackgroundContainer onClick={() => setCopyHandler(false)}>
        <AlertContainer>
            CopyAlertModal
        </AlertContainer>
    </BackgroundContainer>
  )
};

const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 80px;
    left: 0;
    display: flex;
    justify-content: center;
`;

const AlertContainer = styled.div`
    width: 600px;
    height: 40px;
    border-radius: 10px;
    background-color: #22202090;
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default CopyAlertModal;