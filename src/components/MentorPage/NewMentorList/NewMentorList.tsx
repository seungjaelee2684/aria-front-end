import React, { useEffect } from 'react'
import '../../../style/font/font.css';
import styled from 'styled-components';
import { NewMentorListData } from '../../../data/NewMentorData';

interface NewMentorListProps {
    imageRef: React.RefObject<HTMLDivElement>;
    slideCurrent: number;
    prevCurrent: number | undefined;
    setPrevCurrent: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const NewMentorList : React.FC<NewMentorListProps> = ({ imageRef, slideCurrent, prevCurrent, setPrevCurrent }) => {

    return (
        <ImageSlideContainer>
            {/* <MentorWrapper> */}
            {NewMentorListData?.map((item : any, index : number) => {
                return (
                    <div
                        ref={imageRef}
                        key={item?.id}
                        className={(slideCurrent === NewMentorListData?.indexOf(item))
                            ? "ImageSlideContainer"
                            : (prevCurrent === NewMentorListData?.indexOf(item))
                                ? "ImageContainer"
                                : "NotActionImage"}>
                        <ImageBox src={item?.slideimage.background}/>
                        {(item?.status === "Left")
                            ? <NicknameLeftContainer
                                src={item?.slideimage.nickname}
                                alt=''/>
                            : (index === 0)
                              ? <FirstNicknameContainer 
                                src={item?.slideimage.nickname}
                                alt=''/>
                              : <NicknameContainer 
                                src={item?.slideimage.nickname}
                                alt=''/>}
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

  @media screen and (max-width: 836px) {
    height: 300px;
  }
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
  width: 70%;
  height: auto;
  object-fit: cover;
  user-select: none;
  position: absolute;
  left: 10%;
  top: 35%;

  @media screen and (max-width: 1320px) {
    top: 40%;
    width: 85%;
  }

  @media screen and (max-width: 500px) {
    top: 50%;
    width: 90%;
    left: 8%;
  }
`;

const FirstNicknameContainer = styled.img`
  width: 42%;
  height: auto;
  object-fit: cover;
  user-select: none;
  position: absolute;
  left: 10%;
  top: 35%;

  @media screen and (max-width: 1320px) {
    top: 40%;
    width: 48%;
  }

  @media screen and (max-width: 500px) {
    top: 50%;
    width: 50%;
    left: 8%;
  }
`;

const NicknameLeftContainer = styled.img`
  width: 70%;
  height: auto;
  object-fit: cover;
  user-select: none;
  position: absolute;
  right: 10%;
  top: 35%;
  user-select: none;

    @media screen and (max-width: 1320px) {
      top: 40%;
      width: 85%;
    }

    @media screen and (max-width: 500px) {
      top: 50%;
      width: 90%;
      left: 8%;
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