import React from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { MainPageNumber } from '../../store/MainPageNumber';

const PageNumber = () => {

  const [scrollIndex, setScrollIndex] = useRecoilState(MainPageNumber);
  const pages : number[] = [1, 2, 3, 4, 5];

  return (
    <PageNumberContainer>
      {pages?.map((item : number, index : number) => {
        return (
          (scrollIndex === item)
            ? <PageNumberBox key={item}>
              0{item}
            </PageNumberBox>
            : <DefaultPageNumberBox key={item}>
              0{item}
            </DefaultPageNumberBox>
        )
      })}
      <PageNumberBox style={{cursor: "pointer"}} onClick={() => setScrollIndex(1)}>
        TOP
      </PageNumberBox>
    </PageNumberContainer>
  )
};

const PageNumberContainer = styled.div`
  height: 150px;
  position: fixed;
  top: 40%;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const DefaultPageNumberBox = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  color: #ADADAD;
  display: flex;
  align-items: center;
`;

const PageNumberBox = styled(DefaultPageNumberBox)`
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
`;

export default PageNumber;