import React, { useEffect, useRef, useState } from 'react'
import '../HomePage/MainImage/MainImage.css';
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
import { BsGlobe2 } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineArrowBack } from "react-icons/md";

const Header = () => {

    const language = localStorage.getItem("language");
    
    const mainScrollIndex = useRecoilValue(MainPageNumber);
    const copyHandle = useRecoilValue(CopyAlert);
    const [isPopUp, setIsPopUp]= useRecoilState(popUpOpen);
    const scrollHeader = useRef<HTMLDivElement>(null);
    const mainScrollHeader = useRef<HTMLDivElement>(null);
    const [scrollData, setScrollData] = useState<number>(0);

    const navigate = useNavigate();
    const location = useLocation();
    const modalRef = useRef<HTMLDivElement>(null);
    const mobileModalRef = useRef<HTMLDivElement>(null);
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

    const mobilePage = () => {
        if (location.pathname.includes("/mentor")) {
            return (
                <MobileHeaderPageContainer>
                    Mentor
                </MobileHeaderPageContainer>
            );
        } else if (location.pathname.includes("/showcase")) {
            return (
                <MobileHeaderPageContainer>
                    Showcase
                </MobileHeaderPageContainer>
            )
        } else if (location.pathname.includes("/notice")) {
            return (
                <MobileHeaderPageContainer>
                    Notice
                </MobileHeaderPageContainer>
            )
        } else if (location.pathname.includes("/support")) {
            return (
                <MobileHeaderPageContainer>
                    Support
                </MobileHeaderPageContainer>
            )
        } else if (location.pathname === "/") {
            return (
                <MobileHeaderPageContainer>
                    Home
                </MobileHeaderPageContainer>
            )
        };
    };

    useEffect(() => {
        if (mainScrollHeader.current) {
            mainScrollHeader.current.style.opacity = "1";
            mainScrollHeader.current.style.transition = "opacity 0.4s ease-in-out 2s";
            mainScrollHeader.current.style.transform = "translateY(0px)";
        };

        const handleClickOutside = (event: any) => {
            if (modalRef.current
                    && !modalRef.current.contains(event.target)
                    && mobileModalRef.current
                    && !mobileModalRef.current.contains(event.target)) {
              setLanguageModal(false);
            }
          };
          document.addEventListener("click", handleClickOutside);

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
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [scrollData, mainScrollIndex, location.pathname]);

  return (
    <div>
        <HeaderLayoutContainer
            style={{opacity: `${(location.pathname === "/") ? "0" : "1"}`}}
            ref={(location.pathname === "/") ? mainScrollHeader : scrollHeader}>
            <HeaderOutWrapper>
                <LogoContainer>
                    <HeaderLogo
                        src={logo}
                        alt=""
                        onClick={() => navigate("/")}/>
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
                        <TranslateContainer ref={modalRef}>
                            <TranslateWrapper onClick={() => setLanguageModal(!languageModal)}>
                                <BsGlobe2 />
                                <TransText>
                                    {languageChange()}
                                </TransText>
                                <TiArrowSortedDown />
                            </TranslateWrapper>
                            {languageModal
                                && <TranslateModal
                                setLanguageModal={setLanguageModal}/>}
                            <MobileTranslateContainer>
                                {languageModal
                                    && <TranslateModal
                                    setLanguageModal={setLanguageModal}/>}
                            </MobileTranslateContainer>
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
        <MobileHeaderContainer>
            <HeaderOutWrapper>
                <PrevButton onClick={() => window.history.back()}>
                    <MdOutlineArrowBack />
                </PrevButton>
                {mobilePage()}
                <TranslateContainer ref={mobileModalRef} style={{position: "static"}}>
                    <TranslateWrapper onClick={() => setLanguageModal(!languageModal)}>
                        <BsGlobe2 />
                        <TiArrowSortedDown />
                    </TranslateWrapper>
                    {languageModal
                        && <TranslateModal
                        setLanguageModal={setLanguageModal}/>}
                </TranslateContainer>
            </HeaderOutWrapper>
        </MobileHeaderContainer>
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
    background-color: #FFFFFF;
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
    transition: all 0.4s ease-in-out;

    @media screen and (max-width: 500px) {
        display: none;
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
        /* height: 40px; */
        display: none;
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

    @media screen and (max-width: 500px) {
        width: 8%;
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
    color: #272525;
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
        color: #222020;
        gap: 2px;
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
    color: #272525;
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

export const TranslateContainer = styled.div`
    position: relative;
`;

const MobileTranslateContainer = styled(TranslateContainer)`
    display: none;

    @media screen and (max-width: 500px) {
        display: block;
    }
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
        /* width: auto;
        height: auto;
        font-weight: 600;
        font-size: 14px; */
        display: none;
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

const PrevButton = styled.div`
    font-size: 22px;
`;

const MobileHeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    transition: all 0.4s ease-in-out;
    display: none;

    @media screen and (max-width: 500px) {
        display: block;
    }
`;

const MobileHeaderPageContainer = styled.div`
    font-family: "LINESeedKR-Bd";
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    color: #222020;
`;

export default Header;