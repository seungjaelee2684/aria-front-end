import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../store/Translation';
import Search from '../assets/icons/search.png';
import NoticeList from '../components/NoticePage/NoticeList';

const Notice = () => {

  const japanese = useRecoilValue(translate);

  return (
    <LayoutContainer>
      <LayoutWrapper>
        <SearchBarContainer>
          <SearchBarWrapper>
            <SearBarInput
              placeholder={
                (japanese)
                ? "何をお探しですか？"
                : '무엇을 찾으시나요?'
              }/>
            <SearchIcon src={Search}/>
          </SearchBarWrapper>
          <SelectBar>
              <option>{japanese ? "全体" : "전체"}</option>
              <option>{japanese ? "進行中" : "진행중"}</option>
              <option>{japanese ? "イベント締切" : "행사마감"}</option>
              <option>{japanese ? "開始予定" : "시작예정"}</option>
          </SelectBar>
        </SearchBarContainer>
        <NoticeList />
      </LayoutWrapper>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  /* padding: 80px 0px; */
`;

const LayoutWrapper = styled.div`
  /* width: 100%; */
  margin: 110px 15%;
`;

const SearchBarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const SearchBarWrapper = styled.form`
  width: 100%;
  gap: 10px;
  display: flex;
  align-items: center;
`;

const SearBarInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  background: none;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  padding: 10px 20px;
  background-color: #e9e9e9;
  border-radius: 50px;
  
  &:active {
    border: 1px solid;
  }
`;

const SearchIcon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const SelectBar = styled.select`
  width: 300px;
  height: 30px;
  padding: 0px 10px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

export default Notice;