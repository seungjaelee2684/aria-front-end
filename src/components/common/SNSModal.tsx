import React from 'react'
import styled from 'styled-components';
import Copy from '../../assets/icons/copy.png';

interface SNSModalProps {
  sns: boolean;
  setSns: React.Dispatch<React.SetStateAction<boolean>>;
}

const SNSModal : React.FC<SNSModalProps> = ({ sns, setSns }) => {

  const onClickCopyHandler = async ( text : string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
      setSns(false);
      console.log("복사된 링크 -> ", text);
    } catch (e) {
      alert("복사에 실패하였습니다.");
      console.log("Error -> ", e);
    };
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        https://discord.gg/N7SEvBds4F
        <CopyIcon
          src={Copy}
          onClick={() => {onClickCopyHandler("https://discord.gg/N7SEvBds4F")}}/>
      </ModalWrapper>
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  position: absolute;
  z-index: 101;
  min-width: 250px;
  height: 25px;
  background-color: #1d466f;
  color: #FCFCFC;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  top: 60px;
  right: 45px;
  border-radius: 5px;
  cursor: default;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #61a0de80;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px 8px;
  gap: 20px;
`;

const CopyIcon = styled.img`
  width: 24px;
  height: 24px;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export default SNSModal;