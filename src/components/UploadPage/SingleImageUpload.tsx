import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components';
import { BoxContainer } from './InformUpload';
import Example from '../../assets/images/discordcounseling_01.webp';
import { MdDriveFolderUpload } from "react-icons/md";

interface SingleImageUploadProps {
  mentorImage: any;
  setMentorImage: React.Dispatch<React.SetStateAction<any>>;
};

const SingleImageUpload : React.FC<SingleImageUploadProps> = ({ mentorImage, setMentorImage }) => {
  
  const { banner_image, nickname_image, thumbnail_image } = mentorImage;
  
  

  return (
    <BoxContainer>
      <ContentContainer>
        <LaneContainer>
          <ImageExample src={Example} alt=''/>
          <InputWrapper>
            <InputLabel htmlFor='uploadFile'>
              <InputStyleBox>
                <Icon>
                  <MdDriveFolderUpload />
                </Icon>
                파일 업로드
              </InputStyleBox>
            </InputLabel>
            <InputTag type='file' id='uploadFile'/>
          </InputWrapper>
        </LaneContainer>
      </ContentContainer>
    </BoxContainer>
  )
};

const ContentContainer = styled.div`
  width: 96%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LaneContainer = styled.div`
  width: 96%;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 16px 10px;
  border-bottom: 1px dotted #ADADAD;
`;

const ImageExample = styled.img`
  min-width: 240px;
  height: 130px;
  object-fit: cover;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 24px;
`;

const InputLabel = styled.label`
  width: 100%;
  height: 60px;
  background-color: #e9e9e9;
  border: 1px solid #ADADAD;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
`;

const InputStyleBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  padding: 0px 0px 0px 40px;
  align-items: center;
  gap: 16px;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 500;
  line-height: 100%;
  color: #222020;
`;

const Icon = styled.div`
  font-size: 30px;
  width: 80px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #222020;
  border-radius: 8px;
  background-color: #abcdff;
  color: #222020;
`;

const InputTag = styled.input`
  display: none;
`;

const UploadImageNameBox = styled.div`
  width: 150px;
  height: 36px;
`;

export default SingleImageUpload;