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

const Mentor = () => {

  return (
    <LayoutContainer>
      <LayoutInWrapper>
        <SlideShow />
      </LayoutInWrapper>
      <MentorPageTitleContainer>
        A
        <TitleBarContainer />
        <TitleColorText color="#7769D0">R</TitleColorText>
        TIST
      </MentorPageTitleContainer>
      <MentorList />
      <MentorSearchBar />
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 80px 0px 120px 0px;

  @media screen and (max-width: 500px) {
    padding: 50px 0px 100px 0px;
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