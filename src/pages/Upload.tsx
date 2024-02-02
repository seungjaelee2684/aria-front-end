import React from 'react'
import styled from 'styled-components';
import { LayOutTitleContainer, TitleBarContainer, TitleColorText } from '../style/PageTitle';

const Upload = () => {
  return (
    <LayoutContainer>
      <LayOutTitleContainer>
        <TitleBarContainer />
        MEN
        <TitleColorText color="#7769D0">T</TitleColorText>
        OR ADD
      </LayOutTitleContainer>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 1320px;
  margin: 0px auto;
  padding: 120px 0px;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }

  @media screen and (max-width: 500px) {
    padding: 60px 0px;
  }
`;

export default Upload;