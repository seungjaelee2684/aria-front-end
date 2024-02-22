import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components';
import { BoxContainer } from './InformUpload';
import Example from '../../assets/images/discordcounseling_01.webp';
import { IoClose } from "react-icons/io5";
import { MdDriveFolderUpload } from "react-icons/md";
import {
  DefaultBox,
  ExampleImage,
  ExplainContainer,
  FileInput,
  Icon,
  ImagePreviewBox,
  ImageUploadContainer,
  ImageWrapper,
  InputLabel,
  InputWrapper,
  PreviewImage,
  RemoveButton,
  Text
} from './CurriculumUpload';

interface PortfolioUploadProps {
  mentorImage: any;
  setMentorImage: React.Dispatch<React.SetStateAction<any>>;
};

const PortfolioUpload : React.FC<PortfolioUploadProps> = ({ mentorImage, setMentorImage }) => {
  const { portfolio_image } = mentorImage;

  const [imageList, setImageList] = useState<string[]>([]);

  const onChangeFileAddHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e?.target.files;
    if (fileList && fileList.length > 0) {
      for (let i = 0; i < fileList.length; i++) {
        const blobImage = fileList[i];
        const imageUrl = URL.createObjectURL(fileList[i]);
        portfolio_image.push(blobImage);
        imageList.push(imageUrl);
        setMentorImage({ ...mentorImage, portfolio_image: portfolio_image });
        setImageList(imageList);
      };
    };
  };

  const onClickRemoveHandler = (id: number) => {
    const newPortfolio = portfolio_image.filter((item: File, index: number) => index !== id);
    const newImageList = imageList.filter((item, index) => index !== id);
    setMentorImage({ ...mentorImage, portfolio_image: newPortfolio });
    setImageList(newImageList);
  };

  // console.log("통신 데이터", portfolio_image, "URL", imageList);

  return (
    <BoxContainer>
      <ImageUploadContainer>
        <ExampleImage src={Example} alt='' />
        <InputWrapper>
          {(imageList.length > 0)
            ? <ImagePreviewBox>
              {imageList?.map((item: string, index: number) => {
                return (
                  <ImageWrapper key={index}>
                    <RemoveButton onClick={() => onClickRemoveHandler(index)}>
                      <IoClose />
                    </RemoveButton>
                    <PreviewImage src={item} alt='' />
                  </ImageWrapper>
                )
              })}
            </ImagePreviewBox>
            : <InputLabel htmlFor='portfolioFiles'>
              <DefaultBox>
                <Icon>
                  <MdDriveFolderUpload />
                </Icon>
                클릭해서 이미지 파일을 업로드해주세요. (드래그 X)
              </DefaultBox>
            </InputLabel>}
          <FileInput
            type='file'
            id='portfolioFiles'
            multiple
            onChange={onChangeFileAddHandler} />
        </InputWrapper>
        <ExplainContainer>
          <Text>
            * 예시 사진처럼 표시된 부분에 필요한 이미지를 이곳에 업로드해주세요.
          </Text>
          <Text>
            * 포트폴리오 이미지의 파일명을 규칙에 맞게 변경한 후 업로드해주세요.
          </Text>
          <Text>
            (ex: sanpati_portfolio_01.webp)
          </Text>
        </ExplainContainer>
      </ImageUploadContainer>
    </BoxContainer>
  )
};

export default PortfolioUpload;