import React from 'react'
import './PageModal.css';
import styled from 'styled-components';

const PageModal = ({ pageModal } : any) => {
  return (
    <ModalContainer className='ModalContainerDiv'>
      <ModalText>
        {pageModal}
      </ModalText>
      <ModalText>
        {pageModal}
      </ModalText>
      <ModalText>
        {pageModal}
      </ModalText>
      <ModalText>
        {pageModal}
      </ModalText>
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  width: 70px;
  min-height: 70px;
  background-color: #222020;
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 200;
  color: #FCFCFC;
  padding: 5px 0px;
`;

const ModalText = styled.div`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  padding: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #ff4444;
    transform: translateY(-1px);
  }
`;

export default PageModal;