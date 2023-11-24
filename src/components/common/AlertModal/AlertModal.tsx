import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import './AlertModal.css';
import { HiOutlineShieldExclamation } from "react-icons/hi2";
import { CiNoWaitingSign } from "react-icons/ci";
import { GoCheckCircle } from "react-icons/go";
import { alertInformation } from '../../../languages/AlertTrans';
import { useRecoilState } from 'recoil';
import { AlertModalOpen } from '../../../store/AlertModalOpen';

const AlertModal = () => {
  
  const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);

  console.log("모달창 데이터", alertModal.whatAlert);

  const language = localStorage.getItem("language");

  const alertTranslate = (Num : number) => {
    switch (language) {
      case "chinese" :
        return alertInformation[(alertModal.whatAlert * 2) + Num]?.chinesealert;
      case "japanese" :
        return alertInformation[(alertModal.whatAlert * 2) + Num]?.japanesealert;
      case "korean" :
        return alertInformation[(alertModal.whatAlert * 2) + Num]?.alert;
      default :
        return alertInformation[(alertModal.whatAlert * 2) + Num]?.englishalert;
    }
  };

  const alertContentChange = () => {
    if (alertModal.whatAlert === 0) {
      return (
        <ExclamationIcon color="#fce169">
          <HiOutlineShieldExclamation />
        </ExclamationIcon>
      );
    } else {
      return (
        <ExclamationIcon color="#b0d990">
          <GoCheckCircle />
        </ExclamationIcon>
      );
    };
  };
  
  return (
    <BackgroudContainer
      onClick={() => setAlertModal({...alertModal, isOpen: false, whatAlert: 100})}>
      <ModalContainer
        onClick={(e) => e.stopPropagation()}
        className='AlertModalContainer'>
        {alertContentChange()}
        <ModalTitle>
          {alertTranslate(0)}
        </ModalTitle>
        <ModalContent>
          {alertTranslate(1)}
        </ModalContent>
        <ButtonContainer>
          <CloseButton onClick={() => setAlertModal({...alertModal, isOpen: false, whatAlert: 100})}>
            OK
          </CloseButton>
        </ButtonContainer>
      </ModalContainer>
    </BackgroudContainer>
  )
};

const BackgroudContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 101;
  background-color: #00000070;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div`
  width: 480px;
  height: 300px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-family: "Pretendard";
  position: relative;
  padding: 0px 40px;
`;

const ExclamationIcon = styled.div<{ color : string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 100px;
  color: ${(props) => props.color};
  margin: 20px 0px 10px 0px;
`;

const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 150%;
`;

const ModalContent = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 20px;
`;

const CloseButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: #3c3ad6;
  border-radius: 5px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  color: #FCFCFC;
  border: 2px solid #d2d1f8;
  cursor: pointer;
`;

const CloseTimer = styled.div<{ width : number }>`
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