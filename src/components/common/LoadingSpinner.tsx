import React from 'react'
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
        <ClipLoader 
            color='#3c3ad6'
            size={150}
        />
    </SpinnerContainer>
  )
};

const SpinnerContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default LoadingSpinner;