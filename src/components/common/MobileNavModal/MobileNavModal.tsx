import React from 'react'
import styled from 'styled-components';
import './MobileNavModal.css';
import { MdClose } from 'react-icons/md';
import { NavigateFunction } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../../../store/NationFilter';

interface MobileNavModalProps {
  navigate: NavigateFunction;
  setHamburg: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavModal : React.FC<MobileNavModalProps> = ({ navigate, setHamburg }) => {

  const resetFilter = useResetRecoilState(nationKind);
  const resetFlag = useResetRecoilState(nationFlag);

  return (
    <ModalContainer>
      <CloseBtn onClick={() => setHamburg(false)}>
        <MdClose />
      </CloseBtn>
      <TextWrapper>
        <Text onClick={() => {
          navigate("/mentor")
          resetFilter()
          resetFlag()
          setHamburg(false)
        }}>Mentor</Text>
        <Text onClick={() => {
          navigate("/notice")
          resetFilter()
          resetFlag()
          setHamburg(false)
        }}>Notice</Text>
        <Text onClick={() => {
          navigate("/showcase")
          resetFilter()
          resetFlag()
          setHamburg(false)
        }}>H.O.F</Text>
        <Text onClick={() => {
          navigate("/support")
          resetFilter()
          resetFlag()
          setHamburg(false)
        }}>Support</Text>
      </TextWrapper>
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 10px 10px 0px 0px;
  z-index: 101;
  user-select: none;
`;

const CloseBtn = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  border: 1px solid #ADADAD;
  border-radius: 100%;
  color: #ADADAD;

  &:active {
    border: 1px solid #222020;
    color: #222020;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  color: #222020;
`;

const Text = styled.div`
  width: 100%;
`;

export default MobileNavModal;