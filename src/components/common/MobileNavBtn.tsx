import React, { useState } from 'react'
import styled from 'styled-components';
import Home from '../../assets/logos/mainlogo.png';
import { NavigateFunction } from 'react-router-dom';
import NavigateBtn from '../../assets/icons/list.png';
import MobileNavModal from './MobileNavModal/MobileNavModal';

interface MobileNavBtnProps {
    navigate: NavigateFunction;
}

const MobileNavBtn : React.FC<MobileNavBtnProps> = ({ navigate }) => {

    const [hamburg, setHamburg] = useState<boolean>(false);

  return (
    <div style={{position: "relative"}}>
        <UnderHeaderContainer>
            <ButtonOutWrapper>
                <HamburgButton src={NavigateBtn} onClick={() => setHamburg(!hamburg)}/>
                <HomeBottonContainer>
                    <HomeBtnIcon src={Home} onClick={() => navigate("/")}/>
                </HomeBottonContainer>
                <HamburgButton src={NavigateBtn} onClick={() => setHamburg(!hamburg)}/>
            </ButtonOutWrapper>
        </UnderHeaderContainer>
        {hamburg
            && <MobileNavModal
                navigate={navigate}
                setHamburg={setHamburg}/>}
    </div>
  )
};

const UnderHeaderContainer = styled.div`
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    z-index: 99;
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
`;

const ButtonOutWrapper = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
`;

const HamburgButton = styled.img`
    width: 34px;
    height: 34px;
    object-fit: contain;
`;

const HomeBottonContainer = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background-color: #FFFFFF;
    border: 1px solid #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeBtnIcon = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
`;

export default MobileNavBtn;