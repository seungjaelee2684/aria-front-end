import React from 'react'
import './NewMentorList.css';
import styled from 'styled-components';
import Image from '../../../assets/images/testImage.png';
import Image2 from '../../../assets/images/mainimage.jpg';
import { NewMentorListData } from '../../../data/NewMentorData';

interface NewMentorListProps {
    japanese: boolean;
    imageRef: React.RefObject<HTMLDivElement>;
    slideCurrent: number;
}

const NewMentorList : React.FC<NewMentorListProps> = ({ japanese, imageRef, slideCurrent }) => {
    return (
        <ImageSlideContainer className='ImageSlideContainer' ref={imageRef}>
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
            </MentorWrapper>
        </ImageSlideContainer>
    )
};

const ImageSlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const MentorWrapper = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #f3f3f3;
`;

const ImageBox = styled.div<{ src: string }>`
  width: 45%;
  height: 700px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const IntroduceMentorContainer = styled.div`
  font-family: "Pretendard";
  font-size: 32px;
  color: #222020;
  font-weight: 800;
  line-height: 150%;
  max-width: 15%;
  max-height: 550px;
  display: grid;
  gap: 20px;
  user-select: none;
`;

const IntroduceText = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  color: #222020;
  font-weight: 400;
  line-height: 140%;
`;

export default NewMentorList;