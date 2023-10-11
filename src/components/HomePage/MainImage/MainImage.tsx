import React from 'react'
import './MainImage.css';
import styled from 'styled-components';
import Character from '../../../assets/images/maincharacter.png';
import Cloud1 from '../../../assets/images/cloud1.png';
import Cloud2 from '../../../assets/images/cloud2.png';
import Cloud3 from '../../../assets/images/cloud3.png';

const MainImage = () => {
  return (
    <ImageLayout>
        <CharacterImage className='CharacterImage' src={Character}/>
        <CloudsImage className='CloudsImage1' src={Cloud3}/>
        <CloudsImage
            className='CloudsImage2'
            src={Cloud2}
            style={{bottom: "250px", left: "600px"}}/>
        <CloudsImage
            className='CloudsImage3'
            src={Cloud1}
            style={{bottom: "700px", left: "700px"}}/>
    </ImageLayout>
  )
};

const ImageLayout = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const CharacterImage = styled.img`
    width: 747px;
    height: 900px;
    object-fit: contain;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 80;
`;

const CloudsImage = styled.img`
    width: 800px;
    height: 350px;
    object-fit: contain;
    position: absolute;
    bottom: 500px;
    left: 0;
    z-index: 70;
    opacity: 0;
`;

export default MainImage;