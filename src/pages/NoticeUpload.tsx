import React from 'react'
import styled from 'styled-components';
import { LayOutTitleContainer, TitleBarContainer, TitleColorText } from '../style/PageTitle';

const NoticeUpload = () => {
  return (
    <AllContainer>
      <LayOutTitleContainer>
        <TitleBarContainer />
        NOTICE U
        <TitleColorText color="#15b849">P</TitleColorText>
        LOAD
      </LayOutTitleContainer>
      <UploadContainer>
        <LaneContainer>
          <TitleLabel>
            이미지 입력
          </TitleLabel>
        </LaneContainer>
        <LaneContainer>
          
        </LaneContainer>
        <LaneContainer>
          
        </LaneContainer>
        <LaneContainer>
          
        </LaneContainer>
      </UploadContainer>
    </AllContainer>
  )
};

const AllContainer = styled.section`
  width: 1320px;
  margin: 0px auto;
  padding: 88px 0px 200px 0px;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const UploadContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid;
  border-bottom: 2px solid;
`;

const LaneContainer = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 1px dotted #ADADAD;
`;

const TitleLabel = styled.label`
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
`;

export default NoticeUpload;