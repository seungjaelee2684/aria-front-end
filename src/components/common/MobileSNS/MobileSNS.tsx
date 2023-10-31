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
        <InstaIcon
            src={InstagramDefault}
            className='InstaIcon'/>
        <TwitterIcon
            src={TwitterDefault}
            className='TwitterIcon'/>
        <DiscordIcon
            src={DiscordDefault}
            className='DiscordIcon'/>
        <YoutubeIcon
            src={YoutubeDefault}
            className='YoutubeIcon'/>
    </div>
  )
};

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #22202010;
`;

export const InstaIcon = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
    position: fixed;
    z-index: 99;
    bottom: 70px;
    left: 25%;
`;

const TwitterIcon = styled(InstaIcon)`
    bottom: 120px;
    left: 36%;
`;

const DiscordIcon = styled(InstaIcon)`
    bottom: 120px;
    left: 52%;
`;

const YoutubeIcon = styled(InstaIcon)`
    bottom: 70px;
    left: 62%;
`;

export default MobileSNS;