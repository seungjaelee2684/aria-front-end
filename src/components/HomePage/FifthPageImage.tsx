import React from 'react'
import '../../style/font/font.css';
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { BackgroundImage, ImageBoxWrapper, MainImage } from './FirstPageImage';
import { EmptyTitle, TitleText } from './SecondPageImage';
import FifthBG from '../../assets/images/mainpage/5.webp';
import { useRecoilValue } from 'recoil';
import { MainPageNumber } from '../../store/MainPageNumber';

interface FifthPageImageProps {
  mainPageTextChange: Function;
};

const FifthPageImage : React.FC<FifthPageImageProps> = ({ mainPageTextChange }) => {
    
  const scrollIndex = useRecoilValue(MainPageNumber);

  let titleArr : any = [];
  const secondPageTitle : string = "CONTACT US";
  for (let i = 0; i < secondPageTitle.length; i++) {
    titleArr.push({
      title: secondPageTitle[i],
      key: i
    });
  };
 
  return (
    <ImageBoxWrapper>
      <BackgroundImage src={FifthBG} alt=''/>
      <FifthLayout>
        <FifthTitle>
          {titleArr?.map((item : any, index: number) => {
            return (
              (item?.title === " ")
                ? <EmptyTitle />
                : <TitleText
                  className={(scrollIndex === 5) ? "fifth-title" : ""}
                  style={{
                    animationDelay: `${0.5 + index * 0.05}s`
                  }}>
                  {item?.title}
                </TitleText>
            )
          })}
        </FifthTitle>
      </FifthLayout>
    </ImageBoxWrapper>
  )
};

const FifthLayout = styled(MainImage)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FifthTitle = styled.div`
  font-family: "UniSansThin";
  font-size: 90px;
  line-height: normal;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  user-select: none;
`;

export default FifthPageImage;