import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import logo from '../../assets/logos/logosimple.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { translate } from '../../store/Translation';
import { nationFlag, nationKind } from '../../store/NationFilter';
import ScrollBar from './ScrollBar';
import SNSMenu from './SNSMenu/SNSMenu';
import ListIcon from '../../assets/icons/list.png';
import '../../style/font/font.css';
import Translate from '../../assets/icons/translateicon.png';
import TranslateModal from './TranslateModal';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { BsGlobe2 } from 'react-icons/bs';
import NavButton from './NavButton';
import MobileNavBtn from './MobileNavBtn';
import { IoShareSocialOutline } from 'react-icons/io5';
import { MainPageNumber } from '../../store/MainPageNumber';

const Header = () => {

    // const language = useRecoilValue(translate);
    const language = localStorage.getItem("language");
    const mainPage = useRecoilValue(MainPageNumber);
    const resetFilter = useResetRecoilState(nationKind);
    const resetFlag = useResetRecoilState(nationFlag);

    const navigate = useNavigate();
    const location = useLocation();
    const modalRef = useRef<HTMLDivElement>(null);
    const snsModalRef = useRef<HTMLDivElement>(null);
    const [snsOpen, setSnsOpen] = useState<boolean>(false);
    const [languageModal, setLanguageModal] = useState<boolean>(false);

    const languageChange = () => {
        switch (language) {
            case "english" :
                return "ENG";
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
        const handleClickOutside = (event: any) => {
          if (modalRef.current && !modalRef.current.contains(event.target)) {
            setLanguageModal(false);
          };
          if (snsModalRef.current && !snsModalRef.current.contains(event.target)) {
            setSnsOpen(false);
          };
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // useEffect(() => {
    //     if (hoverRef.current) {
    //         if (hoverEvent) {
    //             hoverRef.current.style.transition = "all 0.2s ease-in-out"
    //             hoverRef.current.style.opacity = "1"
    //         } else {
    //             hoverRef.current.style.transition = "all 0.2s ease-in-out"
    //             hoverRef.current.style.opacity = "0.4"
    //         };
            
    //     };
    // }, [hoverEvent]);

    // console.log("렌더링 발생");

  return (
    <div>
        {/* {(location.pathname === "/") && <HeaderHiddenContainer ref={hoverRef} />} */}
        <HeaderLayoutContainer
            style={{
                // position: `${(location.pathname === "/") ? "relative" : "fixed"}`,
                opacity: `${(mainPage === 2) ? "0" : "1"}`,
                height: `${(mainPage === 2) ? "0px" : ""}`
            }}
            // onMouseOver={() => setHoverEvent(true)}
            // onMouseOut={() => setHoverEvent(false)}
        >
            <HeaderOutWrapper>
                <LogoContainer>
                        <HeaderLogo
                            src={logo}
                            alt=""
                            onClick={() => {
                                navigate("/");
                                resetFilter();
                                resetFlag();
                            }}/>
                    </LogoContainer>
                {/* <RightWrapper> */}
                <NavButtonContainer>
                    <NavButton />
                </NavButtonContainer>
                {/* {(location.pathname !== ("/")) && <BarContainer />} */}
                <TranslateContainer>
                        <TranslateWrapper ref={modalRef} onClick={() => setLanguageModal(!languageModal)}>
                            <BsGlobe2 />
                            {/* <TranslateText>{languageChange()}</TranslateText> */}
                            {/* {languageModal ? <MdArrowDropUp /> : <MdArrowDropDown />} */}
                            <TransText>
                                {languageChange()}
                            </TransText>
                        </TranslateWrapper>
                        {languageModal
                            && <TranslateModal
                                setLanguageModal={setLanguageModal}/>}
                        <div style={{display: `${(location.pathname === "/") ? "none" : ""}`}}>
                            <SNSModalContainer ref={snsModalRef} onClick={() => setSnsOpen(!snsOpen)}>
                                <IoShareSocialOutline />
                            </SNSModalContainer>
                        </div>
                    </TranslateContainer>
                {/* </RightWrapper> */}
                
            </HeaderOutWrapper>
        </HeaderLayoutContainer>
        {snsOpen && <SNSMenu />}
        {/* <ScrollBarContainer> */}
            {/* <ScrollBar /> */}
        {/* </ScrollBarContainer> */}
        <MobileNavButton>
            <MobileNavBtn navigate={navigate}/>
        </MobileNavButton>
    </div>
  )
};

const HeaderHiddenContainer = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: #FFFFFF;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

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
        background-color: #FFFFFF;
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
    height: 100%;
    object-fit: contain;
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

const TranslateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border: 1px solid #ADADAD;
    border-radius: 100%;
    color: #ADADAD;
    background-color: #FFFFFF;
    font-size: 24px;
    gap: 2px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
       color: #222020;
       border: 1px solid #222020;
    }

    @media screen and (max-width: 500px) {
        width: auto;
        height: 100%;
        border: none;
        flex-direction: row;
        gap: 5px;
        color: #222020;
        font-size: 20px;

        &:hover {
            border: none;
        }
    }
`;

const TranslateText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    color: #222020;
    font-weight: 600;

    @media screen and (max-width: 1320px) {
        font-size: 14px;
    }
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    /* gap: 25px; */
    height: 100%;
`;

const ScrollBarContainer = styled.div`
    width: 100%;
    
    @media screen and (max-width: 958px) {
        position: absolute;
        top: 75px;
        left: 0;
    }
`;

const BarContainer = styled.div`
    width: 3px;
    height: 40px;
    background-color: #3c3ad690;
    border-radius: 10px;
    margin-left: 70px;
`;

const TranslateContainer = styled.div`
    /* min-width: 3%;
    height: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 10px;
`;

const SNSModalContainer = styled.div`
    width: 44px;
    height: 44px;
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid #41bff180;
    border-radius: 100%;
    color: #41bff180;
    font-size: 28px;
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 100;
    cursor: pointer;

    &:hover {
        color: #41bff1;
        border: 1px solid #41bff1;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const SNSModalListIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0.3;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    @media screen and (max-width: 1320px) {
        width: 22px;
        height: 22px;
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
    font-size: 8px;
    font-weight: 700;
    line-height: normal;
    width: 25px;
    height: 8px;
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

export default Header;