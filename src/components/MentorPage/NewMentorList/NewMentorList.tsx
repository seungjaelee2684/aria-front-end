import React, { useEffect } from 'react'
import '../../../style/font/font.css';
import styled from 'styled-components';
import Image from '../../../assets/images/testImage.png';
import Image2 from '../../../assets/images/mainimage.jpg';
import { NewMentorListData } from '../../../data/NewMentorData';
import MentorNickname from '../../../assets/images/raplaname.png';

interface NewMentorListProps {
    language: string;
    imageRef: React.RefObject<HTMLDivElement>;
    slideCurrent: number;
    prevCurrent: number | undefined;
    setPrevCurrent: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const NewMentorList : React.FC<NewMentorListProps> = ({ language, imageRef, slideCurrent, prevCurrent, setPrevCurrent }) => {

    return (
        <ImageSlideContainer>
            {/* <MentorWrapper> */}
            {NewMentorListData?.map((item : any) => {
                return (
                    <div
                        ref={imageRef}
                        key={item?.id}
                        className={(slideCurrent === NewMentorListData?.indexOf(item))
                            ? "ImageSlideContainer"
                            : (prevCurrent === NewMentorListData?.indexOf(item))
                                ? "ImageContainer"
                                : "NotActionImage"}>
                        <ImageBox src={item?.image}/>
                        {/* <IntroduceMentorContainer>
                            {language
                                ? item?.englishname
                                : `${item?.nickname} 선생님`}
                            <IntroduceText>
                                {language
                                    ? "内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                                    : "내용내용내용내용내용내용내용내용내용내용내용내용내용내용"}
                            </IntroduceText>
                        </IntroduceMentorContainer> */}
                        <NicknameContainer 
                            // className='ImageContainer'
                            src={MentorNickname} />
                    </div>
                )
            })}
            {/* </MentorWrapper> */}
        </ImageSlideContainer>
    )
};

const ImageSlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #FCFCFC;
  position: relative;
`;

const MentorWrapper = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* gap: 24px; */
  margin: 0px auto;

  @media screen and (max-width: 1320px) {
        min-width: 100%;
    }
`;

const ImageBox = styled.div<{ src: string }>`
  width: 100%;
  height: 700px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  /* opacity: 0; */
`;

const IntroduceMentorContainer = styled.div`
  font-family: 'Pretendard';
  font-size: 48px;
  color: #da438e;
  font-weight: 800;
  line-height: 150%;
  max-width: 15%;
  max-height: 550px;
  display: grid;
  gap: 20px;
  user-select: none;
  padding: 0px 40px;
  position: absolute;
  left: 20%;
  top: 40%;
  background-color: #FCFCFC90;
  padding: 40px;
  border-radius: 10px;
`;

const NicknameContainer = styled.img`
  width: 500px;
  height: 350px;
  object-fit: cover;
  user-select: none;
  /* padding: 0px 40px; */
  position: absolute;
  left: 10%;
  top: 25%;

  @media screen and (max-width: 1320px) {
        position: absolute;
        width: 350px;
        height: 250px;
        top: 50%;
        right: 10%;
    }
`;

const IntroduceText = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  color: #222020;
  font-weight: 400;
  line-height: 140%;
`;

export default NewMentorList;