import React from 'react'
import styled from 'styled-components';

const PageModal = ({ pageModal } : any) => {
  return (
    <ModalContainer>
        {pageModal}
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
    width: 50px;
    height: 100px;
    background-color: #FCFCFC;
    position: absolute;
    top: 30px;
    left: 0;
    z-index: 200;
`;

export default PageModal;