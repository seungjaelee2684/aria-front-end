import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import './AlertModal.css';
import { HiOutlineShieldExclamation } from "react-icons/hi2";
import { alertInformation } from '../../../languages/AlertTrans';

interface AlertModalProps {
  alertModal: {
    isOpen: boolean,
    whatAlert: string
  };
  setAlertModal: React.Dispatch<React.SetStateAction<{
    isOpen: boolean,
    whatAlert: string
  }>>;
}

const AlertModal : React.FC<AlertModalProps> = ({ alertModal, setAlertModal }) => {
  
  console.log("모달창 데이터", alertModal.whatAlert);

  const [count, setCount] = useState<number>(0);

  const language = localStorage.getItem("language");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (count < 100) {
  //       setCount(count + 1);
  //     } else {
  //       setAlertModal({...alertModal, isOpen: false, whatAlert: ""})
  //     };
  //   }, 100)
  //   return () => clearInterval(interval);
  // }, [count])

  const alertTranslate = (Num : number) => {
    switch (language) {
      case "chinese" :
        return alertInformation[Num]?.chinesealert;
      case "japanese" :
        return alertInformation[Num]?.japanesealert;
      case "korean" :
        return alertInformation[Num]?.alert;
      default :
        return alertInformation[Num]?.englishalert;
    }
  };

  const alertContentChange = () => {
    if (alertModal.whatAlert === "showcase") {
      return ;
    };
  };
  
  return (
    <BackgroudContainer
      onClick={() => setAlertModal({...alertModal, isOpen: false, whatAlert: ""})}>
      <ModalContainer
        onClick={(e) => e.stopPropagation()}
        className='AlertModalContainer'>
        <ExclamationIcon color="yellow">
          <HiOutlineShieldExclamation />
        </ExclamationIcon>
        <ModalTitle>
          {alertTranslate(0)}
        </ModalTitle>
        <ModalContent>
          {alertTranslate(1)}
        </ModalContent>
        <CloseButton onClick={() => setAlertModal({...alertModal, isOpen: false, whatAlert: ""})}>
          OK
        </CloseButton>
        {/* <CloseTimer width={count}/> */}
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
  width: 550px;
  height: 300px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-family: "Pretendard";
  position: relative;
  padding: 0px 20px;
`;

const ExclamationIcon = styled.div<{ color : string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 80px;
  color: ${(props) => props.color};
  margin-bottom: 10px;
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

const CloseButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: #3c3ad6;
  border-radius: 5px;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  color: #FCFCFC;
  border: none;
  margin-top: 30px;
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