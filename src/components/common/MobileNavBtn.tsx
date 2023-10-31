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

                    <HomeButton>
                        <HomeBtnIcon src={Home} onClick={() => navigate("/")}/>
                    </HomeButton>

                <HamburgButton src={NavigateBtn} onClick={() => setHamburg(!hamburg)}/>
            </ButtonOutWrapper>
        </UnderHeaderContainer>
        {hamburg
            && <MobileNavModal
                navigate={navigate}
                hamburg={hamburg}
                setHamburg={setHamburg}/>}
    </div>
  )
};

const UnderHeaderContainer = styled.div`
    width: 100%;
    height: 60px;
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
    align-items: end;
    margin: 0px auto;
`;

const HamburgButton = styled.img`
    width: 36px;
    height: 36px;
    object-fit: contain;
    margin-bottom: 12px;
`;

const HomeButton = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: #FFFFFF;
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeButtonContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: end;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const HomeBtnIcon = styled.img`
    width: 54px;
    height: 54px;
    object-fit: contain;
`;

export default MobileNavBtn;