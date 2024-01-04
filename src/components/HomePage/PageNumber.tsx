import React from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { MainPageNumber } from '../../store/MainPageNumber';

const PageNumber = () => {

  const [scrollIndex, setScrollIndex] = useRecoilState(MainPageNumber);
  const pages : number[] = [1, 2, 3, 4];

  return (
    <PageNumberContainer>
      {pages?.map((item : number, index : number) => {
        return (
          (scrollIndex === item)
            ? <PageNumberBox key={item} />
            : <DefaultPageNumberBox key={item} onClick={() => setScrollIndex(item)}/>
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
  z-index: 100;

  @media screen and (max-width: 1320px) {
    gap: 20px;
  }

  @media screen and (max-width: 836px) {
    gap: 0px;
    top: 80px;
    right: 0;
    flex-direction: row;
    height: fit-content;
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
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
  cursor: pointer;

  @media screen and (max-width: 1320px) {
    width: 20px;
    min-height: 20px;
  }

  @media screen and (max-width: 836px) {
    width: 100%;
    min-height: 4px;
  }
`;

const PageNumberBox = styled(DefaultPageNumberBox)`
  background-color: #ffffffc7;
  cursor: default;

  @media screen and (max-width: 836px) {
    background-color: #5350ffc6;
  }
`;

export default PageNumber;