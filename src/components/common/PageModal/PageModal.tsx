import React from 'react'
import './PageModal.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../../../store/NationFilter';
import { AlertModalOpen } from '../../../store/AlertModalOpen';

const PageModal = ({ pageModal } : any) => {

  const navigate = useNavigate();
  const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);

  const modalTitle = () => {
    if (pageModal === "Notice") {
      return (
        <ModalContainer className='ModalContainerDiv'>
          <ModalText onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}>
            Event
          </ModalText>
          <ModalText onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}>
            Announcements
          </ModalText>
        </ModalContainer>
      )
    } else if (pageModal === "Support") {
      return (
        <ModalContainer className='ModalContainerBig'>
          {/* <ModalText onClick={() => navigate("/schedule")}>
            Schedule
          </ModalText> */}
          <ModalText onClick={() => navigate("/support/counseling")}>
            Counseling
          </ModalText>
          <ModalText onClick={() => navigate("/support/policy")}>
            Policy
          </ModalText>
        </ModalContainer>
      )
    };
  };

  return (
    <div>
      {modalTitle()}
    </div>
  )
};

const ModalContainer = styled.div`
  min-width: 70px;
  background-color: #222020;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 100;
  color: #FCFCFC;
  padding: 5px;

  @media screen and (max-width: 1320px) {
    min-width: 40px;
  }
`;

const ModalText = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ff4444;
    transform: translateY(-1px);
  }

  @media screen and (max-width: 1320px) {
    font-size: 15px;
  }

  @media screen and (max-width: 836px) {
    font-size: 14px;
  }
`;

export default PageModal;