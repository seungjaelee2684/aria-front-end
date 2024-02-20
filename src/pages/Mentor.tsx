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

const Mentor = () => {

  const page = useRecoilValue(pageNumber);
  const nationFilter = useRecoilValue(nationKind);
  const loginState = useRecoilValue(isLogin);
  const nation = nationFilter.englishpick

  const { isLoading, isError, error, data } = useQuery(["getMentorsList", page, nation], () => getMentorsApi({page, nation}), {
    refetchOnWindowFocus: false,
  });

  console.log("강사전체목록", data?.data);

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

export default Mentor;