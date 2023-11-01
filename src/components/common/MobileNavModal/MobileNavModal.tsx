import React from 'react'
import styled from 'styled-components';
import './MobileNavModal.css';
import { MdClose } from 'react-icons/md';
import { NavigateFunction } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../../../store/NationFilter';

interface MobileNavModalProps {
  navigate: NavigateFunction;
  hamburg: boolean;
  setHamburg: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavModal : React.FC<MobileNavModalProps> = ({ navigate, hamburg, setHamburg }) => {

  const resetFilter = useResetRecoilState(nationKind);
  const resetFlag = useResetRecoilState(nationFlag);

  return (
    <div>
      <BackgroundContainer onClick={() => setHamburg(false)}/>
      <ModalContainer className='ModalContainer'>
        <CloseBtnContainer>
          <CloseBtn onClick={() => setHamburg(false)}>
            <MdClose />
          </CloseBtn>
        </CloseBtnContainer>
        <TextWrapper>
          <Text onClick={() => {
            navigate("/")
            resetFilter()
            resetFlag()
            setHamburg(false)
          }}>
            Home
          </Text>
          <Text onClick={() => {
            navigate("/mentor")
            resetFilter()
            resetFlag()
            setHamburg(false)
          }}>
            Mentor
          </Text>
          <Text onClick={() => {
            navigate("/notice")
            resetFilter()
            resetFlag()
            setHamburg(false)
          }}>
            Notice
          </Text>
          <Text onClick={() => {
            navigate("/showcase")
            resetFilter()
            resetFlag()
            setHamburg(false)
          }}>
            H.O.F
          </Text>
          <Text onClick={() => {
            navigate("/support")
            resetFilter()
            resetFlag()
            setHamburg(false)
          }}>
            Support
          </Text>
        </TextWrapper>
      </ModalContainer>
    </div>
  )
};

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  background-color: #22202050;
`;

const ModalContainer = styled.div`
  width: 70%;
  height: 100%;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  border-radius: 0px 15px 15px 0px;
  z-index: 100;
  user-select: none;
  box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
`;

const CloseBtnContainer = styled.div`
  width: 96%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 10px;
`;

const CloseBtn = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-family: "Pretendard";
  font-size: 36px;
  font-weight: 600;
  line-height: normal;
  color: #222020;

  &:active {
    background-color: #e9e9e9;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  color: #222020;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 40px;
`;

export default MobileNavModal;