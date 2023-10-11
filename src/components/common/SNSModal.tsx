import React from 'react'
import styled from 'styled-components';
import Copy from '../../assets/icons/copy.png';

interface SNSModalProps {
  sns: string;
}

const SNSModal : React.FC<SNSModalProps> = ({ sns }) => {

  const onClickCopyHandler = async ( text : string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
      console.log("복사된 링크 -> ", text);
    } catch (e) {
      alert("복사에 실패하였습니다.");
      console.log("Error -> ", e);
    };
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        {sns}
        <CopyIcon
          src={Copy}
          onClick={() => {onClickCopyHandler("https://github.com/seungjaelee2684")}}/>
      </ModalWrapper>
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 20px;
  background-color: #1d466f;
  color: #FCFCFC;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  top: 40px;
  right: 0;
  border-radius: 5px;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #61a0de80;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 10px;
  position: relative;
`;

const CopyIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 5px;
  right: 10px;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export default SNSModal;