import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components';
import { BoxContainer } from './InformUpload';
import Example from '../../assets/images/discordcounseling_01.webp';
import { MdDriveFolderUpload } from "react-icons/md";
import { IoClose } from "react-icons/io5";

interface CurriculumUploadProps {
  mentorImage: any;
  setMentorImage: React.Dispatch<React.SetStateAction<any>>;
};

const CurriculumUpload : React.FC<CurriculumUploadProps> = ({ mentorImage, setMentorImage }) => {

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
        setMentorImage({...mentorImage, curriculum_image: curriculum_image});
        setImageList(imageList);
      };
    };
  };

  const onClickRemoveHandler = (id : number) => {
    const newCurriculum = curriculum_image.filter((item : File, index : number) => index !== id);
    const newImageList = imageList.filter((item, index) => index !== id);
    setMentorImage({...mentorImage, curriculum_image: newCurriculum});
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
              {imageList?.map((item : string, index : number) => {
                return (
                  <ImageWrapper key={index}>
                    <RemoveButton onClick={() => onClickRemoveHandler(index)}>
                      <IoClose />
                    </RemoveButton>
                    <PreviewImage src={item} alt=''/>
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
            * 예시 사진에 표시된 이미지를 이곳에 업로드해주세요.
          </Text>
          <Text>
            * 커리큘럼 이미지의 파일명을 규칙에 맞게 변경한 뒤 업로드해주세요. (ex: Sanpati_Curriculum_ENG.webp)
          </Text>
        </ExplainContainer>
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

const ImagePreviewBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 3px;
  box-shadow: #22202080 0px 0px 4px 0px;
  position: relative;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemoveButton = styled.div`
  width: 16px;
  height: 16px;
  font-size: 14px;
  color: #FFFFFF;
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #5C9DFF;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ExplainContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
  font-family: "Pretendard";
  color: #222020;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
`;

export default CurriculumUpload;