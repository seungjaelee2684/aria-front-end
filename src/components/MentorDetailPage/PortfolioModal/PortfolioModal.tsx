import React from 'react'
import './PortfolioModal.css';
import styled from 'styled-components';

interface PortfolioModalProps {
  isOpenPortfolio: {
    isopen: boolean,
    image: string
  }
  setIsOpenPortfolio: React.Dispatch<React.SetStateAction<{
    isopen: boolean,
    image: string
  }>>;
};

const PortfolioModal : React.FC<PortfolioModalProps> = ({ isOpenPortfolio, setIsOpenPortfolio }) => {
  return (
    <ModalBackgroundContainer onClick={() => setIsOpenPortfolio({...isOpenPortfolio, isopen: false, image: ""})}>
      <ModalContainer>
        <PortfolioImage src={isOpenPortfolio.image} alt=''/>
      </ModalContainer>
    </ModalBackgroundContainer>
  )
};

const ModalBackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #22202080;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 90%;
  background-color: #222020;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PortfolioImage = styled.img`
  width: 80%;
  height: 70%;
  object-fit: contain;
`;

export default PortfolioModal;