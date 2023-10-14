import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import logo from '../../assets/logos/logo.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { translate } from '../../store/Translation';
import { nationFlag, nationKind } from '../../store/NationFilter';
import ScrollBar from './ScrollBar';
import PageModal from './PageModal/PageModal';
import SNSMenu from './SNSMenu';
import ListIcon from '../../assets/icons/list.png';

const Header = () => {

    const [japanese, setJapanese] = useRecoilState(translate);
    const resetFilter = useResetRecoilState(nationKind);
    const resetFlag = useResetRecoilState(nationFlag);

    const navigate = useNavigate();
    const hoverRef = useRef<HTMLDivElement>(null);
    const [hoverEvent, setHoverEvent] = useState<boolean>(false);
    const [pageModal, setPageModal] = useState<string>("");
    const [snsModal, setSnsModal] = useState<boolean>(false);

    console.log("모달 번호 => ", pageModal);

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
                    }}/>
                <TranslateText onClick={() => setJapanese(!japanese)}>{japanese ? "한국어" : "日本語"}</TranslateText>
            </LogoContainer>
            <TapOutContainer>
                <TapContainer
                    onClick={() => {
                        navigate("/");
                        resetFilter();
                        resetFlag();
                    }}>
                    Home
                </TapContainer>
                <TapContainer
                    onClick={() => {
                        navigate("/mentor");
                        resetFilter();
                        resetFlag();
                    }}>
                    Mentor
                </TapContainer>
                <div
                    style={{position: "relative"}}
                    onMouseOver={() => setPageModal("Notice")} 
                    onMouseOut={() => setPageModal("")}>
                    <TapContainer
                        onClick={() => {
                            navigate("/notice");
                            resetFilter();
                            resetFlag();
                        }}>
                        Notice
                        
                    </TapContainer>
                    {(pageModal === "Notice")
                        && <PageModal
                        pageModal={pageModal}/>}
                </div>
                <TapContainer
                    onClick={() => {
                        navigate("/hof");
                        resetFilter();
                        resetFlag();
                    }}>
                    H.o.f
                </TapContainer>
                <div
                    style={{position: "relative"}}
                    onMouseOver={() => setPageModal("Support")} 
                    onMouseOut={() => setPageModal("")}>
                    <TapContainer
                        onClick={() => {
                            navigate("/support");
                            resetFilter();
                            resetFlag();
                        }}>
                        Support
                    </TapContainer>
                    {(pageModal === "Support")
                        && <PageModal
                        pageModal={pageModal}/>}
                </div>
            </TapOutContainer>
            <SupportWrapper>
                <SNSMenu />
                {/* <SNSModalContainer
                    onClick={() => setSnsModal(!snsModal)}>
                    <SNSModalListIcon src={ListIcon}/>
                </SNSModalContainer> */}
            </SupportWrapper>
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
    padding: 0px 15% 0px 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto 0px;
    height: 100%;

    @media screen and (max-width: 1140px) {
        padding: 0px 3% 0px 3%;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    /* margin: auto 0px; */
    align-items: center;
    gap: 16px;
    height: 90px;

    @media screen and (max-width: 1140px) {
        gap: 5px;
        height: 70px;
    }
`;

const HeaderLogo = styled.img`
    width: 130px;
    height: 80px;
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
    font-size: 13px;
    color: #222020;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #3c3ad6;
        font-size: 12.9px;
    }

    @media screen and (max-width: 1140px) {
        font-size: 10px;

        &:hover {
            color: #3c3ad6;
            font-size: 9.9px;
        }
    }
`;

const TapOutContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 70px;
    padding: 10px 5px;

    @media screen and (max-width: 1140px) {
        gap: 25px;
    }
    @media screen and (max-width: 500px) {
        gap: 16px;
    }
`;

const TapContainer = styled.a`
    padding: 5px 0px;
    font-family: "Pretendard";
    font-size: 19px;
    color: #999999;
    font-weight: 700;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #3c3ad6;
        border-bottom: 3px solid #3c3ad6;
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

    @media screen and (max-width: 1140px) {
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

    @media screen and (max-width: 1140px) {
        width: 22px;
        height: 22px;
    }
`;

export default Header;