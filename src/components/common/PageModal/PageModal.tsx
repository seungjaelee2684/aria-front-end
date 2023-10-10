import React from 'react'
import './PageModal.css';
import styled from 'styled-components';

const PageModal = ({ pageModal } : any) => {
  return (
    <ModalContainer className='ModalContainerDiv'>
        {pageModal}
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  width: 70px;
  height: 100px;
  background-color: #222020;
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 200;
  color: #FCFCFC;
`;

export default PageModal;