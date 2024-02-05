import React, { ChangeEvent, useState } from 'react'
import '../../style/font/font.css';
import styled from 'styled-components';
import { BoxContainer } from './InformUpload';
import Example from '../../assets/images/discordcounseling_01.webp';
import { MdDriveFolderUpload } from "react-icons/md";
import { IoClose } from "react-icons/io5";

interface SingleImageUploadProps {
  mentorImage: any;
  setMentorImage: React.Dispatch<React.SetStateAction<any>>;
};

const SingleImageUpload : React.FC<SingleImageUploadProps> = ({ mentorImage, setMentorImage }) => {
  
  const { banner_image, nickname_image, thumbnail_image } = mentorImage;
  
  type ImageDataType = {
    banner: string,
    nickname: string,
    thumbnail: string
  };
  const [imageData, setImageData] = useState<ImageDataType>({
    banner: "",
    nickname: "",
    thumbnail: ""
  });
  const { banner, nickname, thumbnail } = imageData;

  const onChangeBannerFileUpload = (e : ChangeEvent<HTMLInputElement>, id : string) => {
    const fileData = e?.target.files;
    if (fileData && fileData.length > 0) {
      for (let i = 0; i < fileData.length; i++) {
        const blobImage = fileData[i];
        const imageName = blobImage.name;

        if (id === "bannerFile") {
          setMentorImage({...mentorImage, banner_image: blobImage});
          setImageData({...imageData, banner: imageName});
        } else if (id === "nicknameFile") {
          setMentorImage({...mentorImage, nickname_image: blobImage});
          setImageData({...imageData, nickname: imageName});
        } else if (id === "thumbnailFile") {
          setMentorImage({...mentorImage, thumbnail_image: blobImage});
          setImageData({...imageData, thumbnail: imageName});
        };
      };
    };
  };

  const onClickRemoveDataHandler = (id : string) => {
    if (id === "bannerFile") {
      setMentorImage({...mentorImage, banner_image: null});
      setImageData({...imageData, banner: ""});
    } else if (id === "nicknameFile") {
      setMentorImage({...mentorImage, nickname_image: null});
      setImageData({...imageData, nickname: ""});
    } else if (id === "thumbnailFile") {
      setMentorImage({...mentorImage, thumbnail_image: null});
      setImageData({...imageData, thumbnail: ""});
    };
  };

  console.log("업로드", { banner_image, nickname_image, thumbnail_image }, "프리뷰", imageData);

  return (
    <BoxContainer>
      <ContentContainer>
        <LaneContainer>
          <ImageExample src={Example} alt=''/>
          <InputWrapper>
            <LabelWrapper>
            {(banner === "")
              ? <InputLabel htmlFor='bannerFile'>
                <InputStyleBox>
                  <Icon>
                    <MdDriveFolderUpload />
                  </Icon>
                  클릭해서 이미지 업로드 (드래그 X)
                </InputStyleBox>
              </InputLabel>
              : <UploadImageNameWrapper>
                <UploadImageNameBox>
                  <RemoveButton onClick={() => onClickRemoveDataHandler("bannerFile")}>
                    <IoClose />
                  </RemoveButton>
                  {banner}
                </UploadImageNameBox>
              </UploadImageNameWrapper>}
            </LabelWrapper>
            <InputTag
              type='file'
              id='bannerFile'
              onChange={(e) => onChangeBannerFileUpload(e, "bannerFile")}/>
            <Textwrapper>
              <ExplainText style={{color: "#de0000", fontWeight: "500"}}>
                * 필수 항목입니다.
              </ExplainText>
              <ExplainText>
                * 예시 사진처럼 표시된 부분에 필요한 이미지를 업로드해주세요. (배너)
              </ExplainText>
            </Textwrapper>
          </InputWrapper>
        </LaneContainer>
        <LaneContainer>
          <ImageExample src={Example} alt=''/>
          <InputWrapper>
            <LabelWrapper>
              {(nickname === "")
                ? <InputLabel htmlFor='nicknameFile'>
                  <InputStyleBox>
                    <Icon>
                      <MdDriveFolderUpload />
                    </Icon>
                    클릭해서 이미지 업로드 (드래그 X)
                  </InputStyleBox>
                </InputLabel>
                : <UploadImageNameWrapper>
                  <UploadImageNameBox>
                    <RemoveButton onClick={() => onClickRemoveDataHandler("nicknameFile")}>
                      <IoClose />
                    </RemoveButton>
                    {nickname}
                  </UploadImageNameBox>
                </UploadImageNameWrapper>}
            </LabelWrapper>
            <InputTag
              type='file'
              id='nicknameFile'
              onChange={(e) => onChangeBannerFileUpload(e, "nicknameFile")}/>
            <Textwrapper>
              <ExplainText style={{color: "#de0000", fontWeight: "500"}}>
                * 필수 항목입니다.
              </ExplainText>
              <ExplainText>
                * 예시 사진처럼 표시된 부분에 필요한 이미지를 업로드해주세요. (닉네임)
              </ExplainText>
            </Textwrapper>
          </InputWrapper>
        </LaneContainer>
        <LaneContainer>
          <ImageExample src={Example} alt=''/>
          <InputWrapper>
            <LabelWrapper>
              {(thumbnail === "")
                ? <InputLabel htmlFor='thumbnailFile'>
                  <InputStyleBox>
                    <Icon>
                      <MdDriveFolderUpload />
                    </Icon>
                    클릭해서 이미지 업로드 (드래그 X)
                  </InputStyleBox>
                </InputLabel>
                : <UploadImageNameWrapper>
                  <UploadImageNameBox>
                    <RemoveButton onClick={() => onClickRemoveDataHandler("thumbnailFile")}>
                      <IoClose />
                    </RemoveButton>
                    {thumbnail}
                  </UploadImageNameBox>
                </UploadImageNameWrapper>}
            </LabelWrapper>
            <InputTag
              type='file'
              id='thumbnailFile'
              onChange={(e) => onChangeBannerFileUpload(e, "thumbnailFile")}/>
            <Textwrapper>
              <ExplainText style={{color: "#de0000", fontWeight: "500"}}>
                * 필수 항목입니다.
              </ExplainText>
              <ExplainText>
                * 예시 사진처럼 표시된 부분에 필요한 이미지를 업로드해주세요. (썸네일)
              </ExplainText>
            </Textwrapper>
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

const LabelWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #e9e9e9;
  border: 1px solid #ADADAD;
  border-radius: 3px;
  position: relative;
`;

const InputLabel = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
`;

const InputTag = styled.input`
  display: none;
`;

const Textwrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ExplainText = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  color: #6a6a6a;
  text-align: start;
`;

const UploadImageNameWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0px 0px 0px 40px;
  display: flex;
  align-items: center;
`;

const UploadImageNameBox = styled.div`
  height: 36px;
  background-color: #5C9DFF;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "CinzelRegular";
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  color: #FFFFFF;
  padding: 0px 16px;
`;

const RemoveButton = styled.div`
  width: 14px;
  height: 14px;
  font-size: 14px;
  color: #222020;
  position: absolute;
  border: 1px solid #ADADAD;
  top: -3px;
  right: -4px;
  background-color: #FFFFFF;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default SingleImageUpload;