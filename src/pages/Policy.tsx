import React from 'react'
import styled from 'styled-components';

const Policy = () => {
  return (
    <LayOutContainer>
      Policy
      <PolicyOutContainer>
        <PolicyHeader>
          운영정책
        </PolicyHeader>
      </PolicyOutContainer>
    </LayOutContainer>
  )
};

const LayOutContainer = styled.div`
  width: 100%;
  margin: 80px auto;
`;

const PolicyOutContainer = styled.div`
  width: 1320px;
  min-height: 400px;
  margin: 20px auto;
  background-color: #e9e9e9;
  border: 2px solid #ADADAD;
  border-radius: 10px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  transition: all 0.3s linear;
  user-select: none;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const PolicyHeader = styled.div`
  width: 100%;
  padding: 0px 10px;
  display: flex;
`;

export default Policy;