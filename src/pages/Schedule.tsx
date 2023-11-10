import React from 'react'
import styled from 'styled-components';
import Banner from '../components/common/Banner';

const Schedule = () => {
  return (
    <LayOutContainer>
      <Banner page={3}/>
      Schedule
    </LayOutContainer>
  )
};

const LayOutContainer = styled.div`
  width: 100%;
  margin: 80px auto;
`;

export default Schedule;