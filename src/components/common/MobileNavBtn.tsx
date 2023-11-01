import React, { useState } from 'react'
import styled from 'styled-components';
import Home from '../../assets/logos/mobilelogo.png';
import { NavigateFunction } from 'react-router-dom';
import NavigateBtn from '../../assets/icons/list.png';
import MobileNavModal from './MobileNavModal/MobileNavModal';
import MobileSNS from './MobileSNS/MobileSNS';
import { IoShareSocialOutline } from 'react-icons/io5';
import { GrHomeRounded } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';

interface MobileNavBtnProps {
    navigate: NavigateFunction;
}

const MobileNavBtn : React.FC<MobileNavBtnProps> = ({ navigate }) => {

    const [hamburg, setHamburg] = useState<boolean>(false);
    const [snsModal, setSnsModal] = useState<boolean>(false);

  return (
    <div style={{position: "relative"}}>
        <UnderHeaderContainer>
            <ButtonOutWrapper>
                <HomeButtonWrapper onClick={() => navigate("/")}>
                    <GrHomeRounded />
                </HomeButtonWrapper>
                    <HomeButton onClick={() => setSnsModal(!snsModal)}>
                        {snsModal 
                            ? <IoShareSocialOutline />
                            : <HomeBtnIcon src={Home}/>}
                    </HomeButton>
                <HomeButtonWrapper onClick={() => setHamburg(!hamburg)}>
                    <GiHamburgerMenu />
                </HomeButtonWrapper>
            </ButtonOutWrapper>
        </UnderHeaderContainer>
        {snsModal
            && <MobileSNS
                snsModal={snsModal}
                setSnsModal={setSnsModal}/>}
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
    width: 66%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: 0px auto;
`;

const HomeButtonWrapper = styled.div`
    width: 36px;
    height: 36px;
    margin-bottom: 12px;
    font-family: "Pretendard";
    font-size: 28px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222020;
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
    margin-bottom: 3px;
    font-family: "Pretendard";
    font-size: 40px;
    color: #222020;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
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
    width: 50px;
    height: 50px;
    object-fit: contain;
`;

export default MobileNavBtn;