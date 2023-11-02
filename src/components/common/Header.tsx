import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import logo from '../../assets/logos/logosimple.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { translate } from '../../store/Translation';
import { nationFlag, nationKind } from '../../store/NationFilter';
import ScrollBar from './ScrollBar';
import SNSMenu from './SNSMenu';
import ListIcon from '../../assets/icons/list.png';
import '../../style/font/font.css';
import Translate from '../../assets/icons/translateicon.png';
import TranslateModal from './TranslateModal';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { GiEarthAmerica } from 'react-icons/gi';
import NavButton from './NavButton';
import MobileNavBtn from './MobileNavBtn';

const Header = () => {

    const language = useRecoilValue(translate);
    const resetFilter = useResetRecoilState(nationKind);
    const resetFlag = useResetRecoilState(nationFlag);
    const [languageTrans, setLanguageTrans] = useRecoilState(translate);
    

    const navigate = useNavigate();
    const location = useLocation();
    const hoverRef = useRef<HTMLDivElement>(null);
    const [hoverEvent, setHoverEvent] = useState<boolean>(false);
    const [languageModal, setLanguageModal] = useState<boolean>(false);

    const languageChange = () => {
        switch (language) {
            case "english" :
                return "ENG";
            case "japanese" :
                return "日本語";
            default :
                return "한국어";
        };
    };

    useEffect(() => {
        if (hoverRef.current) {
            if (hoverEvent) {
                hoverRef.current.style.transition = "all 0.2s ease-in-out"
                hoverRef.current.style.opacity = "1"
            } else {
                hoverRef.current.style.transition = "all 0.2s ease-in-out"
                hoverRef.current.style.opacity = "0.4"
            };
            
        };
    }, [hoverEvent]);

  return (
    <div>
        {(location.pathname !== "/") && <HeaderHiddenContainer ref={hoverRef} />}
        <HeaderLayoutContainer
            onMouseOver={() => setHoverEvent(true)}
            onMouseOut={() => setHoverEvent(false)}
        >
            <HeaderOutWrapper
                style={{justifyContent: `${(location.pathname !== "/") ? "" : "center"}`}}>
                {(location.pathname !== "/")
                    && <LogoContainer>
                        <HeaderLogo
                            src={logo}
                            alt=""
                            onClick={() => {
                                navigate("/");
                                resetFilter();
                                resetFlag();
                            }}/>
                    </LogoContainer>}
                {/* <RightWrapper> */}
                <NavButtonContainer>
                    <NavButton />
                </NavButtonContainer>
                {/* {(location.pathname !== ("/")) && <BarContainer />} */}
                {(location.pathname !== ("/"))
                    && <TranslateContainer>
                        <TranslateWrapper onClick={() => setLanguageModal(!languageModal)}>
                            <GiEarthAmerica />
                            <TranslateText>{languageChange()}</TranslateText>
                            {languageModal ? <MdArrowDropUp /> : <MdArrowDropDown />}
                        </TranslateWrapper>
                        {languageModal
                            && <TranslateModal
                                setLanguageModal={setLanguageModal}
                                setLanguageTrans={setLanguageTrans}/>}
                    </TranslateContainer>}
                {/* </RightWrapper> */}
            </HeaderOutWrapper>
        </HeaderLayoutContainer>
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
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;

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
    align-items: center;
    gap: 2px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
       opacity: 0.8;
    }
`;

const TranslateText = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    color: #222020;
    font-weight: 600;

    @media screen and (max-width: 1320px) {
        font-size: 12px;
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
`;

const SNSModalContainer = styled.div`
    width: 36px;
    min-width: 36px;
    height: 36px;
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: #FCFCFC;
    border: 1.5px solid #4a556830;
    border-radius: 100%;
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 100;
    cursor: pointer;

    &:hover {
        border: 1.5px solid #4a5568;
    }

    @media screen and (max-width: 1320px) {
        width: 32px;
        height: 32px;
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

export default Header;