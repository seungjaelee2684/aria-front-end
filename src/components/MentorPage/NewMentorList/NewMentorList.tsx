import React, { useEffect } from 'react'
import '../../../style/font/font.css';
import styled from 'styled-components';
// import { NewMentorListData } from '../../../data/NewMentorData';

interface NewMentorListProps {
  imageRef: React.RefObject<HTMLDivElement>;
  slideCurrent: number;
  prevCurrent: number | undefined;
  setPrevCurrent: React.Dispatch<React.SetStateAction<number | undefined>>;
  NewMentorListData: any;
}

const NewMentorList: React.FC<NewMentorListProps> = ({ imageRef, slideCurrent, prevCurrent, setPrevCurrent, NewMentorListData }) => {

  return (
    <ImageSlideContainer>
      {NewMentorListData?.map((item: any, index: number) => {
        return (
          <div
            ref={imageRef}
            key={item?.mentorsId}
            className={(slideCurrent === index)
              ? "ImageSlideContainer"
              : (prevCurrent === index)
                ? "ImageContainer"
                : "NotActionImage"}>
            <ImageBox src={item?.bannerImage} />
            <NicknameContainer src={item?.nicknameImage} alt='배너 닉네임' />
          </div>
        )
      })}
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

const ImageBox = styled.div<{ src: string }>`
  width: 80%;
  height: 900px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  /* opacity: 0; */

  @media screen and (max-width: 1920px) {
    width: 100%;
    height: 700px;
  }

  @media screen and (max-width: 1320px) {
    height: 400px;
  }

  @media screen and (max-width: 836px) {
    height: 260px;
  }
`;

const NicknameContainer = styled.img`
  width: 60%;
  height: auto;
  object-fit: cover;
  user-select: none;
  position: absolute;
  left: 5%;
  top: 0%;

  @media screen and (max-width: 1920px) {
    left: 8%;
    top: 8%;
    width: 65%;
  }

  @media screen and (max-width: 1320px) {
    top: 0%;
  }

  @media screen and (max-width: 836px) {
    top: 10%;
    width: 60%;
  }

  @media screen and (max-width: 500px) {
    top: 20%;
    width: 90%;
  }
`;

const NicknameRightContainer = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  user-select: none;
  position: absolute;
  right: 10%;
  top: 20%;
  user-select: none;

  @media screen and (max-width: 1920px) {
    top: 40%;
    width: 70%;
  }

  @media screen and (max-width: 1320px) {
    top: 35%;
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    top: 50%;
    width: 90%;
    left: 8%;
  }
`;

export default NewMentorList;