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
            ? <PageNumberBox key={item} />
            : <DefaultPageNumberBox key={item} />
        )
      })}
      {/* <PageNumberBox style={{
        cursor: "pointer",
        backgroundColor: "transparent",
        fontFamily: "Pretendard",
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "normal"
      }} onClick={() => setScrollIndex(1)}>
        TOP
      </PageNumberBox> */}
    </PageNumberContainer>
  )
};

const PageNumberContainer = styled.div`
  height: 150px;
  position: fixed;
  top: 40%;
  right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const DefaultPageNumberBox = styled.div`
  width: 28px;
  min-height: 28px;
  background-color: #adadadbe;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const PageNumberBox = styled(DefaultPageNumberBox)`
  background-color: #ffffffc7;
`;

export default PageNumber;