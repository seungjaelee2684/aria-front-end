import React from 'react'
import styled from 'styled-components';
import './AlertModal.css';

const AlertModal = () => {
  return (
    <BackgroudContainer>
      <ModalContainer>
        AlertModal
      </ModalContainer>
    </BackgroudContainer>
  )
};

const BackgroudContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 97;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 400px;
  height: 350px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AlertModal;