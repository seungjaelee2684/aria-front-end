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

const NewMentorList: React.FC<NewMentorListProps> = ({ imageRef, slideCurrent, prevCurrent, setPrevCurrent }) => {

  return (
    <ImageSlideContainer>
      {NewMentorListData?.map((item: any, index: number) => {
        return (
          <div
            ref={imageRef}
            key={item?.id}
            className={(slideCurrent === index)
              ? "ImageSlideContainer"
              : (prevCurrent === index)
                ? "ImageContainer"
                : "NotActionImage"}>
            <ImageBox src={item?.slideimage.background} />
            {(item?.status === "Left")
              ? <NicknameRightContainer
                src={item?.slideimage.nickname}
                alt='' />
              : <NicknameContainer
                src={item?.slideimage.nickname}
                alt='' />}
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

const NicknameContainer = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  user-select: none;
  position: absolute;
  left: 10%;
  top: 20%;

  @media screen and (max-width: 1920px) {
    top: 40%;
    width: 70%;
  }

  @media screen and (max-width: 1320px) {
    top: 50%;
    width: 80%;
  }

  @media screen and (max-width: 836px) {
    top: 35%;
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    top: 45%;
    width: 90%;
    left: 8%;
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