import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import './CopyAlertModal.css';
import { useRecoilState } from 'recoil';
import { CopyAlert } from '../../../store/CopyAlert';

const CopyAlertModal = () => {

    const [copyHandler, setCopyHandler] = useRecoilState(CopyAlert);
    const alertRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            if (alertRef.current) {
                alertRef.current.style.opacity = "0";
                alertRef.current.style.transform = "translateY(-20px)";
            };
        }, 3000);
        setTimeout(() => {
            setCopyHandler(false);
        }, 3300);
    }, [])

  return (
    <BackgroundContainer>
        <AlertContainer ref={alertRef} className='CopyAlertContainer'>
            클립보드에 링크가 복사되었습니다.
        </AlertContainer>
    </BackgroundContainer>
  )
};

const BackgroundContainer = styled.div`
    width: 100%;
    position: fixed;
    top: 80px;
    left: 0;
    display: flex;
    justify-content: center;
    z-index: 100;
`;

const AlertContainer = styled.div`
    width: 350px;
    height: 30px;
    border-radius: 10px;
    background-color: #22202090;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FCFCFC;
    transition: all 0.3s;
`;

export default CopyAlertModal;