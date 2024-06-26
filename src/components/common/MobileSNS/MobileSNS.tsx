import React from 'react'
import styled from 'styled-components';
import '../../../style/font/font.css';
import './MobileSNS.css';
import Instagram from '../../../assets/icons/insta.webp';
import Twitter from '../../../assets/icons/twitter.webp';
import Discord from '../../../assets/icons/discord.webp';
import Youtube from '../../../assets/icons/youtube.webp';
import { useRecoilState, useRecoilValue } from 'recoil';
import { translate } from '../../../store/Translation';
import { AlertModalOpen } from '../../../store/AlertModalOpen';
import { MdClose } from 'react-icons/md';
import { BsInstagram, BsDiscord, BsYoutube, BsTwitterX } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";

interface MobileSNSProps {
    snsModal: boolean;
    setSnsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSNS : React.FC<MobileSNSProps> = ({ snsModal, setSnsModal }) => {

    const language = localStorage.getItem("language");
    const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);

  return (
    <MobileSNSModalContainer className='mobile-SNS-modal'>
        <CloseButton onClick={() => setSnsModal(false)}>
            <MdClose />
        </CloseButton>
        <ModalTitleContainer>
            <MdOutlineSupervisorAccount />
            SNS
        </ModalTitleContainer>
        <IconWrapper>
            <InstaIconBox
                onClick={() => {
                    window.open("https://www.instagram.com/aria.artacademy/")
                    setSnsModal(false);
                }}>
                <Icon>
                    <BsInstagram />
                    <Text>
                        Instagram
                    </Text>
                </Icon>
            </InstaIconBox>
            <TwitterIconBox
                onClick={() => {
                    window.open("https://twitter.com/ARIA_Academy");
                    setSnsModal(false);
                }}>
                <Icon>
                    <BsTwitterX />
                    <Text>
                        TwitterX
                    </Text>
                </Icon>
            </TwitterIconBox>
            <DiscordIconBox
                onClick={() => {
                    window.open("https://discord.gg/N7SEvBds4F")
                    setSnsModal(false);
                }}>
                <Icon>
                    <BsDiscord />
                    <Text>
                        Discord
                    </Text>
                </Icon>
            </DiscordIconBox>
            <YoutubeIconBox
                onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}>
                <Icon>
                    <BsYoutube />
                    <Text>
                        Youtube
                    </Text>
                </Icon>
            </YoutubeIconBox>
        </IconWrapper>
    </MobileSNSModalContainer>
  )
};

// const BackgroundContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 98;
//   background-color: #22202070;
// `;

const MobileSNSModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 102;
    background-color: #222020;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
`;

const ModalTitleContainer = styled.div`
    font-family: "Pretendard";
    font-size: 32px;
    font-weight: 700;
    line-height: normal;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const CloseButton = styled.div`
    font-size: 32px;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #FFFFFF;
`;

const IconWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const InstaIconBox = styled.div`
    width: 80%;
    height: 60px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background: linear-gradient(to right, #f9cc01, #fa1f02, #b93382, #914bc4);
    cursor: pointer;
    /* box-shadow: rgba(94, 92, 92, 0.808) 1px 1px 10px 1px; */
`;

const TwitterIconBox = styled(InstaIconBox)`
    background: none;
    background-color: #000000;
    /* box-shadow: rgba(94, 92, 92, 0.808) 1px 1px 10px 1px; */
`;

const DiscordIconBox = styled(InstaIconBox)`
    background: none;
    background-color: #7489da;
    /* box-shadow: rgba(94, 92, 92, 0.808) 1px 1px 10px 1px; */
`;

const YoutubeIconBox = styled(InstaIconBox)`
    background: none;
    background-color: #ff0000;
    /* box-shadow: rgba(94, 92, 92, 0.808) 1px 1px 10px 1px; */
`;

const Icon = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 50px;
    font-size: 28px;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 26px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
`;

export default MobileSNS;