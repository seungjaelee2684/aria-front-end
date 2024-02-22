import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import './CopyAlertModal.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CopyAlert } from '../../../store/CopyAlert';
import { translate } from '../../../store/Translation';
import { copyAlertContent } from '../../../languages/CopyAlertTrans';
import { LuCheckCircle } from "react-icons/lu";

const CopyAlertModal = () => {

    const language = localStorage.getItem("language");
    const [copyHandler, setCopyHandler] = useRecoilState(CopyAlert);
    const alertRef = useRef<HTMLDivElement>(null);

    const copyTextChange = (Num : number) => {
        switch (language) {
            case "japanese" :
                return copyAlertContent[Num]?.japanesetext;
            case "korean" :
                return copyAlertContent[Num]?.text;
            default :
                return copyAlertContent[Num]?.englishtext;
        };
    };

    useEffect(() => {
        setTimeout(() => {
            if (alertRef.current) {
                alertRef.current.style.transition = "all 0.3s ease-out";
                alertRef.current.style.transform = "translateY(-10px)";
                alertRef.current.style.opacity = "0";
            };
        }, 2500);
        setTimeout(() => {
            setCopyHandler(false);
        }, 2800);
    }, [])

  return (
    <BackgroundContainer>
        <AlertContainer ref={alertRef} className='CopyAlertContainer'>
            <LuCheckCircle style={{color: "#b0d98f"}}/>
            {copyTextChange(0)}
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

    @media screen and (max-width: 500px) {
        top: 60px;
    }
`;

const AlertContainer = styled.div`
    width: 380px;
    height: 30px;
    border-radius: 10px;
    background-color: #514d4dd6;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FCFCFC;
    transition: all 0.3s;

    @media screen and (max-width: 500px) {
        width: 280px;
        font-size: 12px;
    }
`;

export default CopyAlertModal;