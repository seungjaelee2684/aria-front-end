import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components';
import { BoxContainer } from './InformUpload';
import Example from '../../assets/images/discordcounseling_01.webp';
import { MdDriveFolderUpload } from "react-icons/md";

const CurriculumUpload = () => {

  const [imageList, setImageList] = useState<string[]>([]);

  const onChangeFileAddHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e?.target.files;
    console.log(fileList);
  };

  return (
    <BoxContainer>
      <ImageUploadContainer>
        <ExampleImage src={Example} alt='' />
        <InputWrapper>
          <InputLabel htmlFor='files'>
            <DefaultBox>
              <Icon>
                <MdDriveFolderUpload />
              </Icon>
              이미지 파일을 업로드해주세요.
            </DefaultBox>
          </InputLabel>
          <FileInput
            type='file'
            id='files'
            multiple
            onChange={onChangeFileAddHandler} />
        </InputWrapper>
      </ImageUploadContainer>
    </BoxContainer>
  )
};

const ImageUploadContainer = styled.div`
  width: 96%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ExampleImage = styled.img`
  width: 500px;
  height: auto;
  object-fit: cover;
`;

const InputWrapper = styled.div`
  width: 90%;
  height: 120px;
  position: relative;
  overflow-x: auto;
  border: 2px dotted #ADADAD;
  border-radius: 5px;
  background-color: #e9e9e9;
`;

const DefaultBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 500;
  color: #222020;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

const InputLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

export default CurriculumUpload;