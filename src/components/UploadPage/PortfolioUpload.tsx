import React, { useState } from 'react'
import styled from 'styled-components';
import { BoxContainer } from './InformUpload';

const PortfolioUpload = () => {
  const { curriculum_image } = mentorImage;

  const [imageList, setImageList] = useState<string[]>([]);

  const onChangeFileAddHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e?.target.files;
    if (fileList && fileList.length > 0) {
      for (let i = 0; i < fileList.length; i++) {
        const blobImage = fileList[i];
        const imageUrl = URL.createObjectURL(fileList[i]);
        curriculum_image.push(blobImage);
        imageList.push(imageUrl);
        setMentorImage({ ...mentorImage, curriculum_image: curriculum_image });
        setImageList(imageList);
      };
    };
  };

  const onClickRemoveHandler = (id: number) => {
    const newCurriculum = curriculum_image.filter((item: File, index: number) => index !== id);
    const newImageList = imageList.filter((item, index) => index !== id);
    setMentorImage({ ...mentorImage, curriculum_image: newCurriculum });
    setImageList(newImageList);
  };

  console.log("통신 데이터", curriculum_image, "URL", imageList);

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
            : <InputLabel htmlFor='files'>
              <DefaultBox>
                <Icon>
                  <MdDriveFolderUpload />
                </Icon>
                클릭해서 이미지 파일을 업로드해주세요. (드래그 X)
              </DefaultBox>
            </InputLabel>}
          <FileInput
            type='file'
            id='files'
            multiple
            onChange={onChangeFileAddHandler} />
        </InputWrapper>
        <ExplainContainer>
          <Text>
            * 예시 사진처럼 표시된 부분에 필요한 이미지를 이곳에 업로드해주세요.
          </Text>
          <Text>
            * 커리큘럼 이미지의 파일명을 규칙에 맞게 변경한 뒤 업로드해주세요.
          </Text>
          <Text>
            (ex: Sanpati_Curriculum1_ENG.webp)
          </Text>
        </ExplainContainer>
      </ImageUploadContainer>
    </BoxContainer>
  )
};

export default PortfolioUpload;