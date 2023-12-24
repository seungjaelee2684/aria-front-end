import React, { useState } from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { BackgroundImage, ImageBoxWrapper, MainImage } from './FirstPageImage';
import ThirdBG from '../../assets/images/mainpage/3.webp';
import { useRecoilValue } from 'recoil';
import { MainPageNumber } from '../../store/MainPageNumber';
import MainSlideShow from './MainSlideShow';
import SlideBG from '../../assets/images/mainpage/Asset 94.webp';
import { MainBannertData } from '../../data/MainBannerData';

interface ThirdPageImageProps {
  mainPageTextChange: Function;
};

const ThirdPageImage : React.FC<ThirdPageImageProps> = ({ mainPageTextChange }) => {

  const [mainSlideCurrent, setMainSlideCurrent] = useState<number>(0);
  
  const scrollIndex = useRecoilValue(MainPageNumber);

  const onClickMainPrevHandler = () => {
    if (mainSlideCurrent === 0) {
      setMainSlideCurrent(MainBannertData?.length - 1);
    } else {
      setMainSlideCurrent(mainSlideCurrent - 1);
    };
  };

  const onClickMainNextHandler = () => {
    if (mainSlideCurrent === MainBannertData?.length - 1) {
      setMainSlideCurrent(0);
    } else {
      setMainSlideCurrent(mainSlideCurrent + 1);
    };
  };

  return (
    <ImageBoxWrapper>
      <BackgroundImage src={ThirdBG} alt=''/>
      <MainThirdContainer>
        <SlideContainer>
          <SlideBorderLine src={SlideBG} alt=''/>
          <MainSlideShow
            mainSlideCurrent={mainSlideCurrent}
            setMainSlideCurrent={setMainSlideCurrent}/>
        </SlideContainer>
        <SlideNumberWrapper>
          {MainBannertData?.map((item : any) => {
            return (
              (mainSlideCurrent === MainBannertData?.indexOf(item))
                ? <SlideNumber style={{backgroundColor: "#FCFCFC"}}/>
                : <SlideNumber />
            )
          })}
        </SlideNumberWrapper>
      </MainThirdContainer>
    </ImageBoxWrapper>
  )
};

const MainThirdContainer = styled(MainImage)`
  flex-direction: column;
  gap: 30px;
`;

const SlideContainer = styled.div`
  width: 76%;
  height: 50%;
  position: relative;
`;

const SlideBorderLine = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`;

const SlideNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const SlideNumber = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #868686;
  cursor: pointer;
`;

export default ThirdPageImage;