import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import PageModal from './PageModal/PageModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../../store/NationFilter';
import { translate } from '../../store/Translation';
import { AlertModalOpen } from '../../store/AlertModalOpen';
import AlertModal from './AlertModal/AlertModal';

const NavButton = () => {

    const navigate = useNavigate();
    const language = localStorage.getItem("language");
    const location = useLocation();
    const [pageModal, setPageModal] = useState<string>("");
    const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);

    // const underLine = useRef<HTMLDivElement>(null);
    // let horizontalMenus = document.querySelectorAll("nav a");
    
    // horizontalMenus.forEach((menu) => {
    //     menu.addEventListener("click", (e) => horizontalIndicator(e))
    // })

    // const horizontalIndicator = (e : any) => {
    //     if (underLine.current) {
    //         underLine.current.style.left = `${e.currentTarget.offsetLeft + "px"}`;
    //         underLine.current.style.width = `${e.currentTarget.offsetWidth + "px"}`;
    //         // underLine.current.style.top = `${(e.currentTarget.offsetTop + e.currentTarget.offsetHeight - 9) + "px"}`;
    //     };
    // };

    return (
        <TapOutContainer className='TapOutContainer'>
            {/* <UnderBarContainer
                ref={underLine}
                style={{opacity: `${(location.pathname !== "/") ? "1" : "0"}`}}/> */}
            {/* {(location.pathname !== "/")
                && <TapContainer
                    // href='#'
                    onClick={() => {
                        navigate("/");
                        resetFilter();
                        resetFlag();
                    }}>
                    HOME
                </TapContainer>} */}
            <TapContainer
                // href='#'
                style={{ color: `${(location.pathname.includes("/mentor")) ? "#3c3ad6" : ""}` }}
                onClick={() => {
                    navigate("/mentor");
                }}>
                MENTOR
            </TapContainer>
            <TapContainer
                // href='#'
                style={{ color: `${(location.pathname.includes("/showcase")) ? "#3c3ad6" : ""}` }}
                onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}>
                SHOWCASE
            </TapContainer>
            <HoverTapContainer
                // href='#'
                // onMouseOver={() => setPageModal("Notice")}
                // onMouseOut={() => setPageModal("")}
                >
                <TapContainer
                    style={{ color: `${(location.pathname.includes("/notice")) ? "#3c3ad6" : ""}` }}
                    onClick={() => {
                        // setAlertModal({...alertModal, isOpen: true, whatAlert: 0});
                        navigate("/notice/notification");
                    }}>
                    NOTICE
                </TapContainer>
                {(pageModal === "Notice")
                    && <PageModal
                        pageModal={pageModal} />}
            </HoverTapContainer>
            <HoverTapContainer
                // href='#'
                onMouseOver={() => setPageModal("Support")}
                onMouseOut={() => setPageModal("")}>
                <TapContainer
                    style={{ color: `${(location.pathname.includes("/support")) ? "#3c3ad6" : ""}` }}
                    onClick={() => {
                        navigate("/support/counseling");
                    }}>
                    SUPPORT
                </TapContainer>
                {(pageModal === "Support")
                    && <PageModal
                        pageModal={pageModal} />}
            </HoverTapContainer>
        </TapOutContainer>
    )
};

const TapOutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 110px;
    height: 50px;

    @media screen and (max-width: 1320px) {
        gap: 70px;
    }

    @media screen and (max-width: 836px) {
        gap: 30px;
    }

    @media screen and (max-width: 650px) {
        gap: 14px;
    }
`;

const UnderBarContainer = styled.div`
    position: absolute;
    width: 0;
    background: linear-gradient(to right, #3c3ad6, #530898);
    /* background-color: #3c3ad6; */
    top: 76px;
    left: 0;
    height: 4px;
    transition: all 0.5s ease-out;
`;

const TapContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    font-family: 'LINESeedKR-Bd';
    font-size: 16px;
    /* color: #999999; */
    color: #3b3a3a;
    font-weight: normal;
    text-decoration: none;
    position: relative;
    /* text-shadow: 1px 1px 4px #FFFFFF; */
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        /* border-bottom: 4px solid #3c3ad6; */
        color: #3c3ad6;
    }

    @media screen and (max-width: 1320px) {
        font-size: 14px;
    }
    @media screen and (max-width: 836px) {
        font-size: 12px;
    }
`;

const HoverTapContainer = styled.div`
    height: 100%;
    position: relative;
`;

export default NavButton;