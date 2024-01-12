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
            ? <PageNumberBox key={index} />
            : <DefaultPageNumberBox key={index} onClick={() => setScrollIndex(item)}/>
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
  gap: 18px;
  z-index: 100;

  @media screen and (max-width: 1320px) {
    gap: 12px;
  }

  @media screen and (max-width: 836px) {
    top: 42%;
    right: 1%;
    gap: 10px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const DefaultPageNumberBox = styled.div`
  width: 22px;
  min-height: 22px;
  background-color: #adadadbe;
  /* color: #FFFFFF; */
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;

  @media screen and (max-width: 1320px) {
    width: 18px;
    min-height: 18px;
  }

  @media screen and (max-width: 836px) {
    width: 14px;
    min-height: 14px;
  }
`;

const PageNumberBox = styled(DefaultPageNumberBox)`
  background-color: #ffffffc7;
  box-shadow: #ffffff 0px 0px 6px 0px;
  cursor: default;
`;

export default PageNumber;