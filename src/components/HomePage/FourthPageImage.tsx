import React from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components'
import { BackgroundImage, ImageBoxWrapper, MainImage } from './FirstPageImage';
import FourthBG from '../../assets/images/mainpage/4.webp';
import { useRecoilValue } from 'recoil';
import { MainPageNumber } from '../../store/MainPageNumber';

interface FourthPageImageProps {
  mainPageTextChange: Function;
};

const FourthPageImage : React.FC<FourthPageImageProps> = ({ mainPageTextChange }) => {
  
  const scrollIndex = useRecoilValue(MainPageNumber);
  
  return (
    <ImageBoxWrapper>
      <BackgroundImage src={FourthBG} alt=''/>
      <FourthMainLayout>
        <FourthLayOut>
          <CardBox>

          </CardBox>
          <CardBox>
            
          </CardBox>
          <CardBox>
            
          </CardBox>
        </FourthLayOut>
        <PageNumberWrapper>
          <PageNumber style={{backgroundColor: "#FFFFFF"}}/>
          <PageNumber />
          <PageNumber />
          <PageNumber />
        </PageNumberWrapper>
      </FourthMainLayout>
    </ImageBoxWrapper>
  )
};

const FourthMainLayout = styled(MainImage)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FourthLayOut = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 50px;
`;

const CardBox = styled.div`
  width: 400px;
  height: 500px;
  border: 4px solid #222020;
  background-color: #FFFFFF;
`;

const PageNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const PageNumber = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: #ADADAD;
  cursor: pointer;
`;

export default FourthPageImage;