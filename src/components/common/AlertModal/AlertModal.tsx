import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import './AlertModal.css';
import { HiOutlineShieldExclamation } from "react-icons/hi2";
import { CiNoWaitingSign } from "react-icons/ci";
import { GoCheckCircle } from "react-icons/go";
import { alertInformation } from '../../../languages/AlertTrans';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AlertModalOpen } from '../../../store/AlertModalOpen';
import { IoIosTimer } from "react-icons/io";
import { translate } from '../../../store/Translation';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MonthEnum } from '../../../utils/MonthEnum';

const AlertModal = () => {

  const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);

  const language = localStorage.getItem("language");
  const dateObject = new Date(alertModal?.opendate);
  const month = dateObject.getMonth() + 1;

  const alertTranslate = (Num: number) => {
    switch (language) {
      case "japanese":
        return alertInformation[(alertModal.whatAlert * 2) + Num]?.japanesealert;
      case "korean":
        return alertInformation[(alertModal.whatAlert * 2) + Num]?.alert;
      default:
        return alertInformation[(alertModal.whatAlert * 2) + Num]?.englishalert;
    }
  };

  const alertContentChange = () => {
    if (alertModal.whatAlert === 0) {
      return (
        <ModalContainer
          onClick={(e) => e.stopPropagation()}
          className='AlertModalContainer'>
          <ExclamationIcon
            className='ExclamationIcon'
            color="#fce169">
            <IoIosTimer />
          </ExclamationIcon>
          <ModalTitle>
            {alertTranslate(0)}
          </ModalTitle>
          <ModalContent>
            {alertTranslate(1)}
          </ModalContent>
          <ButtonContainer>
            <CloseButton
              bgcolor='#3c3ad6'
              border='2px solid #d2d1f8'
              onClick={() => setAlertModal({ ...alertModal, isOpen: false, whatAlert: 100 })}>
              OK
            </CloseButton>
          </ButtonContainer>
        </ModalContainer>
      );
    } else if (alertModal.whatAlert === 1) {
      return (
        <ModalContainer
          onClick={(e) => e.stopPropagation()}
          className='AlertModalContainer'>
          <ExclamationIcon
            className='InformationIcon'
            color="#abdff3"
            style={{margin:" 0px 0px 5px 0px"}}>
            <IoIosInformationCircleOutline />
          </ExclamationIcon>
          {(language === "korean" || language === "japanese")
              ? <ModalTitle>
                {month}{alertTranslate(0)}
              </ModalTitle>
              : <ModalTitle>
                {alertTranslate(0)}{MonthEnum[month - 1]}
              </ModalTitle>}
          <ModalContent>
            {alertTranslate(1)}
          </ModalContent>
          <ButtonContainer>
            <CloseButton
              bgcolor='#6de290'
              border='2px solid #d0f0da'
              onClick={() => {
                setAlertModal({ ...alertModal, isOpen: false, whatAlert: 100 });
                window.open(alertModal.content);
              }}>
              Yes
            </CloseButton>
            <CloseButton
              bgcolor='#f55a89'
              border='2px solid #f3d1db'
              onClick={() => setAlertModal({ ...alertModal, isOpen: false, whatAlert: 100 })}>
              No
            </CloseButton>
          </ButtonContainer>
        </ModalContainer>
      )
    } else {
      return (
        <ModalContainer
          onClick={(e) => e.stopPropagation()}
          className='AlertModalContainer'>
          <ExclamationIcon
            className='ExclamationIcon'
            color="#b0d990">
            <GoCheckCircle />
          </ExclamationIcon>
          <ModalTitle>
            {alertTranslate(0)}
          </ModalTitle>
          <ModalContent>
            {alertTranslate(1)}
          </ModalContent>
          <ButtonContainer>
            <CloseButton
              bgcolor='#3c3ad6'
              border='2px solid #d2d1f8'
              onClick={() => setAlertModal({ ...alertModal, isOpen: false, whatAlert: 100 })}>
              OK
            </CloseButton>
          </ButtonContainer>
        </ModalContainer>

      );
    };
  };

  return (
    <BackgroudContainer
      onClick={() => setAlertModal({ ...alertModal, isOpen: false, whatAlert: 100 })}>
      {alertContentChange()}
    </BackgroudContainer>
  )
};

const BackgroudContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 101;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;

  @media screen and (max-width: 500px) {
    background-color: #00000070;
    align-items: center;
  }
`;

const ModalContainer = styled.div`
  width: 300px;
  height: 180px;
  background-color: #FFFFFF;
  color: #222020;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 5px;
  font-family: "Pretendard";
  position: relative;
  box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
  padding: 0px 30px;

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 200px;
    border-radius: 10px;
    background-color: #1a2833;
    color: #FCFCFC;
  }
`;

const ExclamationIcon = styled.div<{ color: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 55px;
  color: ${(props) => props.color};
  margin: 0px 0px 10px 0px;
`;

const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 800;
  line-height: 150%;
`;

const ModalContent = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  white-space: break-spaces;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 10px;
  gap: 8px;
`;

const CloseButton = styled.button<{ bgcolor : string, border : string }>`
  width: 45px;
  height: 28px;
  background-color: ${(props) => props.bgcolor};
  border-radius: 5px;
  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  color: #FCFCFC;
  border: ${(props) => props.border};
  cursor: pointer;

  &:hover {
    border: none;
  }
`;

const CloseTimer = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #3c3ad6;
  border-radius: 0px 0px 2px 2px;
  transition: all 0.1s;
`;

export default AlertModal;