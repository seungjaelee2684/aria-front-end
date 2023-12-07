import React from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { popUpOpen } from '../../store/PopUpOpen';

const PopUp = () => {

    const [, setIsPopUp]= useRecoilState(popUpOpen);

  return (
    <PopUpContainer onClick={() => setIsPopUp(false)}>
        PopUp
    </PopUpContainer>
  )
};

const PopUpContainer = styled.div`
    position: fixed;
    z-index: 99;
    top: 20%;
    right: 20%;
    width: 300px;
    height: 400px;
    background-color: #FFFFFF;
`;

export default PopUp;