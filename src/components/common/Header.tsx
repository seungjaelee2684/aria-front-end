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
import { isLogin } from '../../store/IsLogin';
import PayPal from '../../assets/images/image_readtop_2022_25539_16417734514912228.jpg';
import { FaCcPaypal } from "react-icons/fa6";
import HeaderNotice from './HeaderNotice';

const Header = () => {

    const language = localStorage.getItem("language");
    const accessToken = localStorage.getItem("Authorization");

    const mainScrollIndex = useRecoilValue(MainPageNumber);
    const copyHandle = useRecoilValue(CopyAlert);
    const [loginState, setLoginState] = useRecoilState(isLogin);
    const scrollHeader = useRef<HTMLDivElement>(null);
    const mainScrollHeader = useRef<HTMLDivElement>(null);
    const [scrollData, setScrollData] = useState<number>(0);
    const navigate = useNavigate();
    const location = useLocation();
    const modalRef = useRef<HTMLDivElement>(null);
    const [languageModal, setLanguageModal] = useState<boolean>(false);

    const languageChange = () => {
        switch (language) {
            case "japanese":
                return "日本語";
            case "korean":
                return "한국어";
            default:
                return "ENG";
        };
    };

    useEffect(() => {
        setLoginState(!!accessToken);

        if (mainScrollHeader.current) {
            mainScrollHeader.current.style.opacity = "1";
            mainScrollHeader.current.style.transition = "opacity 0.4s ease-in-out 2s";
            mainScrollHeader.current.style.transform = "translateY(0px)";
        };

        const handleClickOutside = (event: any) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
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
            <HeaderBox
                ref={(location.pathname === "/") ? mainScrollHeader : scrollHeader}
                style={{ opacity: `${(location.pathname === "/") ? "0" : "1"}` }}>
                <HeaderLayoutContainer>
                    <HeaderOutWrapper>
                        <LogoContainer>
                            <HeaderLogo
                                src={logo}
                                alt=""
                                onClick={() => navigate("/")} />
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
                                            setLanguageModal={setLanguageModal} />}
                                </TranslateContainer>
                                <BarContainer />
                                <PaypalWrapper onClick={() => window.open("https://www.paypal.com/kr/webapps/mpp/home")}>
                            <Paypal color="#013088">
                                PAY
                            </Paypal>
                            <Paypal color="#019cde">
                                PAL
                            </Paypal>
                        </PaypalWrapper>
                            </SmallButtonWrapper>
                            <UnderLaneContainer>
                                <NavButtonContainer>
                                    <NavButton />
                                </NavButtonContainer>
                                <SNSMenu />
                            </UnderLaneContainer>
                            {/* </RightWrapper> */}
                        </HeaderRightWrapper>
                    </HeaderOutWrapper>
                </HeaderLayoutContainer>
                <HeaderNotice />
            </HeaderBox>
            {copyHandle && <CopyAlertModal />}
            <MobileNavButton>
                <MobileNavBtn navigate={navigate} />
            </MobileNavButton>
        </div>
    )
};

const HeaderBox = styled.header`
    width: 100%;
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

const HeaderLayoutContainer = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #e9e9e9;     
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

export const TranslateWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    color: #272525;
    font-size: 14px;
    gap: 4px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      /* color: #222020; */
    }

    @media screen and (max-width: 500px) {
        width: auto;
        height: 100%;
        border: none;
        flex-direction: row;
       /* color: #222020; */
        gap: 3px;
        font-size: 14px;
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
       /* color: #222020; */
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

const PaypalWrapper = styled.div`
    width: 50px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ADADAD;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: #e3ecee;
    }
`;

const Paypal = styled.div<{ color : string }>`
    font-family: "ZingRustDemo";
    font-size: 12px;
    font-weight: 300;
    line-height: 100%;
    color: ${(props) => props.color};
`;

export default Header;