import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import logo from '../../assets/logos/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { translate } from '../../store/Translation';
import { nationFlag, nationKind } from '../../store/NationFilter';
import ScrollBar from './ScrollBar';
import PageModal from './PageModal/PageModal';
import SNSMenu from './SNSMenu';
import ListIcon from '../../assets/icons/list.png';
import '../../style/font/font.css';
import Translate from '../../assets/icons/translateicon.png';

const Header = () => {

    const language = useRecoilValue(translate);
    const [languageTrans, setLanguageTrans] = useRecoilState(translate);
    const resetFilter = useResetRecoilState(nationKind);
    const resetFlag = useResetRecoilState(nationFlag);

    const navigate = useNavigate();
    const location = useLocation();
    const hoverRef = useRef<HTMLDivElement>(null);
    const [hoverEvent, setHoverEvent] = useState<boolean>(false);
    const [pageModal, setPageModal] = useState<string>("");
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
                        <TranslateWrapper onClick={() => setLanguageModal(!languageModal)}>
                            <TranslateIcon src={Translate}/>
                            <TranslateText>{languageChange()}</TranslateText>
                        </TranslateWrapper>
                    </LogoContainer>}
                <TapOutContainer>
                    <TapContainer
                        onClick={() => {
                            navigate("/");
                            resetFilter();
                            resetFlag();
                        }}>
                        HOME
                    </TapContainer>
                    <TapContainer
                        style={{color: `${(location.pathname.includes("/mentor")) ? "#3c3ad6" : ""}`}}
                        onClick={() => {
                            navigate("/mentor");
                            resetFilter();
                            resetFlag();
                        }}>
                        MENTOR
                    </TapContainer>
                    <div
                        style={{position: "relative"}}
                        onMouseOver={() => setPageModal("Notice")} 
                        onMouseOut={() => setPageModal("")}>
                        <TapContainer
                            style={{color: `${(location.pathname.includes("/notice")) ? "#3c3ad6" : ""}`}}
                            onClick={() => {
                                navigate("/notice");
                                resetFilter();
                                resetFlag();
                            }}>
                            NOTICE
                            
                        </TapContainer>
                        {((pageModal === "Notice") && (location.pathname !== "/"))
                            && <PageModal
                            pageModal={pageModal}/>}
                    </div>
                    <TapContainer
                        style={{color: `${(location.pathname.includes("/showcase")) ? "#3c3ad6" : ""}`}}
                        onClick={() => {
                            navigate("/showcase");
                            resetFilter();
                            resetFlag();
                        }}>
                        SHOWCASE
                    </TapContainer>
                    <div
                        style={{position: "relative"}}
                        onMouseOver={() => setPageModal("Support")} 
                        onMouseOut={() => setPageModal("")}>
                        <TapContainer
                            style={{color: `${(location.pathname.includes("/support")) ? "#3c3ad6" : ""}`}}
                            onClick={() => {
                                navigate("/support");
                                resetFilter();
                                resetFlag();
                            }}>
                            SUPPORT
                        </TapContainer>
                        {((pageModal === "Support") && (location.pathname !== "/"))
                            && <PageModal
                            pageModal={pageModal}/>}
                    </div>
                </TapOutContainer>
                {(location.pathname !== "/")
                    && <SupportWrapper>
                        <SNSMenu />
                    </SupportWrapper>}
            </HeaderOutWrapper>
        </HeaderLayoutContainer>
        {/* <ScrollBarContainer> */}
            {/* <ScrollBar /> */}
        {/* </ScrollBarContainer> */}
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
`;

const HeaderOutWrapper = styled.div`
    width: 1320px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 1320px) {
        width: 96%;
        margin: 0px auto;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    /* margin: auto 0px; */
    align-items: center;
    gap: 16px;
    height: 80px;

    @media screen and (max-width: 1320px) {
        gap: 5px;
        height: 70px;
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
        width: 100px;
        height: 100%;
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

const TranslateIcon = styled.img`
    width: 18px;
    height: 18px;
    object-fit: contain;
`;

const TranslateText = styled.div`
    font-family: "Pretendard";
    font-size: 13px;
    color: #222020;
    font-weight: 600;

    @media screen and (max-width: 1320px) {
        font-size: 10px;
    }
`;

const TapOutContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 70px;
    padding: 10px 5px;
    height: 100%;

    @media screen and (max-width: 1320px) {
        gap: 25px;
    }
    @media screen and (max-width: 500px) {
        gap: 16px;
    }
`;

const TapContainer = styled.a`
    padding: 5px 0px;
    height: 100%;
    display: flex;
    align-items: center;
    font-family: 'LINESeedKR-Bd';
    /* font-family: "Pretendard"; */
    /* font-family: "Roboto+Condensed"; */
    font-size: 16px;
    /* color: #999999; */
    color: #222020;
    font-weight: 400;
    position: relative;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        color: #3c3ad6;
    }

    @media screen and (max-width: 1320px) {
        font-size: 16px;
    }
    @media screen and (max-width: 836px) {
        font-size: 12px;
    }
`;

const ScrollBarContainer = styled.div`
    width: 100%;
    
    @media screen and (max-width: 958px) {
        position: absolute;
        top: 75px;
        left: 0;
    }
`;

const SupportWrapper = styled.div`
    min-width: 5%;
    height: 100%;
    display: flex;
    justify-content: end;
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

export default Header;