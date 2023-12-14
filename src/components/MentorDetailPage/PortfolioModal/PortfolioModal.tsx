import React from 'react'
import './PortfolioModal.css';
import styled from 'styled-components';
import { AiOutlineCloseSquare } from "react-icons/ai";

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
    <ModalContainer>
      <CloseButton>
        <AiOutlineCloseSquare
          style={{cursor: "pointer"}}
          onClick={() => setIsOpenPortfolio({...isOpenPortfolio, isopen: false, image: ""})}/>
      </CloseButton>
      <PortfolioImage
        src={isOpenPortfolio.image}
        alt=''
        onClick={(e) => e.stopPropagation()}/>
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222020f0;
  overflow: hidden;
`;

const CloseButton = styled.div`
  font-size: 36px;
  color: #FFFFFF;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 102;
`;

// const ModalContainer = styled.div`
//   width: 100%;
//   height: 90%;
//   background-color: #222020;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const PortfolioImage = styled.img`
  width: 96%;
  height: 96%;
  object-fit: contain;
`;

export default PortfolioModal;