import React, { useRef, useState } from 'react'
import '../../style/font/font.css';
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
    const location = useLocation();
    const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);

    return (
        <TapOutContainer className='TapOutContainer'>
            <TapContainer
                style={{ color: `${(location.pathname.includes("/mentor")) ? "#3c3ad6" : ""}` }}
                onClick={() => {
                    navigate("/mentor");
                }}>
                MENTOR
            </TapContainer>
            <TapContainer
                style={{ color: `${(location.pathname.includes("/showcase")) ? "#3c3ad6" : ""}` }}
                onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}>
                SHOWCASE
            </TapContainer>
            <TapContainer
                style={{ color: `${(location.pathname.includes("/notice")) ? "#3c3ad6" : ""}` }}
                onClick={() => {
                    navigate("/notice");
                }}>
                NOTICE
            </TapContainer>
            <TapContainer
                style={{ color: `${(location.pathname.includes("/counseling")) ? "#3c3ad6" : ""}` }}
                onClick={() => {
                    navigate("/support/counseling");
                }}>
                COUNSELING
            </TapContainer>
            <TapContainer
                style={{ color: `${(location.pathname.includes("/policy")) ? "#3c3ad6" : ""}` }}
                onClick={() => {
                    navigate("/support/policy");
                }}>
                POLICY
            </TapContainer>
        </TapOutContainer>
    )
};

const TapOutContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    height: 50px;

    @media screen and (max-width: 1320px) {
        gap: 30px;
    }

    @media screen and (max-width: 836px) {
        gap: 20px;
    }

    @media screen and (max-width: 650px) {
        gap: 8px;
    }
`;

const TapContainer = styled.a`
    height: 100%;
    display: flex;
    align-items: center;
    font-family: 'LINESeedKR-Bd';
    font-size: 16px;
    color: #3b3a3a;
    font-weight: normal;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        color: #3c3ad6;
    }

    @media screen and (max-width: 1320px) {
        font-size: 14px;
    }
    @media screen and (max-width: 836px) {
        font-size: 12px;
    }
`;

export default NavButton;