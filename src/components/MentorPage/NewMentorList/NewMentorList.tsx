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
                        className={(slideCurrent === index)
                            ? "ImageSlideContainer"
                            : (prevCurrent === index)
                                ? "ImageContainer"
                                : "NotActionImage"}>
                        <ImageBox src={item?.slideimage.background}/>
                        {(item?.status === "Left")
                            ? <NicknameRightContainer
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

const BigNicknameContainer = styled.img`
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
    width: 65%;
  }

  @media screen and (max-width: 500px) {
    top: 50%;
    width: 90%;
    left: 8%;
  }
`;

const BigNicknameRightContainer = styled.img`
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
    width: 48%;
  }

  @media screen and (max-width: 500px) {
    top: 50%;
    width: 50%;
    right: 8%;
  }
`;

const NicknameRightContainer = styled.img`
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
    width: 65%;
  }

  @media screen and (max-width: 500px) {
    top: 50%;
    width: 90%;
    left: 8%;
  }
`;

export default NewMentorList;