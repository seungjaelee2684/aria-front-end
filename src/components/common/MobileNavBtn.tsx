import React, { useRef, useState } from 'react'
import '../../style/MobileSocialBtn.css';
import styled from 'styled-components';
import Home from '../../assets/logos/whitelogo.webp';
import { NavigateFunction, useLocation } from 'react-router-dom';
import NavigateBtn from '../../assets/icons/list.png';
import MobileNavModal from './MobileNavModal/MobileNavModal';
import MobileSNS from './MobileSNS/MobileSNS';
import { IoShareSocialOutline } from 'react-icons/io5';
import { GoHome } from "react-icons/go";
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { AlertModalOpen } from '../../store/AlertModalOpen';
import AlertModal from './AlertModal/AlertModal';
import { VscFeedback } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuMoreHorizontal } from "react-icons/lu";
import { MdClose } from 'react-icons/md';
import { TbMessageDots } from "react-icons/tb";
import { mobileHeaderTrans } from '../../languages/ETCTrans';
import { MdOutlineHeadsetMic } from "react-icons/md";

interface MobileNavBtnProps {
    navigate: NavigateFunction;
}

const MobileNavBtn : React.FC<MobileNavBtnProps> = ({ navigate }) => {

    const language = localStorage.getItem("language");
    const location = useLocation();
    const mobileModalRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const [hamburg, setHamburg] = useState<boolean>(false);
    const [snsModal, setSnsModal] = useState<boolean>(false);
    const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);
    const { isOpen } = alertModal;

    const onClickHamburgCloseHandler = () => {
        if (mobileModalRef.current && backgroundRef.current) {
          backgroundRef.current.style.visibility = "hidden";
          mobileModalRef.current.style.transform = "translateX(-110%)";
        };
        setHamburg(false);
    };

    const onClickHamburgOpenHandler = () => {
        if (mobileModalRef.current && backgroundRef.current) {
            if (hamburg) {
            //   mobileModalRef.current.style.opacity = "0";
                // backgroundRef.current.style.opacity = "0";
                backgroundRef.current.style.visibility = "hidden";
                mobileModalRef.current.style.transform = "translateX(-110%)";
            } else {
            //   mobileModalRef.current.style.opacity = "1";
                // backgroundRef.current.style.opacity = "1";
                backgroundRef.current.style.visibility = "visible";
                mobileModalRef.current.style.transform = "translateX(120%)";
            };
        };
        setHamburg(!hamburg);
    };

    const headerTrans = (Num : number) => {
        switch (language) {
            case "chinese" :
                return mobileHeaderTrans[Num]?.chinesetext;
            case "japanese" :
                return mobileHeaderTrans[Num]?.japanesetext;
            case "korean" :
                return mobileHeaderTrans[Num]?.text;
            default :
                return mobileHeaderTrans[Num]?.englishtext;
        };
    };

  return (
    <div style={{position: "relative"}}>
        <MobileHeader>
            <MobileHeaderInContainer>
                <HomeBtnLogoIcon src={Home} alt='' onClick={() => navigate("/")}/>
                {(hamburg)
                    ? <MenuIcon onClick={onClickHamburgCloseHandler}>
                        <MdClose />
                    </MenuIcon>
                    : <MenuIcon onClick={onClickHamburgOpenHandler}>
                        <RxHamburgerMenu />
                    </MenuIcon>}
            </MobileHeaderInContainer>
        </MobileHeader>
        <UnderHeaderContainer>
            <ButtonOutWrapper>
                <ButtonBox
                    style={{color: `${(location.pathname === "/") ? "#FFFFFF" : "#ADADAD"}`}}
                    onClick={() => navigate("/")}>
                    <ButtonWrapper>
                        <GoHome />
                    </ButtonWrapper>
                    {headerTrans(0)}
                </ButtonBox>
                <ButtonBox
                    style={{color: `${(location.pathname.includes("/mentor")) ? "#FFFFFF" : "#ADADAD"}`}}
                    onClick={() => navigate("/mentor")}>
                    <ButtonWrapper>
                        <VscFeedback />
                    </ButtonWrapper>
                    {headerTrans(1)}
                </ButtonBox>
                <ButtonBox
                    style={{color: `${(location.pathname.includes("/notice")) ? "#FFFFFF" : "#ADADAD"}`}}
                    onClick={() => navigate("/notice/notification")}>
                    <ButtonWrapper>
                        <IoNotificationsOutline />
                    </ButtonWrapper>
                    {headerTrans(2)}
                </ButtonBox>
                <ButtonBox
                    style={{color: `${(location.pathname === "/support/counseling") ? "#FFFFFF" : "#ADADAD"}`}}
                    onClick={() => navigate("/support/counseling")}>
                    <ButtonWrapper>
                        <MdOutlineHeadsetMic />
                    </ButtonWrapper>
                    {headerTrans(3)}
                </ButtonBox>
                <ButtonBox
                    className="Mobile-Social-Button"
                    onClick={() => setSnsModal(true)}>
                    <ButtonWrapper>
                        <TbMessageDots />
                    </ButtonWrapper>
                    {headerTrans(4)}
                </ButtonBox>
            </ButtonOutWrapper>
        </UnderHeaderContainer>
        {snsModal
            && <MobileSNS
                snsModal={snsModal}
                setSnsModal={setSnsModal}/>}
        <MobileNavModal
            navigate={navigate}
            hamburg={hamburg}
            setHamburg={setHamburg}
            mobileModalRef={mobileModalRef}
            backgroundRef={backgroundRef}/>
        {isOpen && <AlertModal />}
    </div>
  )
};

const MobileHeader = styled.div`
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #222020;
`;

const MobileHeaderInContainer = styled.div`
    width: 96%;
    height: 100%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HomeBtnLogoIcon = styled.img`
    width: auto;
    height: 32px;
    object-fit: cover;
`;

const MenuIcon = styled.div`
    font-size: 26px;
    color: #FFFFFF;
    height: 100%;
    display: flex;
    align-items: center;
`;

const UnderHeaderContainer = styled.div`
    width: 100%;
    height: 42px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #222020;
    user-select: none;
    z-index: 101;
    border-top: 1px solid #ADADAD;
`;

const ButtonOutWrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: 0px auto;
`;

const ButtonWrapper = styled.div`
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    gap: 2px;
    font-size: 8px;
    font-weight: 500;
    color: #FFFFFF;
`;

const HomeButtonInWrapper = styled.div`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 100%;
`;

const HomeButton = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
    font-family: "Pretendard";
    font-size: 34px;
    color: #797979;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    background: linear-gradient(to bottom, #FFFFFF, #cccccc);
`;

const HomeButtonContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: end;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export default MobileNavBtn;