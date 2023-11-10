import React from 'react'
import styled from 'styled-components';
import Banner from '../components/common/Banner';

const Counseling = () => {
  return (
    <LayOutContainer>
      <Banner page={4}/>
      Counseling
    </LayOutContainer>
  )
};

const LayOutContainer = styled.div`
  width: 100%;
  margin: 80px auto;
`;

export default Counseling;