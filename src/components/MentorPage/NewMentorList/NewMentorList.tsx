import React, { useEffect } from 'react'
import './NewMentorList.css';
import styled from 'styled-components';
import Image from '../../../assets/images/testImage.png';
import Image2 from '../../../assets/images/mainimage.jpg';
import { NewMentorListData } from '../../../data/NewMentorData';
import MentorNickname from '../../../assets/images/raplaname.png';

interface NewMentorListProps {
    japanese: boolean;
    imageRef: React.RefObject<HTMLDivElement>;
    slideCurrent: number;
}

const NewMentorList : React.FC<NewMentorListProps> = ({ japanese, imageRef, slideCurrent }) => {

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         if (imageRef.current) {
    //             imageRef.current.style.animation = "slide_end 1s forwards"
    //         };
    //         console.log("지금이니");
    //     }, 4100);
    
    //     return () => {
    //       clearInterval(intervalId);
    //     };
    // }, [slideCurrent]);

    return (
        <ImageSlideContainer ref={imageRef}>
            <MentorWrapper>
                <ImageBox className='ImageSlideContainer' src={NewMentorListData[slideCurrent].image}></ImageBox>
                {/* <IntroduceMentorContainer>
                    {japanese
                        ? NewMentorListData[slideCurrent].englishname
                        : `${NewMentorListData[slideCurrent].nickname} 선생님`}
                    <IntroduceText>
                        {japanese
                            ? "内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                            : "내용내용내용내용내용내용내용내용내용내용내용내용내용내용"}
                    </IntroduceText>
                </IntroduceMentorContainer> */}
                <NicknameContainer className='ImageContainer' src={MentorNickname} />
            </MentorWrapper>
            {/* <MentorWrapper>
                <ImageBox src={Image2}></ImageBox>
                <IntroduceMentorContainer>
                    {japanese ? "メンター 先生" : "멘토 선생님"}
                    <IntroduceText>
                        {japanese
                            ? "内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                            : "내용내용내용내용내용내용내용내용내용내용내용내용내용내용"}
                    </IntroduceText>
                </IntroduceMentorContainer>
            </MentorWrapper>
            <MentorWrapper>
                <ImageBox src={Image}></ImageBox>
                <IntroduceMentorContainer>
                    {japanese ? "メンター 先生" : "멘토 선생님"}
                    <IntroduceText>
                        {japanese
                            ? "内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                            : "내용내용내용내용내용내용내용내용내용내용내용내용내용내용"}
                    </IntroduceText>
                </IntroduceMentorContainer>
            </MentorWrapper>
            <MentorWrapper>
                <ImageBox src={Image2}></ImageBox>
                <IntroduceMentorContainer>
                    {japanese ? "メンター 先生" : "멘토 선생님"}
                    <IntroduceText>
                        {japanese
                            ? "内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                            : "내용내용내용내용내용내용내용내용내용내용내용내용내용내용"}
                    </IntroduceText>
                </IntroduceMentorContainer>
            </MentorWrapper> */}
        </ImageSlideContainer>
    )
};

const ImageSlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fafafa;
`;

const MentorWrapper = styled.div`
  min-width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  /* gap: 24px; */
  margin: 0px auto;
`;

const ImageBox = styled.div<{ src: string }>`
  width: 50%;
  height: 700px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const IntroduceMentorContainer = styled.div`
  font-family: "Giants-Inline";
  font-size: 32px;
  color: #222020;
  font-weight: 800;
  line-height: 150%;
  max-width: 15%;
  max-height: 550px;
  display: grid;
  gap: 20px;
  user-select: none;
  padding: 0px 40px;
`;

const NicknameContainer = styled.img`
  width: 500px;
  height: 350px;
  object-fit: cover;
  user-select: none;
  /* padding: 0px 40px; */
  opacity: 0;
`;

const IntroduceText = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  color: #222020;
  font-weight: 400;
  line-height: 140%;
`;

export default NewMentorList;