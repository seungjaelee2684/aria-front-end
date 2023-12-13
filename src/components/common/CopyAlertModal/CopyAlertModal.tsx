import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import './CopyAlertModal.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CopyAlert } from '../../../store/CopyAlert';
import { translate } from '../../../store/Translation';
import { copyAlertContent } from '../../../languages/CopyAlertTrans';

const CopyAlertModal = () => {

    const language = useRecoilValue(translate);
    const [copyHandler, setCopyHandler] = useRecoilState(CopyAlert);
    const alertRef = useRef<HTMLDivElement>(null);

    const copyTextChange = (Num : number) => {
        switch (language) {
            case "chinese" :
                return copyAlertContent[Num]?.chinesetext;
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
`;

const AlertContainer = styled.div`
    width: 350px;
    height: 30px;
    border-radius: 10px;
    background-color: #514d4deb;
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