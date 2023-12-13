import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import logo from '../../assets/logos/logosimple.webp';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { translate } from '../../store/Translation';
import SNSMenu from './SNSMenu/SNSMenu';
import '../../style/font/font.css';
import TranslateModal from './TranslateModal';
import NavButton from './NavButton';
import MobileNavBtn from './MobileNavBtn';
import { MainPageNumber } from '../../store/MainPageNumber';
import { CopyAlert } from '../../store/CopyAlert';
import CopyAlertModal from './CopyAlertModal/CopyAlertModal';
import { popUpOpen } from '../../store/PopUpOpen';
import PopUp from './PopUp';
import { IoMdHome } from "react-icons/io";
import { GoGlobe } from "react-icons/go";
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {

    const language = useRecoilValue(translate);
    const mainPage = useRecoilValue(MainPageNumber);
    const copyHandle = useRecoilValue(CopyAlert);
    const [isPopUp, setIsPopUp]= useRecoilState(popUpOpen);
    const scrollHeader = useRef<HTMLDivElement>(null);
    const [scrollData, setScrollData] = useState<number>(0);

    const navigate = useNavigate();
    const location = useLocation();
    const modalRef = useRef<HTMLDivElement>(null);
    const snsModalRef = useRef<HTMLDivElement>(null);
    const [languageModal, setLanguageModal] = useState<boolean>(false);

    const languageChange = () => {
        switch (language) {
            case "chinese" :
                return "中文";
            case "japanese" :
                return "日本語";
            case "korean" :
                return "한국어";
            default :
                return "ENG";
        };
    };

    useEffect(() => {
        const scrollHandler = () => {
            const currentScrollY = window.scrollY;
            if (scrollHeader.current) {
                if (currentScrollY > scrollData) {
                    scrollHeader.current.style.opacity = "0";
                    scrollHeader.current.style.transition = "all 0.4s ease-in-out";
                    scrollHeader.current.style.transform = "translateY(-80px)";
                } else {
                    scrollHeader.current.style.opacity = "1";
                    scrollHeader.current.style.transition = "all 0.4s ease-in-out";
                    scrollHeader.current.style.transform = "translateY(0px)";
                };
            };
            setScrollData(currentScrollY);
        };    

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [scrollData]);

  return (
    <div>
        <HeaderLayoutContainer ref={scrollHeader}>
            <HeaderOutWrapper>
                <LogoContainer>
                        <HeaderLogo
                            src={logo}
                            alt=""
                            onClick={() => {
                                navigate("/");
                            }}/>
                    </LogoContainer>
                {/* <RightWrapper> */}
                <HeaderRightWrapper>
                    <SmallButtonWrapper>
                        <HomeBtnWrapper onClick={() => navigate("/")}>
                            <IoMdHome />
                            <TransText>
                                HOME
                            </TransText>
                        </HomeBtnWrapper>
                        <BarContainer />
                        <TranslateContainer>
                            <TranslateWrapper ref={modalRef} onClick={() => setLanguageModal(!languageModal)}>
                                <GoGlobe />
                                <TransText>
                                    {languageChange()}
                                </TransText>
                                <TiArrowSortedDown />
                            </TranslateWrapper>
                            {languageModal
                                && <TranslateModal
                                    setLanguageModal={setLanguageModal}/>}
                        </TranslateContainer>
                    </SmallButtonWrapper>
                    <UnderLaneContainer>
                        <NavButtonContainer>
                            <NavButton />
                        </NavButtonContainer>
                        <SNSMenu />
                    </UnderLaneContainer>
                    {/* {(location.pathname !== ("/")) && <BarContainer />} */}
                {/* </RightWrapper> */}
                </HeaderRightWrapper>
            </HeaderOutWrapper>
        </HeaderLayoutContainer>
        {copyHandle && <CopyAlertModal />}
        {/* {isPopUp && <PopUp />} */}
        <MobileNavButton>
            <MobileNavBtn navigate={navigate}/>
        </MobileNavButton>
    </div>
  )
};

const HeaderLayoutContainer = styled.div`
    width: 100%;
    height: 80px;
    /* border-bottom: 1px solid gray; */   
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    /* opacity: 0.5; */
    background-color: #FFFFFF;
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
    transition: all 0.4s ease-in-out;

    @media screen and (max-width: 500px) {
        /* background-color: #222020; */
        height: 50px;
        border-bottom: 1px solid #e9e9e9;
    }
`;

const HeaderOutWrapper = styled.div`
    width: 1320px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    user-select: none;

    @media screen and (max-width: 1320px) {
        width: 96%;
        margin: 0px auto;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    /* margin: auto 0px; */
    align-items: center;
    height: 80px;

    @media screen and (max-width: 500px) {
        height: 40px;
    }
`;

const HeaderLogo = styled.img`
    width: 120px;
    height: auto;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        /* width: 151px;
        height: 81px; */
        opacity: 0.8;
    }

    @media screen and (max-width: 1320px) {
        width: 110px;
    }

    @media screen and (max-width: 836px) {
        width: 90px;
    }

    @media screen and (max-width: 500px) {
        width: 80px;
    }
`;

const HeaderRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* gap: 25px; */
    width: 74%;
    height: 100%;
    gap: 0px;

    @media screen and (max-width: 1320px) {
        width: 80%;
    }

    @media screen and (max-width: 836px) {
        width: 78%;
    }
`;

const SmallButtonWrapper = styled.div`
    width: 90%;
    height: 30px;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 12px;

    @media screen and (max-width: 500px) {
        width: 100%;
        height: 100%;
    }
`;

const TranslateWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    color: #6b6b6b;
    /* background-color: #FFFFFF; */
    font-size: 14px;
    gap: 4px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
       color: #222020;
    }

    @media screen and (max-width: 500px) {
        width: auto;
        height: 100%;
        border: none;
        flex-direction: row;
        gap: 5px;
        color: #222020;
        font-size: 20px;
    }
`;

const BarContainer = styled.div`
    width: 1px;
    height: 10px;
    background-color: #e9e9e9;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const HomeBtnWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    font-family: "Pretendard";
    font-size: 14px;
    gap: 2px;
    color: #6b6b6b;
    border: 1px solid #FFFFFF;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #222020;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const TranslateContainer = styled.div`
    /* min-width: 3%; */
    /* height: 100%; */
    position: relative;
`;

const NavButtonContainer = styled.div`
    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const MobileNavButton = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        display: block;
    }
`;

const TransText = styled.div`
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        width: auto;
        height: auto;
        font-weight: 600;
        font-size: 14px;
    }
`;

const UnderLaneContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1320px) {
        justify-content: center;
        gap: 10%;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export default Header;