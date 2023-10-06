import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import logo from '../../assets/logos/logo.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { translate } from '../../store/Translation';
import { nationFlag, nationKind } from '../../store/NationFilter';
import ScrollBar from './ScrollBar';
import PageModal from './PageModal/PageModal';

const Header = () => {

    const [japanese, setJapanese] = useRecoilState(translate);
    const resetFilter = useResetRecoilState(nationKind);
    const resetFlag = useResetRecoilState(nationFlag);

    const navigate = useNavigate();
    const hoverRef = useRef<HTMLDivElement>(null);
    const [hoverEvent, setHoverEvent] = useState<boolean>(false);
    const [pageModal, setPageModal] = useState<string>("");

    console.log("모달 번호 => ", pageModal);

    useEffect(() => {
        if (hoverRef.current) {
            if (hoverEvent) {
                hoverRef.current.style.transition = "all 0.2s ease-in-out"
                hoverRef.current.style.opacity = "1"
            } else {
                hoverRef.current.style.transition = "all 0.2s ease-in-out"
                hoverRef.current.style.opacity = "0.5"
            };
            
        };
    }, [hoverEvent]);

  return (
    <div>
    <HeaderHiddenContainer ref={hoverRef} />
    <HeaderLayoutContainer
        onMouseOver={() => setHoverEvent(true)}
        onMouseOut={() => setHoverEvent(false)}
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
                    }} />
                <TranslateText onClick={() => setJapanese(!japanese)}>{japanese ? "한국어" : "日本語"}</TranslateText>
            </LogoContainer>
            <TapOutContainer>
                <TapContainer
                    onClick={() => {
                        navigate("/");
                        resetFilter();
                        resetFlag();
                    }}
                    onMouseOver={() => setPageModal("Home")} 
                    onMouseOut={() => setPageModal("")}>
                    Home
                    {(pageModal === "Home")
                        && <PageModal
                            pageModal={pageModal}/>}
                </TapContainer>
                <TapContainer
                    onClick={() => {
                        navigate("/mentor");
                        resetFilter();
                        resetFlag();
                    }}
                    onMouseOver={() => setPageModal("Mentor")} 
                    onMouseOut={() => setPageModal("")}>
                    Mentor
                    {(pageModal === "Mentor")
                        && <PageModal
                            pageModal={pageModal}/>}
                </TapContainer>
                <TapContainer
                    onClick={() => {
                        navigate("/notice");
                        resetFilter();
                        resetFlag();
                    }}
                    onMouseOver={() => setPageModal("Notice")} 
                    onMouseOut={() => setPageModal("")}>
                    Notice
                    {(pageModal === "Notice")
                        && <PageModal
                            pageModal={pageModal}/>}
                </TapContainer>
                <TapContainer
                    onClick={() => {
                        navigate("/hof");
                        resetFilter();
                        resetFlag();
                    }}
                    onMouseOver={() => setPageModal("Hof")} 
                    onMouseOut={() => setPageModal("")}>
                    H.o.f
                    {(pageModal === "Hof")
                        && <PageModal
                            pageModal={pageModal}/>}
                </TapContainer>
                <TapContainer
                    onClick={() => {
                        navigate("/support");
                        resetFilter();
                        resetFlag();
                    }}
                    onMouseOver={() => setPageModal("Support")} 
                    onMouseOut={() => setPageModal("")}>
                    Support
                    {(pageModal === "Support")
                        && <PageModal
                            pageModal={pageModal}/>}
                </TapContainer>
            </TapOutContainer>
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
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: #FFFFFF;
    opacity: 0.5;
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
`;

const HeaderLayoutContainer = styled.div`
    width: 100%;
    height: 70px;
    /* border-bottom: 1px solid gray; */
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    

    /* opacity: 0.5; */
`;

const HeaderOutWrapper = styled.div`
    padding: 0px 15% 0px 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto 0px;
    height: 100%;
`;

const LogoContainer = styled.div`
    display: flex;
    margin: auto 0px;
    align-items: center;
    gap: 16px;
    height: 90px;

    @media screen and (max-width: 1140px) {
        gap: 5px;
        height: 70px;
    }
`;

const HeaderLogo = styled.img`
    width: 140px;
    height: 90px;
    object-fit: contain;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        /* width: 151px;
        height: 81px; */
        opacity: 0.8;
    }

    @media screen and (max-width: 1140px) {
        width: 120px;
        height: 70px;
    }
`;

const TranslateText = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    color: #222020;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #3c3ad6;
        font-size: 13.8px;
    }

    @media screen and (max-width: 1140px) {
        font-size: 10px;

        &:hover {
            color: #3c3ad6;
            font-size: 9.9px;
        }
    }
`;

const TapOutContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 10px 5px;

    @media screen and (max-width: 1140px) {
        gap: 16px;
    }
`;

const TapContainer = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    color: #222020;
    font-weight: 700;
    height: 25px;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #3c3ad6;
        border-bottom: 2px solid #3c3ad6;
    }

    @media screen and (max-width: 1140px) {
        font-size: 16px;
    }
    @media screen and (max-width: 836px) {
        font-size: 14px;
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

export default Header;