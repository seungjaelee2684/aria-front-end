import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Image from '../assets/images/testImage.png';
import Image2 from '../assets/images/mainimage.jpg';
import MentorList from '../components/MentorPage/MentorList';
import LeftArrow from '../assets/icons/leftArrow.png';
import RightArrow from '../assets/icons/rightArrow.png';
import FilterButton from '../components/MentorPage/FilterButton';
import SlideShow from '../components/MentorPage/SlideShow';
import MentorSearchBar from '../components/MentorPage/MentorSearchBar';
import { LayOutTitleContainer, TitleColorText, TitleBarContainer } from '../style/PageTitle';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { pageNumber } from '../store/Pages';
import { nationKind } from '../store/NationFilter';
import { getMentorsApi } from '../api/mentors';
import SlideWrapper from '../components/MentorPage/SlideWrapper';
import { isLogin } from '../store/IsLogin';
import { useNavigate } from 'react-router-dom';
import Error from './Error';

const Mentor = () => {

  const navigate = useNavigate();
  const page = useRecoilValue(pageNumber);
  const nationFilter = useRecoilValue(nationKind);
  const loginState = useRecoilValue(isLogin);
  const nation = nationFilter.englishpick

  const { isLoading, isError, error, data } = useQuery(["getMentorsList", page, nation], () => getMentorsApi({page, nation}), {
    refetchOnWindowFocus: false
  });

  console.log("강사전체목록", data?.data);

  if (isError) { return <Error /> };

  return (
    <LayoutContainer>
      <LayoutInWrapper>
        <SlideWrapper />
      </LayoutInWrapper>
      <MentorPageTitleContainer>
        A
        <TitleBarContainer />
        <TitleColorText color="#7769D0">R</TitleColorText>
        TIST
      </MentorPageTitleContainer>
      {(data?.data.isOperator)
        && <UploadButtonWrapper>
            <UploadButton onClick={() => navigate("/upload/mentor")}>
              강사 등록하기
            </UploadButton>
          </UploadButtonWrapper>}
      <MentorList data={data} loginState={loginState}/>
      <MentorSearchBar data={data}/>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 80px 0px 200px 0px;

  @media screen and (max-width: 500px) {
    padding: 50px 0px 180px 0px;
  }
`;

const LayoutInWrapper = styled.div`
  width: 100%;
`;

const MentorPageTitleContainer = styled(LayOutTitleContainer)`
  margin-top: 60px;

  @media screen and (max-width: 500px) {
    margin-top: 40px;
  }
`;

const UploadButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadButton = styled.button`
  width: 120px;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 3px;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  color: #FFFFFF;
  background-color: #5C9DFF;
  cursor: pointer;

  &:hover {
    background-color: #83b2f8;
  }

  &:active {
    width: 118px;
  }
`;

export default Mentor;