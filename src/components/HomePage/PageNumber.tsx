import React from 'react'
import styled from 'styled-components';

const PageNumber = () => {
  return (
    <PageNumberContainer>
        PageNumber
    </PageNumberContainer>
  )
};

const PageNumberContainer = styled.div`
    width: 50px;
    height: 150px;
    position: fixed;
    top: 45%;
    right: 0;
    background-color: #FCFCFC;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default PageNumber;