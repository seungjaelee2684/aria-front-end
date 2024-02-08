import React from 'react'
import styled from 'styled-components';
import { BoxContainer } from './InformUpload';
import { IoIosLink } from "react-icons/io";
import Home from '../../assets/curriculums/curriculumhome.webp';
import Youtube from '../../assets/curriculums/curriculumyoutube.webp';
import Twitter from '../../assets/curriculums/curriculumtwitter.webp';
import Instagram from '../../assets/curriculums/curriculuminstagram.webp';
import Artstation from '../../assets/curriculums/curriculumartstation.webp';
import Pixiv from '../../assets/curriculums/curriculumpixiv.webp';

interface EtcUploadProps {
  snsLink: any;
  setSnsLink: React.Dispatch<React.SetStateAction<any>>;
};

const EtcUpload : React.FC<EtcUploadProps> = ({ snsLink, setSnsLink }) => {
  
  
  
  return (
    <BoxContainer>
      <LayoutContainer>
        <LaneContainer>
          <Icon>
            <IoIosLink />
          </Icon>
          <Input 
            type='text'
            placeholder='https://www.example.com/'/>
          <SocialBox>
            <IconImage src={Home} alt=''/>
            홈페이지
          </SocialBox>
        </LaneContainer>
        <LaneContainer>
          <Icon>
            <IoIosLink />
          </Icon>
          <Input 
            type='text'
            placeholder='https://www.example.com/'/>
          <SocialBox>
            <IconImage src={Youtube} alt=''/>
            유튜브
          </SocialBox>
        </LaneContainer>
        <LaneContainer>
          <Icon>
            <IoIosLink />
          </Icon>
          <Input 
            type='text'
            placeholder='https://www.example.com/'/>
          <SocialBox>
            <IconImage src={Twitter} alt=''/>
            트위터
          </SocialBox>
        </LaneContainer>
        <LaneContainer>
          <Icon>
            <IoIosLink />
          </Icon>
          <Input 
            type='text'
            placeholder='https://www.example.com/'/>
          <SocialBox>
            <IconImage src={Instagram} alt=''/>
            인스타그램
          </SocialBox>
        </LaneContainer>
        <LaneContainer>
          <Icon>
            <IoIosLink />
          </Icon>
          <Input 
            type='text'
            placeholder='https://www.example.com/'/>
          <SocialBox>
            <IconImage src={Artstation} alt=''/>
            아트스테이션
          </SocialBox>
        </LaneContainer>
        <NoneBorderLane>
          <Icon>
            <IoIosLink />
          </Icon>
          <Input 
            type='text'
            placeholder='https://www.example.com/'/>
          <SocialBox>
            <IconImage src={Pixiv} alt=''/>
            픽시브
          </SocialBox>
        </NoneBorderLane>
        <ExplainLane>
          <ExplainText>
            * 해당되는 소셜의 강사계정 링크를 알맞게 입력해주세요.
          </ExplainText>
          <ExplainText>
            * 만약 강사의 계정이 없을 시 빈 상태로 등록해주세요.
          </ExplainText>
        </ExplainLane>
      </LayoutContainer>
    </BoxContainer>
  )
};

const LayoutContainer = styled.div`
  width: 96%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LaneContainer = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  border-bottom: 1px dotted #ADADAD;
`;

const NoneBorderLane = styled(LaneContainer)`
  border-bottom: none;
`;

const ExplainLane = styled(LaneContainer)`
  border-bottom: none;
  flex-direction: column;
  gap: 5px;
`;

const Icon = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222020;
`;

const Input = styled.input`
  width: 60%;
  height: 36px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  color: #222020;
  outline: none;
  border: 1px solid #ADADAD;
  border-radius: 5px;
  padding: 0px 20px;
  background-color: #FCFCFC;

  &::placeholder {
    color: #ADADAD;
  }

  &:hover {
    border: 1px solid #5C9DFF;
  }
`;

const SocialBox = styled.div`
  width: 120px;
  height: 36px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  color: #222020;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;

const ExplainText = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: start;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  color: #ADADAD;
`;

export default EtcUpload;