import React, { useState } from 'react'
import styled from 'styled-components'
import { NoticeTrans } from '../../languages/NoticeTrans';
import { NotificationData } from '../../data/NotificationData';
import NoticeFilterModal from './NoticeFilterModal';
import { TiArrowSortedDown } from "react-icons/ti";

interface NotificationFilterProps {
    noticeFilter: string;
    setNoticeFilter: React.Dispatch<React.SetStateAction<string>>;
};

const NotificationFilter : React.FC<NotificationFilterProps> = ({ noticeFilter, setNoticeFilter }) => {
  
    const language = localStorage.getItem("language");

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const filterState : string[] = ["all", "notice", "event"];

    const filterTrans = (Num : number) => {
        switch (language) {
            case "chinese" :
                return NoticeTrans[Num]?.chinesetext;
            case "japanese" :
                return NoticeTrans[Num]?.japanesetext;
            case "korean" :
                return NoticeTrans[Num]?.text;
            default :
                return NoticeTrans[Num]?.englishtext;
        };
    };
  
    return (
        <FilterOutWrapper onClick={() => setIsModalOpen(!isModalOpen)}>
            {filterTrans(0)}
            <TiArrowSortedDown />
            {(isModalOpen)
                && <NoticeFilterModal
                    noticeFilter={noticeFilter}
                    setNoticeFilter={setNoticeFilter}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}/>}
        </FilterOutWrapper>
    )
};

const FilterOutWrapper = styled.div`
    width: 88px;
    height: 34px;
    padding: 0px 16px;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid #e9e9e9;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    gap: 28px;
    user-select: none;
    position: relative;
    cursor: pointer;
`;

export default NotificationFilter;