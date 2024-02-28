import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BG_1 from '../assets/images/sanpati_portfolio_07.webp';
import BG_2 from '../assets/images/escape_portfolio_15.webp';
import BG_3 from '../assets/images/escape_portfolio_07.webp';

const Schedule = () => {

  const navigate = useNavigate();
  const [background, setBackground] = useState<string>(BG_1);

  return (
    <LayOutContainer src={background}>
      <TranslateButton
        onMouseOver={() => setBackground(BG_1)}
        onClick={() => {
          localStorage.setItem("language", "english")
          navigate("/");
        }}>
        English
      </TranslateButton>
      <TranslateButton
        onMouseOver={() => setBackground(BG_2)}
        onClick={() => {
          localStorage.setItem("language", "japanese")
          navigate("/");
        }}>
        日本語
      </TranslateButton>
      <TranslateButton
        style={{fontFamily: "Pretendard"}}
        onMouseOver={() => setBackground(BG_3)}
        onClick={() => {
          localStorage.setItem("language", "korean")
          navigate("/");
        }}>
        한국어
      </TranslateButton>
    </LayOutContainer>
  )
};

const LayOutContainer = styled.div<{ src : string }>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #ffffff;
  z-index: 103;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TranslateButton = styled.div`
  width: 100%;
  height: 100%;
  font-family: "GenEiPOPlePw_Bk";
  font-size: 50px;
  font-weight: 700;
  line-height: normal;
  background-color: #00000081;
  color: #FFFFFF;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    background-color: #e9e9e981;
    color: #575757;
    font-size: 53px;
  }
`;

export default Schedule;