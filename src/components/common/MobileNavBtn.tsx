import React, { useState } from 'react'
import styled from 'styled-components';
import Home from '../../assets/logos/mobilelogo.png';
import { NavigateFunction } from 'react-router-dom';
import NavigateBtn from '../../assets/icons/list.png';
import MobileNavModal from './MobileNavModal/MobileNavModal';
import MobileSNS from './MobileSNS/MobileSNS';
import { IoShareSocialOutline } from 'react-icons/io5';
import { IoHomeOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsBoxArrowLeft } from 'react-icons/bs';

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
                <ButtonBox onClick={() => navigate("/")}>
                    <ButtonWrapper>
                        <IoHomeOutline />
                    </ButtonWrapper>
                    Home
                </ButtonBox>
                    <HomeButton onClick={() => setSnsModal(!snsModal)}>
                        <HomeButtonInWrapper>
                            {snsModal 
                                ? <IoShareSocialOutline />
                                : <HomeBtnIcon src={Home}/>}
                        </HomeButtonInWrapper>
                    </HomeButton>
                <ButtonBox onClick={() => setHamburg(!hamburg)}>
                    <ButtonWrapper>
                        {hamburg ? <BsBoxArrowLeft /> : <RxHamburgerMenu />}
                    </ButtonWrapper>
                    Menu
                </ButtonBox>
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
    user-select: none;
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

const ButtonWrapper = styled.div`
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222020;
`;

const ButtonBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Pretendard";
    gap: 3px;
    font-size: 10px;
    font-weight: 600;
`;

const HomeButtonInWrapper = styled.div`
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 100%;
`;

const HomeButton = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 3px; */
    font-family: "Pretendard";
    font-size: 44px;
    color: #797979;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    background: linear-gradient(to bottom, #FFFFFF, #cccccc);
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
    width: 48px;
    height: 48px;
    object-fit: contain;
`;

export default MobileNavBtn;