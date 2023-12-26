import React from 'react'
import styled from 'styled-components';

const PageNumber = () => {
  return (
    <PageNumberContainer>
      <PageNumberBox>
        PageNumber
      </PageNumberBox>
      <PageNumberBox>
        PageNumber
      </PageNumberBox>
      <PageNumberBox>
        PageNumber
      </PageNumberBox>
      <PageNumberBox>
        PageNumber
      </PageNumberBox>
      <PageNumberBox>
        PageNumber
      </PageNumberBox>
    </PageNumberContainer>
  )
};

const PageNumberContainer = styled.div`
  height: 150px;
  position: fixed;
  top: 45%;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const PageNumberBox = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
`;

export default PageNumber;