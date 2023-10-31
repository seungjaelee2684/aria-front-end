import React from 'react'
import styled from 'styled-components';
import './MobileSNS.css';
import Instagram from '../../../assets/icons/insta.png';
import Twitter from '../../../assets/icons/twitter.png';
import Discord from '../../../assets/icons/discord.png';
import Youtube from '../../../assets/icons/youtube.png';
import InstagramDefault from '../../../assets/icons/instadefault.png';
import TwitterDefault from '../../../assets/icons/twitterdefault.png';
import DiscordDefault from '../../../assets/icons/discorddefault.png';
import YoutubeDefault from '../../../assets/icons/youtubedefault.png';

interface MobileSNSProps {
    snsModal: boolean;
    setSnsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSNS : React.FC<MobileSNSProps> = ({ snsModal, setSnsModal }) => {
  return (
    <div>
        <BackgroundContainer onClick={() => setSnsModal(false)}/>
        <IconBox
            bordercolor="1px solid #e54a58"
            style={{bottom: '70px', left: "25%"}}
            className='InstaIcon'>
            <Icon src={Instagram}/>
        </IconBox>
        <IconBox
            bordercolor="1px solid #33b2f9"
            style={{bottom: '120px', left: "36%"}}
            className='TwitterIcon'>
            <Icon src={Twitter}/>
        </IconBox>
        <IconBox
            bordercolor="1px solid #7489da"
            style={{bottom: '120px', left: "52%"}}
            className='DiscordIcon'>
            <Icon src={Discord}/>
        </IconBox>
        <IconBox
            bordercolor="1px solid #ff0000"
            style={{bottom: '70px', left: "63%"}}
            className='YoutubeIcon'>
            <Icon src={Youtube}/>
        </IconBox>
    </div>
  )
};

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  background-color: #22202030;
`;

const IconBox = styled.div<{ bordercolor : string }>`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${(props) => props.bordercolor};
    border-radius: 100%;
    background-color: #FCFCFC90;
    box-shadow: rgba(155, 151, 151, 0.808) 1px 1px 10px 1px;
    position: fixed;
    z-index: 98;
    bottom: 70px;
    left: 25%;
    opacity: 0;

    /* &::before {
        content: '';
        width: 100%;
        height: 100%;
        border: 1px solid;
        border-image: linear-gradient(${(props) => props.bordercolor});
        border-image-slice: 1;
        border-radius: 50%;
        position: absolute;
    } */
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
`;

export default MobileSNS;