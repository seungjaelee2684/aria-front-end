import React from 'react'
import './PageModal.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../../../store/NationFilter';

const PageModal = ({ pageModal } : any) => {

  const navigate = useNavigate();
  const resetFilter = useResetRecoilState(nationKind);
  const resetFlag = useResetRecoilState(nationFlag);

  const modalTitle = () => {
    if (pageModal === "Notice") {
      return (
        <div>
          <ModalText
            onClick={() => {
              navigate("/notice/notification")
              resetFilter()
              resetFlag()
            }}>
            Notification
          </ModalText>
          <ModalText>
            Event
          </ModalText>
        </div>
      )
    } else if (pageModal === "Support") {
      return (
        <div>
          <ModalText
            onClick={() => {
              navigate("/support")
              resetFilter()
              resetFlag()
            }}>
            Notification
          </ModalText>
          <ModalText>
            Event
          </ModalText>
          <ModalText>
            Event
          </ModalText>
        </div>
      )
    };
  };

  return (
    <ModalContainer className='ModalContainerDiv'>
      {modalTitle()}
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  min-width: 70px;
  background-color: #222020;
  position: absolute;
  top: 38px;
  left: 0;
  z-index: 200;
  color: #FCFCFC;
  padding: 10px 5px;

  @media screen and (max-width: 1140px) {
    top: 30px;
  }
`;

const ModalText = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  padding: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ff4444;
    transform: translateY(-1px);
  }
`;

export default PageModal;