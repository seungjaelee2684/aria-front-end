import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Schedule = () => {

  const navigate = useNavigate();

  return (
    <LayOutContainer>
      <TranslateButton
        onClick={() => {
          localStorage.setItem("language", "english")
          navigate("/");
        }}>
        English
      </TranslateButton>
      <TranslateButton
        onClick={() => {
          localStorage.setItem("language", "japanese")
          navigate("/");
        }}>
        日本語
      </TranslateButton>
      <TranslateButton
        onClick={() => {
          localStorage.setItem("language", "korean")
          navigate("/");
        }}>
        한국어
      </TranslateButton>
    </LayOutContainer>
  )
};

const LayOutContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 103;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TranslateButton = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Pretendard";
  font-size: 50px;
  font-weight: 700;
  line-height: normal;
  color: #222020;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e9e9e9;
    color: #575757;
    font-size: 53px;
  }
`;

export default Schedule;